import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicosComponent } from '../../components/servicos/servicos.component';
import { VantagemComponent } from '../../../components/vantagem/vantagem.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { LetterComponent } from '../../../components/letter/letter.component';
import { AboutComponent } from '../../components/about/about.component';
import { ImageComponent } from '../../components/image/image.component';
import { OfertasComponent } from '../../../residencial/components/ofertas/ofertas.component';
import { ParceiroComponent } from '../../components/parceiro/parceiro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicosComponent, VantagemComponent, CtaComponent, LetterComponent, AboutComponent, OfertasComponent, ParceiroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponentEmpresarial {

}
