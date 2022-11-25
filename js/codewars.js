//  1) ======================================================================================================
function getSum(a, b) {
    if (a === b) {
        return a;
    };

    let sum = 0;
    if (b > a) {
        for (let i = a; i <= b; i += 1) {
            sum += i;
        }
    } else {
        for (let i = b; i <= a; i += 1) {
            sum += i;
        }
    };
    return sum;
}
// console.log(getSum(5, 10));

//  2) Binary array to number ==================================================================================
// const arr = [1, 0, 1, 0, 0, 1, 1, 0];
const binaryArrayToNumber = arr => {
    const resArr = arr.reverse().map((element, index) => Math.pow(2, index) * element);

    let sum = 0;
    for (let i = 0; i < resArr.length; i += 1) {
        sum += resArr[i];
    }
    return sum;
};
// console.log(binaryArrayToNumber(arr));

//  3) Shortest Word ===========================================================================================
// const s = 'bitcoin take over the world maybe who knows perhaps';
function findShort(s) {
    // const wordsArray = s.split(' ');
    // const minLength = Math.min(...s.split(' ').map((e) => e.length));
    // const shortestWords = [];

    // wordsArray.forEach(e => {
    //     if (e.length === minLength) {
    //         shortestWords.push(e);
    //     }
    // });

    return Math.min(...s.split(' ').map((e) => e.length));
}
// console.log(findShort(s));

