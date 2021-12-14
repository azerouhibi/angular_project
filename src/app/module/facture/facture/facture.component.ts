import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Facture } from '../model/facture.model';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  @Input()facture? : Facture;
  // @Output() notification = new EventEmitter<Facture>();
  @Output() deleteNotifEvent = new EventEmitter<Facture>();
  @Output() updateNotifEvent = new EventEmitter<Facture>();
  constructor() { }

  ngOnInit(): void {

  }
  // notifierParent(){
  //    this.notification.emit(this.facture)
  // }
  deleteNotif(){
    this.deleteNotifEvent.emit(this.facture)
  }
  updateNotif(){
    this.updateNotifEvent.emit(this.facture)
  }

}
