import { Component } from '@angular/core';
import { HeroVozComponent } from "../../components/hero-voz/hero-voz.component";
import { CtaComponent } from "../../../residencial/components/cta/cta.component";
import { ParceiroComponent } from "../../components/parceiro/parceiro.component";
import { InfoServicoVozComponent } from "../../components/info-servico-voz/info-servico-voz.component";
import { PlanoVozEmpresaComponent } from '../../components/plano-voz-empresa/plano-voz-empresa.component';
import { LetterComponent } from '../../../components/letter/letter.component';

@Component({
  selector: 'app-servico-voz',
  standalone: true,
  imports: [HeroVozComponent, InfoServicoVozComponent, PlanoVozEmpresaComponent, LetterComponent],
  templateUrl: './servico-voz.component.html',
  styleUrl: './servico-voz.component.css'
})
export class ServicoVozComponent {

}
