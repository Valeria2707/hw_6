//Найти произведение всех целых чисел от 15 до 35

document.write("<br>"+"Task 5: ");

let mult = 1;

for(let i = 15; i < 36; i++){
    mult *= i;
}

document.write("Множення цифр від 15 до 35 = " + mult);
