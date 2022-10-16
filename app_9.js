//Дано натуральное число. Найти и вывести на страницу все его делители.

document.write("<br>"+"Task 9: ");

let number = prompt("Введіть натуральне число");

for(let i =1; i<= number; i++){
    if(number%i===0){
        document.write(i+ " ");
    }
    continue;
}