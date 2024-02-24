


/*   const nomeObej = {
   chave : valor ,
    }

    || esse é pra null para quando nao é pra aparecer =problema
    ?? pra nullish quando tem zero ou nao informado 0 ou indefinido ou campo vazio
    mas ambos serve pra if ternario

*/

const animal = {
//atributos do obj. - CHAVE : VALOR
nome: "Lulu",
tamanho:"mini",
raca: "Pit monster",
cor:'bege',
idade: 2,
dono: {
    nome:"Joao",
    cpf: "123456798"
}
}//fim do objeto

let tela = document.getElementById('tela')
// tela.innerHTML = JSON.stringify(animal, null, 1) // assim mostra o animal todo
// tela.innerHTML = animal.nome // assim vc pega so um objto

// desestruturaçao de Objeto
const { nome, idade} = animal

//tela.innerHTML = `Nome: ${nome} Idade: ${(idade || 'Nao informado')} ` esse craze pra facilitar e pra deixar mais pratico
// a apresentaçao do codigo e diminuir o tanto de coisa que pede 
// const{ dono } = animal
// tela.innerHTML = JSON.stringify( dono, null, 1) // assim chama so um "novo" obj

//REST OPERATOR : ...o novo objto

// ` ` templet  texto ${var}


const mostraTexto = (nome, ...brinquedos) => {

    let texto = `O animal ${nome} gosta dos brinquedos: `
    

    let texto_brinquedos = ''
    brinquedos.forEach( e => {  //foreach = para cada elemento
        texto_brinquedos += ` ${e} ` // para mostrar a variavel que deseja mostrar 
    });
    texto += texto_brinquedos
    return texto
}

function ativaTexto (){
    let tela = document.getElementById( 'tela')

    tela.innerText = mostraTexto( 'toto', 'bolinha', 'corda', 'osso')
}