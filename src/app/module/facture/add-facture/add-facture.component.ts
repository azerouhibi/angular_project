import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FactureService } from 'src/app/module/facture/services/facture.service';
import { Facture } from '../model/facture.model';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
  newFacture = new Facture();
  div1:boolean=false

  @Input() facture?:Facture;
  @Output() addEvent=new EventEmitter();
  constructor(private factureService: FactureService,     private router :Router    ) { }
  div1Function(){
    this.div1=!this.div1
}
  addFacture(){
    this.factureService.ajouterFacture(this.newFacture)
    .subscribe(prod => {
    console.log(prod);
    });
    this.addEvent.emit(this.router.navigate(['factures']))
    }
  
  ngOnInit(): void {
    
  }
  // save(){
    
  //   // this.addEvent.emit(this.factureService.ajouterFacture(this.newFacture).subscribe(prod => {console.log(prod) } ) )
  //   this.addEvent.emit(this.facture);
  //   this.facture = new Facture();
  // }

}
