import { Message } from './../../../_models/message.models';
import { UserData } from './../../../_models/data.model';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../../_models/user.models';
import { UserServicesService } from './../../../services/user-services.service';
import { Component, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { getDatabase, ref, onValue } from "firebase/database";

@Component({
  selector: 'app-listchat',
  templateUrl: './listchat.component.html',
  styleUrls: ['./listchat.component.css']
})
export class ListchatComponent implements OnInit,AfterViewChecked {
  sender!:User;
  receiver!:User;
  data!:UserData;
  showSppiner:boolean = true;



  senderRef!: AngularFireList<Message> ;
  receiverRef!: AngularFireList<Message> ;
  messages!:Message[];
  messageObj!:Message
  @ViewChild('messageInput') messageElement!: ElementRef;
  @ViewChild('scrollMe')   private myScrollContainer!: ElementRef;


  receiverID =this.param.snapshot.params['id'];
  senderID = parseInt(localStorage.getItem('user_id')!)

  constructor(public db: AngularFireDatabase,private param:ActivatedRoute,private service:UserServicesService,){

    this.receiverID = parseInt(this.param.snapshot.paramMap.get('id')!);
    this.senderRef = db.list('/chat/' + this.senderID + '/' +this.receiverID);
    this.receiverRef = db.list('/chat/' + this.receiverID + '/' +this.senderID);
   this.getChatMessages();
this.getSenderById();
this.getReciverById();

  }

  getChatMessages() {
    this.senderRef!.valueChanges().subscribe(msgs=>{
      this.messages = msgs
      console.log(length + " " + this.messages[0].body)
      this.showSppiner=false;
   });
  }
  ngOnInit(): void {
    this.scrollToBottom();

  }
  ngAfterViewChecked() {
    this.scrollToBottom();
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

  getSenderById(){
    this.service.getSenderById(this.senderID).subscribe(res=>{
        console.log(res);
         this.sender=res.data;
    });
  }
  getReciverById(){
    this.service.getReciverById(this.receiverID).subscribe(res=>{
        console.log(res);
         this.receiver=res.data;
    });
  }
  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
}



}
