import { Component } from '@angular/core';
import { CarrosselComponent } from "../../components/carrossel/carrossel.component";
import { CarroselComponent } from "../../../residencial/components/carrosel/carrosel.component";
import { ServicosComponent } from "../../../residencial/components/servicos/servicos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrosselComponent, CarroselComponent, ServicosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponentEmpresarial {

}
