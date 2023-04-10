//lista01
function calculaLosango(){
    let dM = Number(document.getElementById('dM').value);
    let dm = Number(document.getElementById('dm').value);
    let calc = (dM*dm)/2
    Number(document.getElementById('calc11').innerHTML = "valor da area é" + calc )

}
function calculaSalario(){
    let sM = Number(document.getElementById('sM').value);
    let sF = Number(document.getElementById('sF').value);
    let calc = (sF/sM)
    Number(document.getElementById('calc12').innerHTML = "o salario do funcionário possui " + calc + " salários minímos")
}
function calculaTabuada(){
    let tab = Number(document.getElementById('tab').value);
    let calcA = tab*1
    let calcB = tab*2
    let calcC = tab*3
    let calcD = tab*4
    let calcE = tab*5
    let calcF = tab*6
    let calcG = tab*7
    let calcH = tab*8
    let calcI = tab*9
    let calcJ = tab*10
    Number(document.getElementById('calc13a').innerHTML = tab + " x 1 = " + calcA )
    Number(document.getElementById('calc13b').innerHTML = tab + " x 2 = " + calcB )
    Number(document.getElementById('calc13c').innerHTML = tab + " x 3 = " + calcC )
    Number(document.getElementById('calc13d').innerHTML = tab + " x 4 = " + calcD )
    Number(document.getElementById('calc13e').innerHTML = tab + " x 5 = " + calcE )
    Number(document.getElementById('calc13f').innerHTML = tab + " x 6 = " + calcF )
    Number(document.getElementById('calc13g').innerHTML = tab + " x 7 = " + calcG )
    Number(document.getElementById('calc13h').innerHTML = tab + " x 8 = " + calcH )
    Number(document.getElementById('calc13i').innerHTML = tab + " x 9 = " + calcI )
    Number(document.getElementById('calc13j').innerHTML = tab + " x 10 = " + calcJ )

}
function calculaIdade(){
    let idade = new Date(document.getElementById('DataNasci').value);
    let calc = Math.floor((Date.now() - idade) / (31557600000));
    Date(document.getElementById('calc14').innerHTML = "idade em anos = " + calc + " anos")
    Date(document.getElementById('calc14a').innerHTML = "idade em meses = " + calc + " anos")
    Date(document.getElementById('calc14b').innerHTML = "idade em dias = " + calc + " anos")
    Date(document.getElementById('calc14c').innerHTML = "idade em semanas = " + calc + " anos")


}


