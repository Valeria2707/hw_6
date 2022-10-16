//Вывести на страницу в одну строку через запятую числа от 10 до 20

document.write("Task 1: ");

for(let i = 10; i<21; i++){
    if(i === 20){
        document.write(i);
    }
    else{
    document.write(i + ", ");
    }
}