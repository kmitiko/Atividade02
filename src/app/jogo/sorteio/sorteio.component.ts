import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SorteioModel } from '../Model/sorteio.model';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent implements OnInit {

    gerador!: number;
    resultado!: string;

    sorteioForm!: FormGroup;
    sorteioModel!: SorteioModel;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.sorteioForm = this.FormBuilder.group({
        enterModel: [
          '',[Validators.required, Validators.pattern(/^[1-9][0-9]?$|^100$/)],
        ],
      });

  }
  fnsortear(): void{
    this.gerador = Math.floor(Math.random() * 100) + 1;

  }
  fnSorteia(): string {
    const begin = this.sorteioForm.getRawValue() as SorteioModel;

    this.fnsortear();

    if(begin.enterModel == this.gerador) {
      return (this.resultado = "Você acertou! Parabéns!!!");
    }

      return (this.resultado = "Você não acertou! Jogue novamente!")

  }
    get enterModel(){
      return this.sorteioForm.get('enterModel')!;
    }
}
