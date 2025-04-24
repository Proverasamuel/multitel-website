import { Routes } from '@angular/router';
import { HomeComponentEmpresarial } from './empresarial/pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';
import { AdesaoEmpresarialComponent } from './empresarial/pages/adesao-empresarial/adesao-empresarial.component';
import { AdesaoResidencialComponent } from './residencial/pages/adesao-residencial/adesao-residencial.component';
import { HomeMaisMultitelComponent } from './mais-multitel/pages/home-mais-multitel/home-mais-multitel.component';
import { ServicoVozComponent } from './empresarial/pages/servico-voz/servico-voz.component';
import { SmartComponent } from './residencial/pages/smart/smart.component';
import { SuporteComponent } from './residencial/pages/suporte/suporte.component';
import { CampanhasComponent } from './residencial/pages/campanhas/campanhas.component';
import { HomeComponent } from './residencial/pages/home/home.component';
import { PlanosComponent } from './residencial/pages/planos/planos.component';
import { HospedagemComponent } from './empresarial/pages/hospedagem/hospedagem.component';
import { RedesComponent } from './empresarial/pages/redes/redes.component';




export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'residencial',
        children: [
          { path: '', redirectTo: '', pathMatch: 'full' },
          { path: '', component: HomeComponent, title: 'Residencial' },
          { path: 'planos', component: PlanosComponent, title: 'Planos' },
          { path: 'smart', component: SmartComponent, title: 'Smart' },
          { path: 'campanhas', component: CampanhasComponent, title: 'Campanhas' },
          { path: 'suporte', component: SuporteComponent, title: 'Suporte' },
        ]
      },
      { path:'adesao', component: AdesaoResidencialComponent },
      {
        path: 'empresarial',
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomeComponentEmpresarial },
          { path: 'adesao', component: AdesaoEmpresarialComponent },
          { path: 'servico-voz', component: ServicoVozComponent },
          { path: 'email-hospedagem', component: HospedagemComponent },
          { path: 'redes-privativas', component: RedesComponent }
        ]
      },
      {
        path: 'mais',
        children: [
          { path: 'multitel', component: HomeMaisMultitelComponent }
        ]
      },
    ]
  },
  // ✅ Login separado do layout principal
  { path: 'login', component: LoginComponent },

  // ✅ Rota 404 global
  { path: '**', redirectTo: '', pathMatch: 'full' }
];




