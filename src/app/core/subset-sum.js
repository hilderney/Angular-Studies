function subSetSum(nums, sum, sameVal) {

  results: [] = [];
  full: [] = [];
  size: number = 0;

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
    this.full = nums;
  }

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
  let set = new Set(results.map(JSON.stringify));
  let result = Array.from(set).map(JSON.parse);
  console.log(`total : ${size}`);
  return result.sort();
}

function start() {
  sameVal = true;
  numbers = [1,2,4,8];
  target = 4;
  let resposta = subSetSum(numbers, target, sameVal);
  // console.log('Percorreu um total de: ', resposta.length, ' possibilidades');
  // console.log('Quantidade de Respostas: ', resposta.length);
  // console.log('Exemplo: ', resposta[resposta.length/2]);
  // console.log('Resultados: ', resposta);
}


