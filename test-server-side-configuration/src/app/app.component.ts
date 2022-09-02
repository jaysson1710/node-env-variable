import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.Path;
  title2 = environment.OS1;
  title3 = environment.Test;
  title4 = environment.Test1;
}
