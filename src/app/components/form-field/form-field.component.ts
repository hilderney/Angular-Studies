import { Component, OnInit } from '@angular/core';
import { IInputNumber } from './inputNumber';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  inputs: IInputNumber[];
  inputsResult: IInputNumber[];
  sameVal: boolean;
  targetSum: number;
  teste: [];

  constructor() {}

  ngOnInit() {
    this.clearNumbers();
  }

  buildNewInput(){
    // console.log(this.inputs.length);
    if (this.inputs.length >= 0 && this.inputs.length < 8) {
      const index = this.inputs.length;
      const input: IInputNumber = {
        label: this.nextName(this.inputs.length + 1),
        index: this.inputs.length - 1,
        value: 1
      }
      this.inputs.push(input);
      this.inputsResult.push(
        {
          label: '',
          index: this.inputs.length - 1,
          value: 0
        }
      );
    } else {
      alert('Sequência aceita apenas de 2 a 9 itens');
    }
  }

  removeLastInput(){
    // console.log(this.inputs.length);
    if (this.inputs.length > 2 && this.inputs.length < 9) {
      this.inputs.pop();
      this.inputsResult.pop();
    } else {
      alert('Sequência aceita apenas de 2 a 9 itens');
    }
  }

  updateInputsValue(i: number, value: number) {
    this.inputs[i].value = Number(value);
  }

  updateResultsValue(arr: number[]) {
    this.inputsResult = [];
    for (let i = 0; i < arr.length; i++){
      this.inputsResult.push(
        {
          label: '',
          index: i,
          value: arr[i]
        }
      );
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
    this.start();
  }

  clearNumbers() {
    this.inputs = [
      {
        label: 'Primeiro',
        index: 0,
        value: 1
      },
      {
        label: 'Segundo',
        index: 0,
        value: 1
      }
    ];
    this.inputsResult = [
      {
        label: '',
        index: 0,
        value: 0
      },
      {
        label: '',
        index: 0,
        value: 0
      }
    ];
    this.sameVal = false;
    this.targetSum = 1;
  }

  // Subset
  start() {
    const sequences: number[] = [];
    this.inputs.forEach( (e) => {
      sequences.push(Number(e.value));
    });

    const resultados = this.subSetSum(sequences, this.targetSum, this.sameVal);

    if (resultados.length === 0){
      alert('Não há resultados para a sequência passada');
    }

    // randomizing results to show
    const random = Math.floor(Math.random() * (resultados.length - 1)) + 0;

    this.updateResultsValue(resultados[Math.floor(random)]);
  }

  private subSetSum(nums: number[], sum: number, sameVal: boolean) {
    const results = [];
    let full = [];
    let size = 0;

    // In case of repeating same value until reaches the size of the sequence numbers
    if (sameVal){
        if (nums.length > 4) { // Keeping the possibilities low for avoid crashing
            alert('Combinação muito grande para verificação, escolha apenas 4 digitos');
            return null;
        }
        nums.forEach(e => {
            for (let i = 0; i < nums.length; i++) {
                if ((e * i + e) <= sum){
                    full.push(e); // Only keeping the results witch multiples are lower then the target, for inproved performance
                }
            }
        });
    }
    else {
        full = nums;
    }

    // console.log(full);

    // Generator Function that get all the combinations possibles
    for (const subset of subSets(full)) {
        size++;
    }
    function* subSets(arr: number[], offset = 0) {
    while (offset < arr.length) {
        const first = arr[offset++];
        if (first <= sum) {
            for (const subSet of subSets(arr, offset)) {
                subSet.push(first);
                yield subSet;
                if (subSet.reduce((t: number, n: number) => t + n) === sum){
                    results.push(subSet); // keeping only the values which the sum are equals to target, for inproved performance
                }
            }
        }
    }
    yield [];
    }

    // const resultCleared = [...new Set(results)];
    // Reducing results with Plain Old JavaScript Object (POJO)
    const unique = (arr: number[]) => {
      const uniquesArr = [];
      const found = {};
      for (const i of arr) {
          const str = JSON.stringify(i);
          if (found[str]) {
             continue;
          }
          uniquesArr.push(i);
          found[str] = true;
      }
      return uniquesArr;
    };

    const resultCleared = unique(results);

    // console.log(`result :`, results.sort());
    // console.log(`resultCleared :`, resultCleared.sort());

    return resultCleared.sort();
  }
}
