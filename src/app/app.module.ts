import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ServiceAllService } from './services/service-all.service';
import { ProjectsResolverService } from './services/projects-resolver.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './header/nav/nav.component';
import { AcceuilComponent } from './body/acceuil/acceuil.component';
import { CheveauxComponent } from './body/cheveaux/cheveaux.component';
import { InfoComponent } from './body/info/info.component';
import { ChevalComponent } from './body/cheveaux/cheval/cheval.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './body/news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChevalInfoComponent } from './body/cheveaux/cheval/cheval-info/cheval-info.component';
import { BlockInfoComponent } from './body/cheveaux/cheval/cheval-info/block-info/block-info.component';
import { GenealogieComponent } from './body/cheveaux/cheval/cheval-info/genealogie/genealogie.component';
import { CarrousselleComponent } from './body/cheveaux/cheval/cheval-info/carrousselle/carrousselle.component';
import { ProfilComponent } from './body/cheveaux/cheval/cheval-info/profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AcceuilComponent,
    CheveauxComponent,
    InfoComponent,
    ChevalComponent,
    PageNotFoundComponent,
    NewsComponent,
    ChevalInfoComponent,
    BlockInfoComponent,
    GenealogieComponent,
    CarrousselleComponent,
    ProfilComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [
    ServiceAllService,
    ProjectsResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
