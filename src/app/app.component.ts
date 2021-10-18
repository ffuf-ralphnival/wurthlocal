import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testproject';
  frameSrc: string;

  constructor(private router: Router) {
    
    // window.addEventListener('load', () => {
    //   var frame = document.getElementById('testIframe') as any;
    //   const data = {
    //     "recid": "1",
    //     "access_token": "de21.614940f632f06-614940f632f09-1aacc1aa4f10b4e741be23bed27d79c0",
    //     "uuid": "c26ed740-8242-4465-ba60-779e7f5f525e",
    //     "companyid": "7098"
    // }
    //   frame.contentWindow.postMessage(data, '*');
    // });
  }

  back(): void {
    this.router.navigate(['']);
  }

  project1(): void {
    this.router.navigate(['test1']);
  }

  project2(): void {
    this.router.navigate(['test2']);
  }
}
