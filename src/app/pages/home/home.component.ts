import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as signalr from '@microsoft/signalr'
import { NameDialogComponent } from 'src/app/shared/name-dialog/name-dialog.component';

interface Message {
  userName: string,
  text: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  messages: Message[] = [];
  messageControl = new FormControl('');
  userName!: string;
  connection = new signalr.HubConnectionBuilder()
    .withUrl("http://localhost:5259/chat")
    .build();

  constructor(public dialog: MatDialog) {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(NameDialogComponent, {
      width: '250px',
      data: this.userName,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.userName = result;
      this.startConnection();
    });
  }

  startConnection() {
    this.connection.on("newMessage", (userName: string, text: string) => {
      this.messages.push({
        text: text,
        userName: userName
      });
    });
    this.connection.start();
    console.log("startiys")
  }

  sendMessage() {
    console.log(this.messageControl.value);
    this.connection.send("newMessage", this.userName, this.messageControl.value)
      .then(() => {
        console.log(this.messages);
        this.messageControl.setValue('');
        console.log("akjskaj");

      });
  }
}
