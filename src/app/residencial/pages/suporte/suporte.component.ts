import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-suporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suporte.component.html',
  styleUrl: './suporte.component.css'
})
export class SuporteComponent implements OnInit {
  supportForm: FormGroup;
  isSubmitting = false;
  faqs = [
    {
      id: 1,
      question: 'Como redefinir minha senha?',
      answer: 'Você pode redefinir sua senha clicando em "Esqueci minha senha" na página de login. Um email com instruções será enviado para você.',
      open: false
    },
    {
      id: 2,
      question: 'Quais são os métodos de pagamento aceitos?',
      answer: 'Aceitamos cartões de crédito (Visa, Mastercard, American Express), PayPal e transferência bancária.',
      open: false
    },
    {
      id: 3,
      question: 'Qual é o tempo de resposta do suporte?',
      answer: 'Nosso tempo médio de resposta é de 2 horas úteis para questões prioritárias e 24 horas para questões gerais.',
      open: false
    },
    {
      id: 4,
      question: 'Posso cancelar minha assinatura a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais. O acesso permanecerá até o final do período contratado.',
      open: false
    }
  ];

  constructor(private fb: FormBuilder) {
    this.supportForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
  }

  toggleFaq(id: number): void {
    const faq = this.faqs.find(f => f.id === id);
    if (faq) {
      faq.open = !faq.open;
    }
  }

  onSubmit(): void {
    if (this.supportForm.valid) {
      this.isSubmitting = true;
      console.log('Formulário enviado:', this.supportForm.value);

      // Simular envio para o servidor
      setTimeout(() => {
        this.isSubmitting = false;
        alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
        this.supportForm.reset();
      }, 1500);
    }
  }
}
