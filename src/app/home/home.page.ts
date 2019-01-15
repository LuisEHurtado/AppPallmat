import { Component } from '@angular/core';

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
    // const requestOptions = new RequestOptions({ headers: headers });

    // let postData = {
    //         "email": this.email,
    //         "password": this.password
    // }

    this.http.post("url", {"email":this.email, "password":this.password})
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }

}
