import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerElements=[{
    type: 'server',
    name:'server name',
    content: 'content'

  }]
  title = 'schoolapp';
}
