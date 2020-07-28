import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsResolverService } from './services/projects-resolver.service';
import { AcceuilComponent } from './body/acceuil/acceuil.component';
import { CheveauxComponent } from './body/cheveaux/cheveaux.component';
import { InfoComponent } from './body/info/info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChevalInfoComponent } from './body/cheveaux/cheval/cheval-info/cheval-info.component';

const appRoutes: Routes = [
    { path: 'cheveaux', component: CheveauxComponent, resolve: {resolvedProject: ProjectsResolverService} },
    { path: 'cheveaux/:name', component: ChevalInfoComponent, resolve: {resolvedProject: ProjectsResolverService} },
    { path: 'acceuil', component: AcceuilComponent, resolve: {resolvedProject: ProjectsResolverService} },
    { path: 'info', component: InfoComponent, resolve: {resolvedProject: ProjectsResolverService} },
    { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule { }
