import { Component } from '@angular/core';
import { OfertasComponent } from '../../components/ofertas/ofertas.component';
import { LetterComponent } from '../../../components/letter/letter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [OfertasComponent, LetterComponent, CommonModule],
  templateUrl: './planos.component.html',
  styleUrl: './planos.component.css'
})
export class PlanosComponent {

  activeTab: 'internet' | 'voice' | 'services' = 'internet';

  setActiveTab(tab: 'internet' | 'voice' | 'services') {
    this.activeTab = tab;
  }

}
