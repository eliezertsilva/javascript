function verificar(){
    var fano = document.getElementById('txtano')
    var fmes = document.getElementById('txtmes')
    var fdia = document.getElementById('txtdia')
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var dia = data.getDay()
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano || fmes.value.length <= 0 || fmes.value.length > 2){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var gênero = ''
        var idade = ''
        var parabens = 0
        var m = Number(fmes.value) - (mes + 1)
        var d = Number(fdia.value) - (dia + 1)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (m == 0 && d == 0){
            idade = ano - Number(fano.value) 
        } else if (d == 1){
            parabens = 1
            idade = ano - Number(fano.value) 
        } else {
            idade = ano - Number(fano.value) - 1
        }
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 15){
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'foto-adulto-m.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 15){
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'foto-adulto-f.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        if (parabens == 1){
            img.setAttribute('src', 'parabens.png')
            res.innerHTML =`Parabéns pelos ${idade} anos \u{1F973}\u{1F973}\u{1F973}\u{1F973}`
        } else {
            res.innerHTML =`Detectamos ${gênero} com ${idade} anos!`
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}