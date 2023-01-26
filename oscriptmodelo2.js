function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resu = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       resu.innerHTML = `idade calculada: ${idade}`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
    } if (fsex[0].checked) {
        var genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.src="imgs ex 002/homembebe.jpg"
                
            } else if (idade < 21) {
                // jovem
                img.src="imgs ex 002/homemadolescente2.jpg"
                
            } else if (idade < 50){
                // adulto
                img.src="imgs ex 002/homemjovem.jpg"

            } else {
                // idoso
                img.src="imgs ex 002/homemidoso.jpg"
                
            }
    } 
    else {
        var genero = 'Mulher'
            if (idade >=0 && idade< 10){
                 //criança
                 img.src="imgs ex 002/mulherbebe.jpg"
        
           } else if (idade <21){
                // jovem
                img.src="imgs ex 002/mulherjovem.jpg"
        
            } else if (idade < 50){
                // adulto
                img.src="imgs ex 002/mulheradulta.jpg"

            } else {
                // idoso
                img.src="imgs ex 002/mulheridosa.jpg"
            }
        }   
        resu.style.textAlign = 'center'
        resu.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resu.appendChild(img)
    }
