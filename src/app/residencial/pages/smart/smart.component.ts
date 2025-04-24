import { Component } from '@angular/core';
import { LetterComponent } from '../../../components/letter/letter.component';

@Component({
  selector: 'app-smart',
  standalone: true,
  imports: [LetterComponent],
  templateUrl: './smart.component.html',
  styleUrl: './smart.component.css'
})
export class SmartComponent {

}
