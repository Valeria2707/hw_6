//Найти среднее арифметическое всех целых чисел от 1 до 500

document.write("<br>"+"Task 6: ");

let suma = 0;

for(let i = 1; i < 501; i++){
    suma += i;
}

document.write("Середнє арефметичне перших 500 цифр = " + suma/500);