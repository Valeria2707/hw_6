//Вывести сумму только четных чисел в диапазоне от 30 до 80

document.write("<br>"+"Task 7: ");

let sum_3 = 0;

for(let i = 30; i < 81; i++){
    if(i%2==0){
        sum_3 += i;
    }
    continue;
}

document.write("Сума парних чисел від 30 до 80 = " + sum_3);