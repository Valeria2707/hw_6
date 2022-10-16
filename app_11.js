//Найти сумму его четных делителей

document.write("<br>"+"Task 11: ");

let sum_11 = 0;

for(let i =1; i<= number; i++){
    if(number%i===0 && i%2===0){
        sum_11 += i;
    }
    continue;
}

 document.write(sum_11);