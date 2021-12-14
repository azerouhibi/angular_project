import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
//import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FournisseurModule } from './module/fournisseur/fournisseur.module';
import { AddFournisseurComponent } from './module/fournisseur/add-fournisseur/add-fournisseur.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { PageContentComponent } from './pages/page-content/page-content.component';
import { TippyModule } from '@ngneat/helipopper';
import { FactureModule } from './module/facture/facture.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    PageContentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    //MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FournisseurModule,
    FactureModule,
    TippyModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
 // entryComponents:[AddFournisseurComponent]
})
export class AppModule { }