//  4) Sum of Digits / Digital Root ============================================================================
// const n = 32658;
function digitalRoot(n) {
    let digital = n;
    let arr = [];

    while (digital > 10) {
        arr = String(digital).split('').map((e) => Number.parseInt(e));
        digital = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    return digital;
}
// console.log(digitalRoot(n));

//  5) Square Every Digit ======================================================================================
// const n = 9119;
function squareDigits(num) {
    return Number.parseInt(String(num).split('').map((e) => Math.pow(Number(parseInt(e)), 2)).join(''));
}
// console.log(squareDigits(n));

//  6) Pete, the baker ========================================================================================
// // must return 2
// const recipe = { flour: 500, sugar: 200, eggs: 1 };
// const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }; 
// // must return 0
// const recipe1 = {  crumbles: 5, butter: 4, pears: 4, flour: 3 };
// const available1 = {  flour: 11, eggs: 11, oil: 10, milk: 11, apples: 8, sugar: 6, cream: 14, pears: 3, butter: 16, nuts: 10, chocolate: 1, cocoa: 8, crumbles: 13  };
function cakes(recipe, available) {
    let possibleCakes = 0;

    for (const ingredient in recipe) {
        if (!available[ingredient]) {
            return 0;
        }

        const expectedCakes = Math.floor(available[ingredient] / recipe[ingredient]);
        if (possibleCakes === 0) {
            possibleCakes = expectedCakes;
        } else {
            possibleCakes = Math.min(expectedCakes, possibleCakes);
        }
    }

    return possibleCakes;
}
function cakes1(recipe, available) {
    let maxCakes
    for (var ingredient in recipe) {
        if (available[ingredient]) {
            const possibleCakes = Math.floor(
                available[ingredient] / recipe[ingredient] || 0
            )
            if (!maxCakes || possibleCakes < maxCakes) {
                maxCakes = possibleCakes
            }
        } else {
            return 0
        }
    }
    return maxCakes
}
// console.log(cakes(recipe1, available1))

//  7) Count the smiley faces! ===============================================================================
// const arr = [':)', ';(', ';}', ':-D'];       // should return 2;
// const arr1 = [';D', ':-(', ':-)', ';~)']      // should return 3;
// const arr2 = [';]', ':[', ';*', ':$', ';-D']; // should return 1;
function countSmileys(arr) {
    const validEyes = [':', ';'];
    const validNose = ['-', '~'];
    const validMoruth = [')', 'D'];
    let smielyFacesNumber = 0;

    arr.map(face => {
        const faceElement = face.split('');
        if (faceElement.length === 2 && validEyes.includes(faceElement[0]) && validMoruth.includes(faceElement[1])) {
            smielyFacesNumber += 1;
        }
        if (faceElement.length === 3 && validEyes.includes(faceElement[0]) && validNose.includes(faceElement[1]) && validMoruth.includes(faceElement[2])) {
            smielyFacesNumber += 1;
        }
    })

    return smielyFacesNumber;
}
// console.log(countSmileys(arr2));

//  8) Bit Counting ==========================================================================================
// const n = 3258;
var countBits = function (n) {
    let iterator = n;
    let sum = 0;

    while (iterator > 0) {
        if (iterator % 2 === 0) {
            iterator = iterator / 2;
        } else {
            iterator = (iterator - 1) / 2;
            sum += 1;
        }
    };
    return sum;
};
// var countBits = n => n.toString(2).split('0').join('').length;
// console.log(countBits(n));

//  9) Count characters in your string =======================================================================
// const string = 'fhdkjfhajhf';
function count(string) {
    const counter = {};
    string.split('').map(e => {
        if (counter[e]) {
            counter[e] = counter[e] + 1;
        } else {
            counter[e] = +1;
        }
    })
    return counter;
}
// console.log(count(string));

// 10) Delete occurrences of an element if it occurs more than n times =======================================
// const list1 = [1, 2, 3, 1, 2, 1, 2, 3];
// const list = [20, 37, 20, 21];
// function deleteNth(arr, n) {
//     const filtredArr = [];
//     arr.map(el => { 
//         if (filtredArr.filter(val => val === el).length < n) {
//             filtredArr.push(el);
//         }
//     });
//     return filtredArr;
// }
const deleteNth = (a, x) => {
  let m = {};
    return a.filter(v => { 
       return (m[v] = m[v]+1||1) <= x
    } );
}
// console.log(deleteNth(list1, 2));

// 11) Find the missing letter ==============================================================================
// const array1 = ['a', 'b', 'c', 'd', 'f'];
// const array2 = ['O', 'Q', 'R', 'S'];
function findMissingLetter(array) {
    const alphabetLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alphabetUpperCase = alphabetLowerCase.map(l => l.toUpperCase());
    let arrayToCompare;
    let missingLetter;

    if (alphabetLowerCase.includes(array[0])) {
        arrayToCompare = alphabetLowerCase.slice(alphabetLowerCase.indexOf(array[0]), alphabetLowerCase.indexOf(array[array.length - 1]) + 1);
    } else {
        arrayToCompare = alphabetUpperCase.slice(alphabetUpperCase.indexOf(array[0]), alphabetUpperCase.indexOf(array[array.length - 1]) + 1);
    };

    arrayToCompare.map(l => {
        if (!array.includes(l)) {
            missingLetter = l;
        }
    });

    return missingLetter;
}
function findMissingLetter1(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}
// console.log(findMissingLetter(array1));

// 12) Simple Pig Latin =====================================================================================
// const phrase1 = 'Pig latin is cool'; // igPay atinlay siay oolcay
// const phrase2 = 'Hello world !';     // elloHay orldway !
function pigIt(str) { 
    const array = []; 
    str.split(' ').map(el => { 
        const cutArray = el.split('');
        let stringForAdd = cutArray.splice(0, 1);
        const charCode = stringForAdd[0].charCodeAt(0);
        if (charCode > 64 && charCode < 90 || charCode > 96 && charCode < 123) {
            stringForAdd[0] = stringForAdd[0] + 'ay';
        }
        cutArray.splice(cutArray.length, 0, stringForAdd);
        array.push(cutArray.join(''));
    });
    return array.join(' ');
}
// console.log(pigIt(phrase1));

// 13) Calculating with Functions ===========================================================================
function zero(data) {
    if (data) {
        const {expression, value } = data;
        return expression(0, value);
    }
    return 0;
}
function one(data) {
    if (data) {
        const {expression, value } = data;
        return expression(1, value);
    }
    return 1;   
}
function two(data) {
    if (data) {
        const {expression, value } = data;
        return expression(2, value);
    }
    return 2;
}
function three(data) {
    if (data) {
        const {expression, value } = data;
        return expression(3, value);
    }
    return 3;
}
function four(data) {
    if (data) {
        const {expression, value } = data;
        return expression(4, value);
    }
    return 4;
}
function five(data) {
    if (data) {
        const {expression, value } = data;
        return expression(5, value);
    }
    return 5;
}
function six(data) {
    if (data) {
        const {expression, value } = data;
        return expression(6, value);
    }
    return 6;
}
function seven(data) {
    if (data) {
        const {expression, value } = data;
        return expression(7, value);
    }
    return 7;
}
function eight(data) {
    if (data) {
        const { expression, value } = data;
        return expression(8, value);
    }
    return 8;
}
function nine(data) {
    if (data) {
        const {expression, value } = data;
        return expression(9, value);
    }
    return 9; 
}

function plus(value) {
    function expression(x, y) {
        return x + y;
    }
    return {expression: expression, value: value};
}
function minus(value) {
     function expression(x, y) {
        return x - y;
    }
    return {expression: expression, value: value};
}
function times(value) {
     function expression(x, y) {
        return x * y;
    }
    return {expression: expression, value: value};
}
function dividedBy(value) {
    function expression(x, y) {
        return Math.floor(x / y);
    }
    return {expression: expression, value: value};
}

function zero(fn) {return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(n) {return function(v) {return v + n}}
function minus(n) {return function(v) {return v - n}}
function times(n) {return function(v) {return v * n}}
function dividedBy(n) {return function(v) {return v / n}}

// console.log(seven(times(five())));
// console.log(eight(minus(three())));
// console.log(six(dividedBy(two())));
// console.log(eight(dividedBy(zero())));

// 14) Your order, please ==========================================================================================
// const string1 = "is2 Thi1s T4est 3a";                // -->  "Thi1s is2 3a T4est"
// const string2 = "4of Fo1r pe6ople g3ood th5e the2";  // -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// const string3 = "";                                  // -->  ""
function order(words) {
    if (words === '') {
        return '';
    }

    const wordsArray = words.split(' ').map(word => { 
        const symbols = word.split('');
        for (const symbol of symbols) { 
            if (Number.parseInt(symbol)) {
                return { number: symbol, word: word };
            };
        }
    })
    return wordsArray.sort((first, second) => first.number - second.number).map(el => el.word).join(' ');   
}
// console.log(order(string3));


// 15) Most frequently used words in a text ========================================================================
// const text1 = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
// // # => ["a", "of", "on"]
// const text2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e";
// // # => ["e", "ddd", "aa"]
// const text3 = "  //wont won't won't";
// // # => ["won't", "wont"]
// const text4 = "  , e   .. ";
// // # => ["e"]
// const text5 = "  ...  ";
// // # => []
// const text6 = "  '  ";
// // # => []
// const text7 = "a a c b b";
// // # => ['a','b','c']
function findMostRepeatedWord(str) {
    const words = str.toLowerCase().match(/[\w\']*/g);
    // const words = str.toLowerCase().match(/\b[a-z']+\b/g);
    const occurrences = {};
    for (let word of words) {
        if (word === '' || word === "'") {
            continue;
        }
        if (occurrences[word]) {
        occurrences[word]++;
        } else {
        occurrences[word] = 1;
        }
    }

    const occurrencesToSort = [];
    for (const occurrence in occurrences) {
        occurrencesToSort.push({ word: occurrence, times: occurrences[occurrence]})
    }    

    return occurrencesToSort.sort((first, second) => second.times - first.times).slice(0, 3).map(el => el.word);
}
function topThreeWords(text) {
    let words = {}
    text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
        let c = words[match] || 0
        words[match] = ++c
        console.log(match);
    })
    console.log(words);

    keysSorted = Object.keys(words).sort(function (a, b) { return words[b] - words[a] })
    console.log(keysSorted);

    return keysSorted.slice(0,3)
}
// console.log(topThreeWords(text1));


// 16) PaginationHelper ============================================================================================
const array = ['a', 'b', 'c', 'd', 'e', 'f'];
const itemsPerPage = 4;

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.numberOfPages = Math.ceil(this.collection.length / this.itemsPerPage);
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
    return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return this.numberOfPages;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {  
    if (pageIndex > this.numberOfPages - 1) {
        return -1;
    }
    if (pageIndex < this.numberOfPages - 1) {
        return this.itemsPerPage;
    }
    if (pageIndex === this.numberOfPages - 1) {
        return this.collection.length % this.itemsPerPage;
    }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex > this.collection.length - 1 || itemIndex < 0) {
        console.log('I am here');
        return -1;
        
    }
    return itemIndex !== 0? Math.ceil(itemIndex / this.itemsPerPage) - 1: 0;
}

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// console.log(helper.itemCount()); //should == 6
// console.log(helper.pageCount()); //should == 2
// console.log(helper.pageItemCount(0)); //should == 4
// console.log(helper.pageItemCount(1)); // last page - should == 2
// console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// console.log(helper.pageIndex(5)); //should == 1 (zero based index)
// console.log(helper.pageIndex(2)); //should == 0
// console.log(helper.pageIndex(20)); //should == -1
// console.log(helper.pageIndex(-10)); //should == -1
// console.log(helper.pageIndex(0)); //should == 0