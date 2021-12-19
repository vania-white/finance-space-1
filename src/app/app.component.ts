import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscriber} from "rxjs";

interface LogSmthng {
  log(data: string): void;
}

abstract class AbsctractLogSmthng {
  abstract log1(data: string): void;
}

class Test extends AbsctractLogSmthng implements LogSmthng{
  log(data: string): void {
    console.log(data);
  }

  log1(data: string): void {
    console.log(data);
  }
}

const test = new Test();
test.log1('1');

// class User {
//   email!: string;
//   password!: string;
//   name!: string;
//   lastname!: string;
//   __id!: string;
// }

// class MyHttpClient {
//   get<T>(url: string): Observable<T> {
//     return new Observable<T>((subscriber: Subscriber<T>) => {
//       const xhr: XMLHttpRequest = new XMLHttpRequest();
//       xhr.addEventListener('load', (e: ProgressEvent<XMLHttpRequestEventTarget>) => {
//         subscriber.next(xhr.response);
//         subscriber.complete();
//       });
//       xhr.addEventListener('error', (e: ProgressEvent<XMLHttpRequestEventTarget>) => subscriber.error(e));
//       xhr.open('GET', url);
//       xhr.send();
//     });
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // private readonly myHttp: MyHttpClient;

  constructor(
    private http: HttpClient
  ) {
    // this.myHttp = new MyHttpClient();
  }

  ngOnInit(): void {
    // console.log(this.activeItem);
    //
    // this.http.get('http://192.168.50.71/users/61882d16562ee80bf2f4e715').subscribe(
    //   response => console.log('its response ' + response),
    //   err => console.log(err.error.message),
    //   () => console.log('its complete')
    // );
    //
    // this.myHttp.get('http://192.168.50.71/users').subscribe(console.log)
  }
}
