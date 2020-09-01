import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsResolverService } from './services/projects-resolver.service';
import { AcceuilComponent } from './body/acceuil/acceuil.component';
import { CheveauxComponent } from './body/cheveaux/cheveaux.component';
import { InfoComponent } from './body/info/info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChevalInfoComponent } from './body/cheveaux/cheval/cheval-info/cheval-info.component';
import { ContactComponent } from './body/contact/contact.component';

const appRoutes: Routes = [
    { path: 'chevaux', component: CheveauxComponent, resolve: {resolvedProject: ProjectsResolverService} },
    { path: 'chevaux/:name', component: ChevalInfoComponent, resolve: {resolvedProject: ProjectsResolverService} },
    { path: 'accueil', component: AcceuilComponent, resolve: {resolvedProject: ProjectsResolverService} },
    { path: 'info', component: InfoComponent, resolve: { resolvedProject: ProjectsResolverService } },
    { path: 'contact', component: ContactComponent, resolve: {resolvedProject: ProjectsResolverService} },
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            anchorScrolling: 'enabled',
        }),
    ],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule { }
