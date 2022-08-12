import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] =[];

  // adding a message to the cache
  add(message:string) {
    this.messages.push(message);
  }

  // clear the message to the cache
  clear() {
    this.messages = [];
  }

}
