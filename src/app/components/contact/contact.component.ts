
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
declare var Tawk_API: any;
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isOpen = false;
  whatsappNumber = '244941540352';

  ngOnInit() {
    // Load Tawk.to script
    this.loadTawkToScript();
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  openTawkToChat() {
    if (typeof Tawk_API !== 'undefined') {
      Tawk_API.maximize();
    } else {
      console.error('Tawk.to chat not loaded');
      // Fallback: Open in new tab
      window.open('https://tawk.to/chat', '_blank');
    }
    this.isOpen = false;
  }

  private loadTawkToScript() {
    // Add your Tawk.to widget ID here (get it from your Tawk.to dashboard)
    const tawkToId = 'YOUR_TAWKTO_WIDGET_ID';

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://embed.tawk.to/${tawkToId}/default`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);
  }
}


