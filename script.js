
// AULA Js 11.04.23

/*while

let cont = 0
while(cont < 10){
    document.write("valor: " + cont);
    document.write("<br>");
    cont ++
}

//do while (faça enquanto) este tipo de codigo pode ser utilizado
// para fazer com que uma açao possa ser realizada mais de uma vez 
//com uma condiçao, assim como o while, porem obrigatoriamente vai ser realizada uma vez mesmo que a condiçao seja falsa

let cont1 = 0
do{
    document.write("<br>")//pula uma linha
    document.write("o valor do while é: " + cont1)
    document.write("<br>")
    cont1++
}while(cont1 == 0)// depois disso o codigo para por conta do valor de conte nao ser mais igual a zero
*/

//dom

function mudar(){

    let novo = document.getElementById("idNome")
    document.getElementById("titulo").innerHTML = novo.value;
}