//lista02
function calculaNota(){
    let n1 = Number(document.getElementById('nota1').value);
    let n2 = Number(document.getElementById('nota2').value);
    let n3 = Number(document.getElementById('nota3').value);
    let n4 = Number(document.getElementById('nota4').value);
    let calc = (n1+n2+n3+n4)/4
    if(calc < 7 && calc > 0){
        Number(document.getElementById('calc01').innerHTML = "reprovado" )
    }else if (calc >= 7){
        Number(document.getElementById('calc01').innerHTML = "aprovado" )   
    }
}
function calculaTabNota(){
    let n1 = Number(document.getElementById('nota1tab').value);
    let n2 = Number(document.getElementById('nota2tab').value);
    let calc = (n1+n2)/2
    Number(document.getElementById('calc02').innerHTML = "média aritmética da nota = " + calc )
}
function calculamairoumenor(){
    let n1 = Number(document.getElementById('n1M').value);
    let n2 = Number(document.getElementById('n2M').value);
    if(n1<n2){
        Number(document.getElementById('calc03').innerHTML = "maior = " + n2 + "  menor = "+n1 )
    }else{
        Number(document.getElementById('calc03').innerHTML = "maior = " + n1 + "  menor = "+n2 )
    }
    if(n1==n2){
        Number(document.getElementById('calc03').innerHTML = "iguais = " + n1 )
    }
}
function calculamairoumenor2(){
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    if(n1 > n2 && n2 > n3){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n1+" depois " +n2+" e por ultimo " +n3 )
    }else if (n1>n3 && n3>n2){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n1+" depois " +n3+" e por ultimo " +n2 )
    }else if (n2>n3 && n3>n1){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n2+" depois " +n3+" e por ultimo " +n1 )
    }else if (n2>n1 && n1>n3){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n2+" depois " +n1+" e por ultimo " +n3 )
    }else if (n3>n2 && n2>n1){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n3+" depois " +n2+" e por ultimo " +n1 )
    }else if (n3>n1 && n1>n2){
        Number(document.getElementById('calc04').innerHTML = "o maior número é " +n3+" depois " +n1+" e por ultimo " +n2 )
    }else if(n1==n2==n3){
        Number(document.getElementById('calc04').innerHTML = "todos os números são iguais" )
    }
}
function calculaEscolha(){
     // recuperar valores nro1 e nro2 do usuário
     let n1 = Number(document.getElementById("n1E").value);
     let n2 = Number(document.getElementById("n2E").value);
     // recupera o valor da opção escolhida
     let opcao = Number(document.getElementById("n3E").value);
     // operar nos números de acordo com escolha do usuário
     let resultado
     switch(opcao) {
         case 1: resultado = (n1 + n2) / 2
                 break // não entra nos cases abaixo
         case 2: if (n1 >= n2){
                     resultado = n1 - n2 // nro1 é maior
                 }
                 else {
                     resultado = n2 - n1 // nro2 é maior
                 }
                 break
         case 3: resultado = n1 * n2
                 break
         case 4: if (n2 != 0){
                     resultado = n1 / n2
                 }
                 else {
                     resultado = "Divisão por zero"
                 }
                 break
         default: resultado = "Opção inválida"
     }
     // saída dos dados
     document.getElementById("calc05").innerHTML = resultado
}
function calculaEscolha2(){
    let n1 = Number(document.getElementById("n1E2").value);
    let n2 = Number(document.getElementById("n2E2").value);
    let opcao = Number(document.getElementById("n3E2").value);
    let resultado
    let resultado2
    switch(opcao){
        case 1: resultado = Math.pow(n1,n2)
            break
        case 2:
            resultado = Math.sqrt(n1)
            resultado2 = Math.sqrt(n2)
            break
        case 3:
            resultado = Math.cbrt(n1)
            resultado2 = Math.cbrt(n2)
        default: resultado = "Opção inválida"
    }
    document.getElementById("calc06").innerHTML = resultado 
    document.getElementById("calc06_2").innerHTML = resultado2
}
function calculaAumento(){
    let sal = Number(document.getElementById("sal").value);
    let calc
    if(sal <= 500 && sal>0){
        calc = sal+(sal*0.3)
        document.getElementById("calc07").innerHTML = "Valor do Salário com aumento = "+calc 
    }else{
        calc = sal
        document.getElementById("calc07").innerHTML = "Não há aumento | Valor do Salário = "+calc
    }
}
function calculaAumento2(){
    let sal = Number(document.getElementById("sal2").value);
    let calc
    if(sal <= 300 && sal>0){
        calc = sal+(sal*0.35)
        document.getElementById("calc08").innerHTML = "Valor do Salário com aumento = "+calc 
    }else if(sal > 300){
        calc = sal+(sal*0.15)
        document.getElementById("calc08").innerHTML = "Valor do Salário com aumento = "+calc
    }
}
function calculaSM(){
    let sal = Number(document.getElementById("SM").value);
    let calc
    if(sal > 400){
        calc = sal+(sal*0.3)
        document.getElementById("calc09").innerHTML = "Valor do Salário com aumento de crétidos de 30% = "+calc 
    }else if(sal <= 400 && sal>300){
        calc = sal+(sal*0.25)
        document.getElementById("calc09").innerHTML = "Valor do Salário com aumento de crétidos de 25% = "+calc 
    }else if(sal <= 300 && sal>200){
        calc = sal+(sal*0.2)
        document.getElementById("calc09").innerHTML = "Valor do Salário com aumento de crétidos de 20% = "+calc 
    }else if(sal <= 200 && sal>0){
        calc = sal+(sal*0.1)
        document.getElementById("calc09").innerHTML = "Valor do Salário com aumento de crétidos de 10% = "+calc 
    }
}
