import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste';
  activeMenu: string = 'residencial';

  @Output() menuClicked = new EventEmitter<string>();
  @Output() portalClicked = new EventEmitter<void>();
  @Output() contactClicked = new EventEmitter<void>();

  setActiveMenu(menuId: string) {
    this.activeMenu = menuId;
    this.menuClicked.emit(menuId);
  }
}


