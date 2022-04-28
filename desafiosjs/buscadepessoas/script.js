function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade atual ${idade} anos`
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10 ) {
                //criança 
                img.setAttribute('src', 'foto-bebemas.jpg')               
            } else if (idade < 21 ) {
                //Jovem
                img.setAttribute('src', 'foto-jovemmas.jpg')
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'foto-adultomas.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idosomas.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10 ) {
                //criança                
            } else if (idade < 21 ) {
                //Jovem
            } else if (idade < 50 ) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)

    }
    
}