function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if(hora >= 1 && hora <= 5){
            //madruga
            img.src = 'madrugada.png'
            document.body.style.background = "#72ABB6"
    }else if(hora >= 6 && hora <= 12){
            //manha
            img.src = 'manha-cavalos 1.png'
            document.body.style.background = "#E0914E"
    }else if(hora >= 13 && hora <= 18){
            //tarde
            img.src = 'tarde.png'
            document.body.style.background = "#FEC8A6"
    }else if(hora >= 19 && hora <=24){
            //noite
            img.src = 'noite.png'
            document.body.style.background = "#595562"
    }
}
