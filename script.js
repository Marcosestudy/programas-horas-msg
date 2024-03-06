

function carregar(){
 var fcor = document.getElementById("fcor")
 const  hcor = document.querySelector('h1#hcor')
 const mensagem = document.querySelector('div.mensagem')
 const fonte = document.getElementById('fonte')

  
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = ` Agora são ${hora} horas `;
  //msg.innerHTML = 'te amo'

  if(hora >= 0  && hora < 12){
    img.src = "imagem/cedo.png";
    document.body.style.background = "#fbfaac";
    document.getElementById("fcor").style.color = "#000000";
    hcor.style.color = "#000000"
    mensagem.innerHTML = 'Um novo dia é sinônimo de esperança. Que Deus te acompanhe neste dia abençoado e que Ele te guie em todos os momentos de hoje.'
    
    


    fonte.style.fontFamily = "var(--font3)";
    fonte.style.lineHeight = '30px'
   
    
    
     

    

}else if(hora >= 12 && hora <= 18){
    img.src = 'imagem/tarde.png'
    document.body.style.background = "#F5e388";
    //document.getElementById("fcor").style.color = "#000000";
    fcor.style.color = "#000000";
    hcor.style.color = "#000000";
    mensagem.innerHTML = "Uma tarde cheia de tudo que lhe faz bem. Que as alegrias transbordam em seu coração e preencham sua vida de momentos incríveis. Que haja luz divina em seus caminhos e pensamentos, E que Deus lhe abencoe sempre e lhe dê muita sabedoria"
    fonte.style.fontFamily = "var(--font2)"
    fonte.style.fontSize = "1em"
    

 
  
    //Boa tarde
}else{
    img.src = 'imagem/noite.png'
    document.body.style.background = "#22363D";
     mensagem.innerHTML =
     "Boa Noite!<br><br>Maravilhoso mesmo é amanhecer cheio da presença de Deus, pois sabemos que muitas lutas iremos enfrentar neste dia, mas, o nosso Deus nos fará vencer tudo na vida!";
     //document.getElementById("fonte").style.fontFamily ="var(--font1)";
     fonte.style.fontFamily = "var(--font1)";



      
    
    //boa noite
}
}
  
