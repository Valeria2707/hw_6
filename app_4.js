//Найти сумму всех целых чисел от 1 до 15

document.write("<br>"+"Task 4: ");

let sum = 0;

for(let i = 1; i < 16; i++){
    sum += i;
}

document.write("Сума перших 15 цифр = " + sum);