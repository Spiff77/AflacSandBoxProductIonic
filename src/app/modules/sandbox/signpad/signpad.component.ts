import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import SignaturePad from 'signature_pad';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-signpad',
  templateUrl: './signpad.component.html',
  styleUrls: ['./signpad.component.scss'],
})
export class SignpadComponent implements AfterViewInit {

  @ViewChild('canvas') signature;
  constructor(private platform: Platform) { }


  ngAfterViewInit(): void {
    const canvas = this.signature.nativeElement;
    canvas.width = this.platform.width();
    canvas.height = this.platform.height();
    this.signature = new SignaturePad(canvas,
    );
  }


  save(){
    console.log(this.signature.toDataURL());
  }

}
