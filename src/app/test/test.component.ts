import { AfterViewInit, Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {
frameContent: any;


  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.frameContent = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:4200');
    // window.addEventListener('load', function() {

    // });
  

   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {


  }

  // Web project 1 : ecc2dd73-f578-4ae7-a4f3-2b57bf7a0038
  // Web project 2 : 74e81d1e-8db1-4c41-a20f-d3622957d225
  // Web archived 1 : 6a6ef334-d8ed-4571-be63-d8930260d254

  loadFrame(tagName) {
    const data = {
      "recid": "1",
      "access_token": "de21.615ec2e1d8fab-615ec2e1d8fae-52e38ca3bb14662b94f3398e2bae4c10",
      // "uuid": "6a6ef334-d8ed-4571-be63-d8930260d254",
      // "uuid": "ecc2dd73-f578-4ae7-a4f3-2b57bf7a0038",
      "uuid": "ecc2dd73-f578-4ae7-a4f3-2b57bf7a0038",
      "companyid": "2"
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
