  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { FacturesComponent } from './factures/factures.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';

const routes: Routes = [{path:'',redirectTo:'factures',pathMatch:'full'},
  {path: "factures", component : FacturesComponent},
  {path: "add-facture", component : AddFactureComponent},
  {path: "updateFacture/:id", component: UpdateFactureComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class FactureRoutingModule { }
