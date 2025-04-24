import { Component } from '@angular/core';
import { ServiceCategory, ServiceOption } from '../service.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-adesao-residencial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-adesao-residencial.component.html',
  styleUrl: './info-adesao-residencial.component.css'
})
export class InfoAdesaoResidencialComponent {

  services: ServiceCategory[] = [
    {
      id: 'internet',
      title: 'Internet Total',
      description: 'Conexão de alta velocidade para toda sua família',
      options: [
        { id: '2mb', name: '2 Mbps', description: '', price: 850, selected: false },
        { id: '10mb', name: '10 Mbps', description: '', price: 1200, selected: false },
        { id: '20mb', name: '20 Mbps', description: '', price: 1800, selected: false },
        { id: '50mb', name: '50 Mbps', description: '', price: 2500, selected: false }
      ],
      addons: [
        { id: 'wifi-premium', name: 'Wi-Fi Premium', description: 'Router 5Ghz', price: 200, selected: false },
        { id: 'antivirus', name: 'Proteção Digital', description: 'Antivírus Familiar', price: 150, selected: false }
      ]
    },
    {
      id: 'voice',
      title: 'Serviço de Voz',
      description: 'Chamadas ilimitadas para fixos e móveis nacionais',
      options: [
        { id: 'basic', name: 'Plano Básico', description: '100 minutos para outras redes', price: 350, selected: false },
        { id: 'unlimited', name: 'Plano Ilimitado', description: 'Chamadas ilimitadas para todas redes', price: 600, selected: false }
      ],
      addons: [
        { id: 'roaming', name: 'Roaming Internacional', description: '', price: 400, selected: false },
        { id: 'voicemail', name: 'Caixa Postal Digital', description: '', price: 100, selected: false }
      ]
    }
  ];

  selectedServices: { category: string, option: ServiceOption }[] = [];
  selectedAddons: ServiceOption[] = [];

  get totalPrice(): number {
    const servicesTotal = this.selectedServices.reduce((sum, item) => sum + item.option.price, 0);
    const addonsTotal = this.selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
    return servicesTotal + addonsTotal;
  }

  selectService(categoryId: string, option: ServiceOption) {
    // Deselect other options in same category
    this.services
      .find(c => c.id === categoryId)!
      .options.forEach(o => o.selected = o.id === option.id);

    // Update selected services
    this.selectedServices = this.selectedServices.filter(s => s.category !== categoryId);
    this.selectedServices.push({ category: categoryId, option });
  }

  toggleAddon(addon: ServiceOption) {
    addon.selected = !addon.selected;

    if (addon.selected) {
      this.selectedAddons.push(addon);
    } else {
      this.selectedAddons = this.selectedAddons.filter(a => a.id !== addon.id);
    }
  }

  proceedToPayment() {
    // Implement payment navigation
    console.log('Selected services:', this.selectedServices);
    console.log('Selected addons:', this.selectedAddons);
    console.log('Total price:', this.totalPrice);
  }

}
