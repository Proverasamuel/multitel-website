import { Component } from '@angular/core';
import { CarroselComponent } from '../../components/carrosel/carrosel.component';
import { RecursosComponent } from '../../components/recursos/recursos.component';
import { OfertasComponent } from '../../components/ofertas/ofertas.component';
import { AboutComponent } from '../../components/about/about.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { LetterComponent } from '../../../components/letter/letter.component';
import { PlanosComponent } from "../../components/planos/planos.component";
import { FaqComponent } from '../../components/faq/faq.component';
import { PremiosComponent } from '../../components/premios/premios.component';
import { VantagemComponent } from "../../../components/vantagem/vantagem.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarroselComponent, RecursosComponent, OfertasComponent,AboutComponent, CtaComponent, LetterComponent, PlanosComponent, FaqComponent, PremiosComponent, VantagemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
