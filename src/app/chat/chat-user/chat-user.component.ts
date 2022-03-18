import { Subscription } from 'rxjs';
import { UserData } from './../../_models/data.model';
import { User } from './../../_models/user.models';
import { UserServicesService } from './../../services/user-services.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Message } from 'src/app/_models/message.models';
import { getDatabase, ref, onValue } from "firebase/database";
import { MessageInfo } from 'src/app/_models/messageInfo.models';


@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit {

  users!:User[];
  sender!:User;
  receiver!:User;
  data!:UserData;
  showSppiner:boolean = true;
  counter:number= 1;
  chatRef!: AngularFireList<Number> ;
  receiverMessagesInfo: MessageInfo[] = [];
  userIDs: number[] = [];
  currentUserId = parseInt(localStorage.getItem('user_id')!)
  messageInfo!: MessageInfo
  chatSubscription?: Subscription


  senderRef!: AngularFireList<Message> ;
  receiverRef!: AngularFireList<Message> ;
  seenCountRef!: AngularFireObject<Number>;
  friendUnseenRef!: AngularFireObject<Number>;
  messages!:Message[];
  messageObj!:Message
  @ViewChild('messageInput') messageElement!: ElementRef;

  receiverID = 0;
  senderID = parseInt(localStorage.getItem('user_id')!)
  firebaseDatabase!: AngularFireDatabase

  constructor(public db: AngularFireDatabase, private service:UserServicesService){

     this.firebaseDatabase = db;
     const dbd = getDatabase();
     const dbRef = ref(dbd, '/chat/' + this.currentUserId);


   onValue(dbRef, (snapshot) => {
    snapshot.forEach((child) => {
      const key = child.key;
      this.userIDs.push(parseInt(key!))
      this.receiverMessagesInfo.push({user_id: parseInt(key!), unseenCount:child.child('unseen_count').val()})
    });
    this.getUsers();
  },
  {
    onlyOnce: true
  });

  onValue(dbRef, (snapshot) => {
    this.receiverMessagesInfo = []
    snapshot.forEach((child) => {
      const key = child.key;
      this.receiverMessagesInfo.push({user_id: parseInt(key!), unseenCount:child.child('unseen_count').val()})
      if(this.users != null)
        this.setMessagesCount()
    });
  },
  {
    onlyOnce: false
  });

  }

  setMessagesCount() {
    for(let user of this.users) {
      if(this.receiver != null && this.receiver.id == user.id) {
        this.friendUnseenRef.set(0)
      } else {
       this.messageInfo = this.receiverMessagesInfo.find(info  => info.user_id == user.id)!
       if(this.messageInfo != null && this.messageInfo.unseenCount != null)
         user.unseenCountMessages = this.messageInfo.unseenCount
       }
   }
  }

  setChatDatabaseReferences() {
    this.senderRef = this.firebaseDatabase.list('/chat/' + this.senderID + '/' +this.receiverID);
    this.receiverRef = this.firebaseDatabase.list('/chat/' + this.receiverID + '/' +this.senderID);
    this.seenCountRef = this.firebaseDatabase.object('/chat/' + this.receiverID + '/' +this.senderID + '/unseen_count');
    this.friendUnseenRef = this.firebaseDatabase.object('/chat/' + this.senderID + '/' +this.receiverID + '/unseen_count');
  }

  getUsers(){

    this.service.getUsers(this.userIDs).subscribe(res=>{
         this.users=res;
         for(let user of this.users) {
            this.messageInfo = this.receiverMessagesInfo.find(info  => info.user_id == user.id)!
            if(this.messageInfo.unseenCount != null)
              user.unseenCountMessages = this.messageInfo.unseenCount
         }
         this.showSppiner=false;

    });
  }

  getChatMessages() {
    this.chatSubscription = this.senderRef!.valueChanges().subscribe(msgs=>{
      this.messages = msgs
      this.showSppiner=false;
      this.users.find(user=> user.id == this.receiverID)!.unseenCountMessages = 0
   });
  }
  ngOnInit(): void {
  }


  sendMessage(message: string) {
    this.messageElement.nativeElement.value = ''


    this.messageObj ={
      body: message,
      senderID: this.senderID
    }

    this.senderRef.push(this.messageObj);
    this.receiverRef.push(this.messageObj);
    this.increaseUnSeenCounter()
  }

  increaseUnSeenCounter() {
    const db = getDatabase();
    const dbRef = ref(db, '/chat/' + this.receiverID +'/'+this.senderID+'/unseen_count');

     onValue(dbRef, (snapshot) => {
       if(snapshot.exists()==true) {
         this.counter = snapshot.val();
         this.counter++;
       }
       this.seenCountRef.set(this.counter)

    },
    {
      onlyOnce: true
    });
}

  getSenderById(){
    this.service.getSenderById(this.senderID).subscribe(res=>{
         this.sender=res.data;
    });
  }


  onChatClick(user:User) {
    if(this.chatSubscription != null) {
      this.chatSubscription.unsubscribe()
    }
    this.receiverID = user.id;
    this.receiver = user;
    this.setChatDatabaseReferences()
    this.getChatMessages()
    this.friendUnseenRef.set(0)
  }
}



