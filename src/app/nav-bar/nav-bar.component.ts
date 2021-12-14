import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatDialogConfig } from "@angular/material/dialog";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Fournisseur } from '../module/fournisseur/Models/Fournisseur';
import { FournisseurService } from '../module/fournisseur/service/fournisseur.service';
import { AddFournisseurComponent } from '../module/fournisseur/add-fournisseur/add-fournisseur.component';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  fournisseur!:Fournisseur[];

  constructor( private dialog: MatDialog,private service:FournisseurService,private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {
    this.service.fetchFournisseur().subscribe(
      (t)=>{
        this.fournisseur=t;
        this.router.navigateByUrl("home");

      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
 
  onCreate(){
   
    this.dialog.open(AddFournisseurComponent);

}




closeResult = '';


  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
