//listas de cartas
const cards = [1, 1, 2, 2, 3, 3, 4, 4]

// fazer uma requisição API asyncrona

async function generateImg(){
    //agora vamos criar um obj que é referente as imagens
    const imagePairs = {}

    //vamos fazer ele pecorrer os cards e atribuindo as url's das img da api
    for(let i = 0; i < cards.length; i++){
        //agora vamos usar uma estrutura de decição para atribuir o id e a url do obj instanciado
        if(!imagePairs[cards[i]]) {
            //se caso nosso objeto estiver vázio ou o loop durar vamos atribuir dados aos atributos
            const id = Math.floor(Math.random() * 1000) + 1 // colocamos o + 1 para que não tenha id = 0
            const url = `https://picsum.photos/id/${id}/300/400`;
            imagePairs[cards[i]] = [url, url];
        }
    }
    return imagePairs;
}

//vamos criar uma função para embaralhar as cartas

function shuffleCards(cards){
    cards.sort(() => Math.random() - 0.5)
}

//vamos criar uma função para os cards ele vai ser uma operação asycrona pois temos que esperar carregar as img da API
async function createCards(){
    const imagePairs = await generateImg() //aqui garantimos que temos todas as img

    //no momento da criação dos cards vamos chamar a função para embaralhar os mesmos
    shuffleCards(cards)
}