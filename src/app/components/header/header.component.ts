import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true, // Garante que este componente pode ser usado sem um NgModule
  imports: [CommonModule, RouterLink], // Garante que os módulos necessários sejam importados corretamente
  templateUrl: './header.component.html',
  styleUrl: './header.component.css' // Corrige a propriedade de estilos (estava "styleUrl", deve ser "styleUrls")
})
export class HeaderComponent {

  mobileMenu = false;
  activeTab: 'home' | 'business' | 'partners' = 'home'; // Agora activeTab é restrito às chaves de 'tabs'
  openSubmenu: string | null = null;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      if (this.router.url.startsWith('/residencial')) {
        this.activeTab = 'home';
      } else if (this.router.url.startsWith('/empresarial')) {
        this.activeTab = 'business';
      } else if (this.router.url.startsWith('/mais')) {
        this.activeTab = 'partners';
      }
    });
  }

  // Define seu conteúdo de abas
  tabs = {
    home: [
      { name: '+ Planos Residenciais', link: '/residencial/planos' },
      { name: 'Campanhas', link: '/residencial/campanhas' },
      { name: 'Smart Home', link: '/residencial/smart' },
      { name: 'Suporte', link: '/residencial/suporte' },
    ],


    business: [
      { name: 'Internet', link: '' },
      { name: 'Solução de Voz', link: '/empresarial/servico-voz' },
      { name: 'Serviços de E-mail & Hospedagem', link: '/empresarial/email-hospedagem' },
      { name: 'Redes Privativas', link: '/empresarial/redes-privativas' }
    ],
    partners: [
      { name: 'Eventos', link: '/mais/eventos' },
      { name: 'Parceiros', link: '/mais/parceiros' },
      { name: 'Noticias', link: '/mais/noticias' },
      { name: 'Carreira', link: '/mais/carreira' }
    ]
  };

  navegarParaAdesao() {
    if (this.activeTab === 'business') {
      this.router.navigate(['/empresarial/adesao']);
    } else {
      this.router.navigate(['/adesao']);
    }
  }



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









