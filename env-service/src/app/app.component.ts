import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { EnvService } from './env.service';
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public env: EnvService
  ) {
    
  }

  title=this.env.OS1
  
}

