document.addEventListener('DOMContentLoaded', function(){

    //declarando as variaveis

    const inputNome =document.querySelector('#idNome');
    const botaoAdd =document.querySelector('#btnAdd');
    const lista = document.querySelector('#lista');

    //declarando a variavel que vair receber uma lista de nomes, mas esta iniciando vazia
    let listaNomes =[];

    //criando a função par a adicionar a lista

    function addNome(nome){
        if(nome !== undefined && nome !==""){
            listaNomes.push(nome);          // Pega tudo que estiver na listaNomes
            inputNome.value="";
            renderizarLista();
            console.log("Nome inserido com sucesso na lista")
        }
        else{
            console.log("Por Favor, insira um nome na lista")
        }
    }

    function renderizarLista(){
        lista.innerHTML="";                     // Joga as informções para a tela
        for(let i =0; i < listaNomes.length; i++){
            const listaElement = document.createElement('li');      // Cria o documento li e joga as informações dentro
            listaElement.textContent = listaNomes[i];
            lista.appendChild(listaElement);
        }
    }
    //chamando a função
    botaoAdd.addEventListener('click', function(e){
        e.preventDefault();
        addNome(inputNome.value);
    })
})