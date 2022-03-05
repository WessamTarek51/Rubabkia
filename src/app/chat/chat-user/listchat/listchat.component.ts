import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { getDatabase, ref, onValue } from "firebase/database";

@Component({
  selector: 'app-listchat',
  templateUrl: './listchat.component.html',
  styleUrls: ['./listchat.component.css']
})
export class ListchatComponent implements OnInit {

  chatRef!: AngularFireList<Number> ;
  userIDs!:Number[];
  currentUserId = parseInt(localStorage.getItem('user_id')!)


  constructor(public dbb: AngularFireDatabase) {
    this.chatRef = dbb.list('/chat/' + this.currentUserId )
    const db = getDatabase();

    const dbRef = ref(db, '/chat/' + this.currentUserId);

    this.chatRef!.valueChanges().subscribe(ids=>{
      //this.userIDs = ids.keys.
      //console.log(this.userIDs)
      console.log(ids.keys)
   });
   onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key;
      this.userIDs.push(parseInt(key!))
    });
    console.log(this.userIDs)
  }, {
    onlyOnce: true
  });

  }

  ngOnInit(): void {
  }

}
