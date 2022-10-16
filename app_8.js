//-Вывести все числа в диапазоне от 100 до 200 кратные 3

document.write("<br>"+"Task 8: ");

for(let i = 100; i<201; i++){
    if(i%3===0){
        document.write(i+" ");
    }
    continue;
}