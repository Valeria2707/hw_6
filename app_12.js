//Напечатать полную таблицу умножения от 1 до 10

document.write("<br>"+"Task 12: ");

for(let i=1; i<11 ; i++){
    document.write("<br>"+"Таблиця множення на " + i);
    for(let j = 1; j<11; j++){
        document.write("<br>"+ i + " * " + j + " = " + i*j);
    }
}