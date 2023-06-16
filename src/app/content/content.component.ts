import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  visible: boolean = false;
  icerik: any[] = [];
  dialogBaslik: string = '';
  dialogAciklama: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/icerik.json').subscribe(data => {
      this.icerik = data;
    });
  }

  showDialog(baslik: string, aciklama: string) {
    this.dialogBaslik = baslik;
    this.dialogAciklama = aciklama;
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }
}
