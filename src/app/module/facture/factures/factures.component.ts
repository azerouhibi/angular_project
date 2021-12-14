import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facture } from '../model/facture.model';
import { FactureService } from '../services/facture.service';
import { UpdateFactureComponent } from '../update-facture/update-facture.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from "@angular/material/dialog";
import { HeaderComponent } from 'src/app/pages/header/header.component';
import { getGeneratedNameForNode } from 'typescript';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {
  // @ViewChild(UpdateFactureComponent) c!: UpdateFactureComponent;
  factures!: Facture[];
  cat?: any;
  p = 1;
  j = -1;
  show = false;
  value = 'Clear me';
  // facturesFiltrèes?: Facture[];
  public current_factures?: Facture[];
  ListFacture!: Facture[];
  inputFacture!: Facture;
  showFormTemplate!: boolean;
  buttonValue!: string;
  buttonValue1: string = "modifier";
  div1: boolean = false
  @Output() deleteNotifEvent = new EventEmitter<Facture>();
  test!: Facture;
  i!: number;
  currentFacture = new Facture();
  searchValue!: string;
  gg?: HeaderComponent;

  constructor(private factureService: FactureService, private router: Router, private activatedRoute: ActivatedRoute, private modalService: NgbModal, private dialog: MatDialog) {

  }


  div1Function(facture: Facture) {
    this.show = !this.show;
    this.j = this.factures.indexOf(facture);
    if (this.div1 = !this.div1) {
      this.buttonValue1 = "cancel";
      

    } else {
      this.buttonValue1 = "modifier";
    }
  }
  showForm() {
    if (this.showFormTemplate === false) {
      this.showFormTemplate = true
      this.buttonValue = "go Back to the List";
      this.inputFacture = new Facture();
    }
    else {
      this.buttonValue = "add new Product";
      this.showFormTemplate = false
    }
  }
  deleteFacture(p: Facture) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.factureService.deleteFacture(p.idFacture).subscribe(() => {
        console.log("facture supprimé");
      });
    this.reloadPage()
    
  }

  facturesFiltres?: Facture[]
  search() {
    this.i = this.cat.length;
    if (this.cat != "") {

      this.factures = this.factures?.filter(res => {
        return res.idFacture.toString().match(this.cat.toString())

      });
    } else if (this.cat == "") {
      this.ngOnInit();
    }
  }
  ggf(e: any) {
    this.factureService.listeFacture().subscribe(prods => {
      console.log(prods);
      this.factures = prods;
    });
  }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.buttonValue = "add new Facture";
    this.factureService.listeFacture().subscribe(prods => {
      console.log(prods);
      this.factures = prods;
    });

  }
  reloadPage() { let currentUrl = this.router.url; this.router.routeReuseStrategy.shouldReuseRoute = () => false; this.router.onSameUrlNavigation = 'reload'; this.router.navigate([currentUrl]); }

  save(facture: Facture = new Facture()): void {
    this.showFormTemplate = false;
    this.factureService.listeFacture().subscribe(prods => {
      console.log(prods);
      this.factures = prods;
      this.reloadPage()
    });
    
  }

  onCreate() {

    this.dialog.open(UpdateFactureComponent, {
      height: '400px',
      width: '600px',
    });

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
  open2(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  GetAllFacture1()
  {console.log("getallFournisseur");
    this.factureService.listeFacture2().subscribe(
      (t)=>{

        // console.log(t);
        this.ListFacture=t;
        console.log(this.ListFacture);
       
      },
      (error)=>{
        // console.log(error.status)
      }
    );
  }
  Activer(facture:Facture)
  {

    let i = this.ListFacture.indexOf(facture);
  facture.state=1;
  this.factureService.updateFacture(facture).subscribe(data => {
    this.GetAllFacture1();
this.reloadPage();
    //this.ListFournisseur.splice(i, 1)

    });
  }

}


