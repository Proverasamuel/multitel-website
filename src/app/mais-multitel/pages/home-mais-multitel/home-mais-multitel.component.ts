import { Component } from '@angular/core';
import { CarrosselMaisMultitelComponent } from "../../components/carrossel-mais-multitel/carrossel-mais-multitel.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { ServicosAgroComponent } from "../../components/servicos-agro/servicos-agro.component";

@Component({
  selector: 'app-home-mais-multitel',
  standalone: true,
  imports: [CarrosselMaisMultitelComponent, BannerComponent, ServicosAgroComponent],
  templateUrl: './home-mais-multitel.component.html',
  styleUrl: './home-mais-multitel.component.css'
})
export class HomeMaisMultitelComponent {

}
