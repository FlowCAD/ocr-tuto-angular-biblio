import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyDRhem_119goQYAvlHnU41D8LOC4RIZKwY',
      authDomain: 'my-biblio-336fc.firebaseapp.com',
      databaseURL: 'https://my-biblio-336fc.firebaseio.com',
      projectId: 'my-biblio-336fc',
      storageBucket: 'my-biblio-336fc.appspot.com',
      messagingSenderId: '316560171455'
    };
    firebase.initializeApp(config);
  }
}
