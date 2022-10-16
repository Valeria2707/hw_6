//Определить количество его четных делителей

document.write("<br>"+"Task 10: ");

for(let i =1; i<= number; i++){
    if(number%i===0 && i%2===0){
        document.write(i+ " ");
    }
    continue;
}