import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
frameContent: any;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  

   }

  ngOnInit(): void {
    this.frameContent = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:4200');

    
  }

  loadFrame(tagName) {
    const data = {
      "recid": "2",
      "access_token": "de21.614be1b00ba12-614be1b00ba13-965d5a0ef83d07edfc18dfc0a0c40358",
      "uuid": "222",
      "companyid": "7098"
    }
    tagName.contentWindow.postMessage(data, '*');
  }
  
  project1(): void {
    window.addEventListener('load', () => {
      var frame = document.getElementById('testIframe') as any;
      const data = {
        "recid": "1",
        "access_token": "de21.614940f632f06-614940f632f09-1aacc1aa4f10b4e741be23bed27d79c0",
        "uuid": "c26ed740-8242-4465-ba60-779e7f5f525e",
        "companyid": "7098"
    }
      frame.contentWindow.postMessage(data, '*');
    });
    
  }

  project2(): void {
    window.addEventListener('load', () => {
      var frame = document.getElementById('testIframe') as any;
      const data = {
        "recid": "2",
        "access_token": "de21.614940f632f06-614940f632f09-1aacc1aa4f10b4e741be23bed27d79c0",
        "uuid": "124141e",
        "companyid": "7098"
    }
      frame.contentWindow.postMessage(data, '*');
    });
    
  }

  get frameSrc() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.frameContent);
  }

  set frameSrc(src) {
    this.frameContent = src;
  }

}
