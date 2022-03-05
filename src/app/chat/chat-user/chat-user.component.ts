import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Message } from 'src/app/_models/message.models';


@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit {

  senderRef!: AngularFireList<Message> ;
  receiverRef!: AngularFireList<Message> ;
  messages!:Message[];
  messageObj!:Message
  @ViewChild('messageInput') messageElement!: ElementRef;

  receiverID = 1
  senderID = parseInt(localStorage.getItem('user_id')!)

  constructor(public db: AngularFireDatabase){

    this.senderRef = db.list('/chat/' + this.senderID + '/' +this.receiverID);
    this.receiverRef = db.list('/chat/' + this.receiverID + '/' +this.senderID);
   this.getChatMessages();


  }

  getChatMessages() {
    this.senderRef!.valueChanges().subscribe(msgs=>{
      this.messages = msgs
      console.log(length + " " + this.messages[0].body)
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
  }

}
