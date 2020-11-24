<script>

var arr = [1,2,3,7];
var sum = 10;
let results = [];


function getPairs(arr, sum){
    let pairs = [];
    let numList = [];

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];

        // verificar soma
        let diff = sum - currNum;
        if (numList.includes(diff)){
            pairs.push([currNum, diff]);
        }

        numList.push(currNum);
    }
    return pairs;
}

function getMults(arr, sum){
    let mults = [];
    let numList = [];

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let times = Math.floor(Math.round(sum / currNum));
        let currArr = [];

        for (let t = 1; t <= times; t++) {
            if (times <= arr.length){
                let mult = currNum * t;
                if (mult <= sum) {
                    currArr.push(currNum);
                    if (mult == sum)
                    mults.push(currArr);
                }
            }
        }
    }
    return mults;
}

function getMultSum(arr, sum){
    let mults = [];

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let times = Math.floor(Math.round(sum / currNum));
        let currArr = [];
        let foundNewNum = false;

        for (let t = 1; t <= times; t++) {
            if (times <= arr.length){
                let mult = currNum * t;
                if (mult <= sum) {
                    currArr.push(currNum);
                    for (let j = 0; j < arr.length; j++) {
                        let newNum = arr[j]
                        if (newNum !== currNum){
                            if (mult + newNum == sum){
                                currArr.push(newNum);
                                foundNewNum = true;
                            }
                        }
                    }
                }
            }
            if (foundNewNum){
                mults.push(currArr);
                foundNewNum = false;
            }
        }
    }
    return mults;
}

function start(){
    // console.log(getPairs(arr, sum));
    //console.log(getMults(arr, sum));
    //console.log(getMultSum(arr, sum));
    test2();
}

function test(){
    numbers = [4,6,6,8,4,4,4];

    numbersLength = numbers.length;
    console.log('length', numbersLength);

    uniqueNumber = numbers.filter((v, i, a) => a.indexOf(v) === i);
    console.log('unique', uniqueNumber);

    newNumbers = [];

    uniqueNumber.forEach(function(item, index, arr){
        for (let i = 0; i < numbersLength; i++) {
            newNumbers.push(item);
        }
    });

    //numbers = newNumbers;

    debugger;

    var result = createSubsets(numbers, 12);

    console.log('Result', JSON.stringify(result));

    function createSubsets(numbers, target) {
        // filter out all items larger than target
        numbers = numbers.filter(function (value) {
            return value <= target;
        });

        // sort from largest to smallest
        numbers.sort(function (a, b) {
            return b - a;
        });

        // array with all the subsets
        var result = [];

        while ( numbers.length > 0) {
            var i;
            var sum = 0;
            var addedIndices = [];

            // go from the largest to the smallest number and
            // add as many of them as long as the sum isn't above target
            for (i = 0; i < numbers.length; i++) {
                if (sum + numbers[i] <= target) {
                    sum += numbers[i];
                    addedIndices.push(i);
                }
            }

            // remove the items we summed up from the numbers array, and store the items to result
            // since we're going to splice the numbers array several times we start with the largest index
            // and go to the smallest to not affect index position with splice.
            var subset = [];
            for (i = addedIndices.length - 1; i >= 0; i--) {
                subset.unshift(numbers[addedIndices[i]]);
                numbers.splice(addedIndices[i], 1);
            }
            result.push(subset);
        }

        return result;
    }
}

function test2(){
    numbers = [3,9,8,4,5,7,10];
    target = 15;
    sum_up(numbers, target);

    function sum_up(numbers, target){
        sum_up_recursive(numbers, target, []);
    }

    function sum_up_recursive(numbers, target, partial){
        console.log('numbers', numbers);
        console.log('partial', partial);
        s = 0;
        for (x of partial){
            s += x;
        }
        if (s == target) {
            debugger;
            console.log(s,target);//console.log(`sum(${(",", partial.ToArray()))=target`) ;
        }

        if (s >= target)
            return;

        for (let i = 0; i < numbers.length; i++)
        {
            remaining = [];
            n = numbers[i];
            for (let j = i + 1; j < numbers.length; j++){
                remaining.push(numbers[j]);
            }
            partial_rec = partial;
            partial_rec.push(n);
            sum_up_recursive(remaining, target, partial_rec);
        }
    }
}


</script>
