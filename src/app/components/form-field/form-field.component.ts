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
  sameVal: boolean;
  targetSum: number;

  constructor() {
    this.inputs = [ { label: "Primeiro" }];
    this.inputsResult = [1];
    this.sameVal = false;
    this.targetSum = 1;
   }

  ngOnInit() {
    this.buildNewInput();
  }

  buildNewInput(){
    // console.log(this.inputs.length);
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
    // console.log('Combinar Numeros');
    this.start();
  }

  clearNumbers() {
    // console.log('Limpar Numeros');
  }

  // Subset
  start() {
    let sameVal = true;
    let resposta = this.subSetSum(this.inputsResult, this.targetSum, this.sameVal);
    // console.log('Percorreu um total de: ', resposta.length, ' possibilidades');
    // console.log('Quantidade de Respostas: ', resposta.length);
    // console.log('Exemplo: ', resposta[resposta.length/2]);
    // console.log('Resultados: ', resposta);
  }

  private subSetSum(nums: number[], sum: number, sameVal:boolean) {
    debugger;
    let results = [];
    let full = [];
    let size = 0;

    if (sameVal){
        if (nums.length > 4) {
            alert('Combinação muito grande para verificação, escolha apenas 4 digitos');
            return null;
        }
        nums.forEach(e => {
            for (let i = 0; i < nums.length; i++) {
                if ((e * i + e) <= sum)
                    full.push(e);
            }
        });
    }
    else {
        full = nums;
    }
    console.log(full);
    for (let subset of subSets(full)) {
        size++;
    }
    function* subSets(arr, offset = 0) {
    while (offset < arr.length) {
        let first = arr[offset++];
        let next = arr[offset + 1];
        if (first <= sum) {
            for (let subSet of subSets(arr, offset)) {
                subSet.push(first);
                yield subSet;
                if (subSet.reduce((t, n) => { return t + n; }) == sum){
                    results.push(subSet);
                    //console.log(`found in ${size}`);
                }
            }
        }
    }
    yield [];
    }
    let set: any = new Set(results.map(() => { JSON.stringify }));
    let resultCleared: any = Array.from(set).map(() => { JSON.parse });
    // console.log(`total : ${size}`);
    console.log(`result : ${results.sort()}`);
    return resultCleared.sort();
  }

}
