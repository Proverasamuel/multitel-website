import { Component, EventEmitter, Output } from '@angular/core';
//import { LetterService } from '../../services/letter.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-letter',
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {
  letterForm: FormGroup;
  constructor(private fb: FormBuilder, /*private letterService: LetterService, private toastService: ToastrService*/){
    this.letterForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit(){
    /*
    if(this.letterForm.valid){
      this.letterService.addNewsLetter(this.letterForm.value).subscribe({
        next: (response)=>{
          console.log('newsletter adicionada com exito!');
          this.toastService.success('Bem-vindo à nossa comunidade!');
          this.letterForm.reset(); // Reset the form

        }
      })

    }else{
      this.letterForm.markAsTouched();
    } */
  }
}



