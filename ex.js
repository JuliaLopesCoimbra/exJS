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
    Number(document.getElementById('ex14').innerHTML = "tem idade em anos = " + calc + " anos")
}