import { Routes } from '@angular/router';
import { HomeComponent } from './residencial/pages/home/home.component';
import { HomeComponentEmpresarial } from './empresarial/pages/home/home.component';


export const routes: Routes = [
  {'path':'', component:HomeComponent, title:'Home'},
  {
    'path':'empresarial',
    children:[
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {'path': 'home', component:HomeComponentEmpresarial}
    ]
  }
];


