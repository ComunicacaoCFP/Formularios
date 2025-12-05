import { Routes } from '@angular/router';
import { FormBioComponent } from './form-bio/form-bio.component';
import { FormQuiComponent } from './form-qui/form-qui.component';
import { FormFisComponent } from './form-fis/form-fis.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
    path: 'form-bio',
    component: FormBioComponent
    },
    {
    path: 'form-fis',
    component: FormFisComponent
    },
    {
    path: 'form-qui',
    component: FormQuiComponent
    },
    {
    path: 'home',
    component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
