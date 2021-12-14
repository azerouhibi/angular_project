import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FactureService } from 'src/app/module/facture/services/facture.service';
import { FacturesComponent } from '../factures/factures.component';
import { Facture } from '../model/facture.model';

@Component({
  selector: 'app-update-facture',
  templateUrl: './update-facture.component.html',
  styles: [
  ]
})
export class UpdateFactureComponent implements OnInit {
    @Input() id!:number;
    div1:boolean=true;
    

    currentFacture = new Facture();
    // @Input() facturess!: Facture; //composant fils peut recevoir des informations depuis son composant parent
    @Output() notif= new EventEmitter();
  // @ViewChild(FacturesComponent) f!: FacturesComponent;
  
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private factureService: FactureService, private modalService: NgbModal, private dialog: MatDialog) { }

    
    updateFacture() {
      this.factureService.UpdateStock(this.currentFacture).subscribe(prod => {

      this.notif.emit(this.router.navigate(['factures']));
      },(error) => { alert("Problème lors de la modification !"); }
      );
      }



      div1Function(){
        this.div1=!this.div1
    }
    GetMaxId(t: Facture[]) {
      let Max = 0;
      let i = 0;
      let n = t.length;
  
      while (i < n) {
        if (t[i].idFacture > Max) {
          Max = t[i].idFacture;
        } else {
          i++;
        }
      }
      console.log('Max : ' + Max);
      return Max + Number(1);
    }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params.id);

    this.factureService.consulterFacture(this.id).
      subscribe(prod => { this.currentFacture = prod; });



  }
  closeResult = '';


  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }
  

}
