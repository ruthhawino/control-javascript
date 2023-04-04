//No 1
//Write a function that accepts an array of strings and console.
//logs each element using a for loop
let names=["Ruth","Muyale","Joy","Buraje","Gubo","Masian"];
array(names)
function array(names){
  for( i=0;i<names.length;i++){
  console.log(names[i]);
  }
}

//
//No 2
//Write a function that accepts an array of numbers
//and uses the forEach() method to console.log each number multiplied by 2.
function arrays(z){
    console.log(z*2);
}
let numbers=[15,23,2,4,34,12,32]
numbers.forEach(arrays)

//number3

let numberss=[23,12,43,2,43,13,15,7,9];
array(numberss);
function array(numberss){
    for(i=0;i<numberss.length;i++){
        if(i<4){
           console.log("numberss",numberss[i]*8);
        }else if(i>=numberss.length-2 && i<=numberss.length-1){
            console.log("numberss",numberss[i]+5)
        }
    }
}

//No 4
//Write a function that takes in the following array and
// use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
nums(arrNum);
function nums(arrNum){
    i=0;
    while(i<arrNum.length){
        if(i===4){
            break;
        }
        console.log({i});
        i++;
     }
}

//No 5
//Write a function that takes in a an array of strings and
// use a continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
arr(fruits)
function arr(fruits){
    for(i =0;i<fruits.length;i++){
        if(i===2){
            continue;
        }
        console.log({"continue":i});
     }
}

