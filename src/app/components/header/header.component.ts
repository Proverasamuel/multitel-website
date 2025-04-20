import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true, // Garante que este componente pode ser usado sem um NgModule
  imports: [CommonModule], // Garante que os módulos necessários sejam importados corretamente
  templateUrl: './header.component.html',
  styleUrl: './header.component.css' // Corrige a propriedade de estilos (estava "styleUrl", deve ser "styleUrls")
})
export class HeaderComponent { mobileMenu = false;
  activeTab: 'home' | 'business' | 'partners' = 'home'; // Agora activeTab é restrito às chaves de 'tabs'
  openSubmenu: string | null = null;

  // Define seu conteúdo de abas
  tabs = {
    home: [
      { name: 'Planos Residencias', link: '#' },
      { name: 'Serviço de Voz', link: '#' },
      { name: 'Campanhas', link: '#' },
      { name: 'Smart Home', link: '#' },
      { name: 'Suporte', link: '#' },
    ],
    business: [
      { name: 'Internet', link: '#' },
      { name: 'Solução de Voz', link: '#' },
      { name: 'Serviços de E-mail & Hospedagem', link: '#' },
      { name: 'Redes Privativas', link: '#' }
    ],
    partners: [
      { name: 'Eventos', link: '#' },
      { name: 'Parceiros', link: '#' },
      { name: 'Noticias', link: '#' },
      { name: 'Carreira', link: '#' }
    ]
  };

  toggleMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  toggleSubmenu(menu: string) {
    this.openSubmenu = this.openSubmenu === menu ? null : menu;
  }

  setActiveTab(tab: 'home' | 'business' | 'partners') {
    this.activeTab = tab; // Garante que setActiveTab só aceita valores válidos
  }

}

