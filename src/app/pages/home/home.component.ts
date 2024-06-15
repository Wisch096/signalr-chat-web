import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  messages: Message[] = [
    {
      text: 'Olá',
      userName: 'Matheus'
    },
    {
      text: 'Olá',
      userName: 'Laís'
    },
  ];
  messageControl = new FormControl('');
  userName: string = 'Matheus';

  sendMessage() {}
}
