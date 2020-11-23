import { Component, OnInit } from '@angular/core';
import { IInputNumber } from './inputNumber';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  inputs: IInputNumber[];
  inputsResult: number[];

  constructor() {
    this.inputs = [
      {
        label: "Primeiro"
      }
    ];
    this.inputsResult = [1];
   }

  ngOnInit() {
    this.buildNewInput();
  }

  buildNewInput(){
    console.log(this.inputs.length);
    if (this.inputs.length >= 0 && this.inputs.length < 8) {
      let input = {
        label: this.nextName(this.inputs.length + 1)
      }
      this.inputs.push(input);
      this.inputsResult.push(this.inputs.length);
    } else {
      alert('Sequência aceita apenas de 2 a 9 itens');
    }
  }

  nextName(numeral){
    if (numeral === 1) {
      return 'Primeiro';
    } else if (numeral === 2) {
      return 'Segundo';
    } else if (numeral === 3) {
      return 'Terceiro';
    } else if (numeral === 4) {
      return 'Quarto';
    } else if (numeral === 5) {
      return 'Quinto';
    } else if (numeral === 6) {
      return 'Sexto';
    } else if (numeral === 7) {
      return 'Sétimo';
    } else if (numeral === 8) {
      return 'Oitavo';
    }
  }

  combineNumbers() {
    console.log('Combinar Numeros');
  }

  clearNumbers() {
    console.log('Limpar Numeros');
  }

}
