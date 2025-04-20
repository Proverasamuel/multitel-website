import { Component } from '@angular/core';
import { CarroselComponent } from '../../components/carrosel/carrosel.component';
import { RecursosComponent } from '../../components/recursos/recursos.component';
import { OfertasComponent } from '../../components/ofertas/ofertas.component';
import { ServicosComponent } from '../../components/servicos/servicos.component';
import { AboutComponent } from '../../components/about/about.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { LetterComponent } from '../../../components/letter/letter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarroselComponent, RecursosComponent, OfertasComponent, ServicosComponent, AboutComponent,CtaComponent, LetterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
