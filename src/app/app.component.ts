import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quantum-key-generator';
  constructor(public apiService: ApiServiceService) {}
  generatedKey: string = "";
  msg: string = "";
  key: any;
  encryptedMsg: string = "";
  dencryptedMsg: string = "";
  encrypted: any;
  getKey(){
    this.apiService.getKey().subscribe(resp => {
      this.generatedKey = resp;
      this.key = CryptoJS.enc.Hex.parse(this.generatedKey);
    })
  }

  encrypt(){
    var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
    this.encrypted = CryptoJS.AES.encrypt(this.msg, this.key, { iv: iv });
    this.encryptedMsg = this.encrypted;
    console.log(this.encryptedMsg);
  }

  decrypt(){
    var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
    var decrypt  = CryptoJS.AES.decrypt(this.encrypted, this.key, { iv: iv });
    console.log(decrypt);
    this.dencryptedMsg = decrypt.toString(CryptoJS.enc.Utf8);
  }

}
