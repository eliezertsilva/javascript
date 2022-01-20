let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res =  document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor invalido ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        window.alert('[ERRO] Digite um valor para começar!')
    } else{
        let tot = valores.length
        let maiorN = valores[0]
        let menorN = valores[0]
        let soma = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maiorN){
                maiorN = valores[pos]
            } else if( valores[pos] < menorN){
                menorN = valores[pos]
            }
        }

        let media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} número(s) cadastrado(s).</p>`
        res.innerHTML += `<p>O maior valor cadastrado é: ${maiorN}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado é: ${menorN}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media entre os valores cadastradoes é: ${media}.</p>`
    }
}