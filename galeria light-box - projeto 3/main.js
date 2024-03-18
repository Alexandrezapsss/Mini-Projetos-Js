const galleryItems = document.querySelectorAll(".gallery-item")//prestar atenção aqui são vários items usar o SelectorAll
const lightbox = document.querySelector(".lightbox")
const lightboxImage = document.querySelector(".lightbox-image")
const lightboxClose = document.querySelector(".lightbox-close")

// como vamos trabalhar com uma coleção de imagens vamos usar foreach para percorrer
galleryItems.forEach((item) =>{
    //agora vamos adicionar um evento de click para cada uma das imagens
    item.addEventListener("click", () => {
        //teste de click
        //console.log("Click, click, click")
        //selecionar a imagem para destaque
        const imgUrl = item.querySelector(".gallery-image").getAttribute("data-src")
        //agora vamos colocar essa imagem em destaque na classe lightbox-image usando setAttribute
        lightboxImage.setAttribute("src", imgUrl)//aqui é para setar a url da imagem selecionada no src que deixamos vazio
        lightbox.style.display = "flex"
    })
    
})

//vamos fazer o evento de fechar a imagem em destaque
lightboxClose.addEventListener("click", () =>{
    //para relembrar nossa classe lightbox no css está none porem acima ao click da img colocamos o display flex aqui só vamos retirar
    lightbox.style.display = "none"
})