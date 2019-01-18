import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  email = '';
  password = ''
  makeLogin() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    return this.http.post('http://localhost:8000/api/login', {"email":this.email, "password":this.password}, {})
    .then(data => {
      console.log(data); // data received by server

    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }


}
