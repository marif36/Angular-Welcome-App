import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome-app';

  constructor(@Inject(MessageService) private msgService : MessageService){
  }

welcomeMsg:string="";
  
public getWelcomeMsg(){
let resp = this.msgService.GetWelcomeMsg();
resp.subscribe((data) => this.welcomeMsg = data)
  }
}

