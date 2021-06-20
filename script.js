let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
let fimDeJogo = false;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o listener - evento click aos box
for(let i = 0; i < boxes.length; i++){
//quando alguem clica na caixa
    
    boxes[i].addEventListener("click",function(){
        if(messageContainer.classList.contains("hide")){
            let elemento = checkElemento(player1,player2);
      
            // caso a div clicada esteja vazia entra
            if(this.childNodes.length == 0){
                
                //faz uma copia do elemento X ou O
                let cloneElemento = elemento.cloneNode(true);
                this.appendChild(cloneElemento);

                //contabilizando jogada | chamando jogada do IA
                if(player1 == player2) {
                    player1++;

                    //caso esteja jogando contra AI
                    if(secondPlayer == 'ai-player'){
                        //executa a jogada dois para que o proximo clique repida o X
                        checkWin();
                        if(fimDeJogo == false){
                            computerPlay();
                            player2++;
                        }
                    }
                                    
                }  else{
                    player2++;
                    //chama verificacao de vitoria
                    
                }
                //chamando verificacao de vitoria caso tenha passado da terceira jogada
                if(secondPlayer == "" && player1 >= 3 || player2 >= 3){
                    checkWin()
                }
            }
        }
    })
}

//adicionando o listener - evento do clique nos botoes
for(let i=0;i < buttons.length;i++){
    //mapeando todos os botoes do bloco
    buttons[i].addEventListener("click",function(){
        //armazenando modo de jogo
        secondPlayer = this.getAttribute("id");

        //fazendo botoes sumirem apos o clique
        for(j=0;j<buttons.length;j++){
            buttons[j].style.display = "none";
        }

        //aguardando o tempo para iniciar a exibicao do tabuleiro
        setTimeout(function(){
            //identificando container do tabuleiro
            let container = document.querySelector("#container");
            //identificar container do placar
            containerPlacar = document.querySelector("#placar-container");

            //reexibindo jogo
            container.classList.remove("hide");
            containerPlacar.classList.remove("hide");


        },500);

    });
}

//verifica qual elemento X ou O deve ser utilizado no proximo clique
function checkElemento(player1,player2) {
    if(player1 == player2){
        //x
        elemento = x;
    } else {
        //o
        elemento = o;
    }
    return elemento;
}

//verifica todas as condicoes de vitoria e chama declareWinner()
function checkWin(){
    
    /*let b = [   document.querySelector("#b1"),document.querySelector("#b2"),
                document.querySelector("#b3"),document.querySelector("#b4"),
                document.querySelector("#b5"),document.querySelector("#b6"),
                document.querySelector("#b7"),document.querySelector("#b8"),
                document.querySelector("#b9")]*/

    //criar for para construir trio de logica

    //criar for para executar condicoes

    //condicao 1
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        let b1class = b1.childNodes[0].className;
        let b2class = b2.childNodes[0].className;
        let b3class = b3.childNodes[0].className;

        if(b1class == 'x' && b2class == 'x' && b3class == 'x'){
            //player1 venceu
            declareWinner('x');
            return true;

        }else if(b1class == 'o' && b2class == 'o' && b3class == 'o'){
            //player2 venceu
            declareWinner('o');
            return true;
        }
    };

    //condicao 2
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        let b4class = b4.childNodes[0].className;
        let b5class = b5.childNodes[0].className;
        let b6class = b6.childNodes[0].className;

        if(b4class == 'x' && b5class == 'x' && b6class == 'x'){
            //player1 venceu
            declareWinner('x');
            return true;
        }else if(b4class == 'o' && b5class == 'o' && b6class == 'o'){
            //player2 venceu
            declareWinner('o');
            return true;
        }
    };

    //condicao 3
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        let b7class = b7.childNodes[0].className;
        let b8class = b8.childNodes[0].className;
        let b9class = b9.childNodes[0].className;

        if(b7class == 'x' && b8class == 'x' && b9class == 'x'){
            //player1 venceu
            declareWinner('x');
            return true;
        }else if(b7class == 'o' && b8class == 'o' && b9class == 'o'){
            //player2 venceu
            declareWinner('o');
            return true;
        }
    };

    //condicao 4
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        let b1class = b1.childNodes[0].className;
        let b4class = b4.childNodes[0].className;
        let b7class = b7.childNodes[0].className;

        if(b1class == 'x' && b4class == 'x' && b7class == 'x'){
            //player1 venceu
            declareWinner('x');
            return true;
        }else if(b1class == 'o' && b4class == 'o' && b7class == 'o'){
            //player2 venceu
            declareWinner('o');
            return true;
        }
    };

    //condicao 5
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        let b2class = b2.childNodes[0].className;
        let b5class = b5.childNodes[0].className;
        let b8class = b8.childNodes[0].className;

        if(b2class == 'x' && b5class == 'x' && b8class == 'x'){
            //player1 venceu
            declareWinner('x');
            return true;
        }else if(b2class == 'o' && b5class == 'o' && b8class == 'o'){
            //player2 venceu
            declareWinner('o');
            return true;
        }
    };
    
    //condicao 6
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        let b3class = b3.childNodes[0].className;
        let b6class = b6.childNodes[0].className;
        let b9class = b9.childNodes[0].className;

        if(b3class == 'x' && b6class == 'x' && b9class == 'x'){
            //player1 venceu
            declareWinner('x');
            return true;
        }else if(b3class == 'o' && b6class == 'o' && b9class == 'o'){
            //player2 venceu
            declareWinner('o');
            return true;
        }
    };

    //condicao 7 - diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        let b1class = b1.childNodes[0].className;
        let b5class = b5.childNodes[0].className;
        let b9class = b9.childNodes[0].className;

        if(b1class == 'x' && b5class == 'x' && b9class == 'x'){
            //player1 venceu
            declareWinner('x');
            return true;
        }else if(b1class == 'o' && b5class == 'o' && b9class == 'o'){
            //player2 venceu
            declareWinner('o');
            return true;
        }
    };

    //condicao 8 - diagonal
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        let b3class = b3.childNodes[0].className;
        let b5class = b5.childNodes[0].className;
        let b7class = b7.childNodes[0].className;

        if(b3class == 'x' && b5class == 'x' && b7class == 'x'){
            //player1 venceu
            declareWinner('x');
            return true;
        }else if(b3class == 'o' && b5class == 'o' && b7class == 'o'){
            //player2 venceu
            declareWinner('o');
            return true;
        }
    };

    // deu velha
    let counter =0;
    for(let i = 0;i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
        if(counter == 9) {
            declareWinner('velha');
            return true;
        }
    }
}

//declara o vencedor | atualiza o placar | limpa o jogo | zera contador de jogadas
function declareWinner(winner){
    let boxPlacarX = document.querySelector("#placar-1");
    let boxPlacarO = document.querySelector("#placar-2");
    let msg = ``;

    if(winner == 'x') {
        boxPlacarX.textContent = parseInt(boxPlacarX.textContent) + 1;
        msg = 'O jogador 1 venceu!';
        fimDeJogo = true;
    } else if (winner == 'o') {
        boxPlacarO.textContent = parseInt(boxPlacarO.textContent) + 1;
        msg = 'O jogador 2 venceu!';
        fimDeJogo = true;
    } else {
        msg = 'Deu velha!'
        fimDeJogo = true;
    }
    //atualiza mensagem de fim de jogo
    messageText.textContent = msg;
    //exibe a mensagem
    messageContainer.classList.remove("hide")

    setTimeout(function(){
        //esconde a mensagem depois de 3s
        messageContainer.classList.add("hide")

        //zera os contadores de jogadas
        player1 = 0;
        player2 = 0;

        //limpa o tabuleiro
        let boxesToRemove = document.querySelectorAll(".box div");
        for(let i=0;i < boxesToRemove.length;i++){
            boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
        }

        fimDeJogo = false;
    },2000);
}

//identifica padrao da vitoria e plota a linha da vitoria
function plotarLinhaVitoria(p1,p2,p3){
    //criar linha da vitoria
    let tabuleiro = document.querySelector("#container");
    let linhaVitoriaVertical = document.querySelector(".linhaVitoriaVertical");
    let linhaVitoriaHorizontal = document.querySelector(".linhaVitoriaHorizontal");
    let linhaVitoriaDiagonal = document.querySelector(".linhaVitoriaDiagonal")

    //identificar padrao da vitoria
 
    let cloneLinhaVitoria = linhaVitoriaVertical.cloneNode(true);
    cloneLinhaVitoria.classList.remove("hide")
    tabuleiro.appendChild(cloneLinhaVitoria);
}

//executa a jogada da inteligencia artificial
function computerPlay(){
    if(fimDeJogo == false){
        contador = 0;
        preenchido = 0;
        //faz o clone do elemento O
        let cloneElementoO = o.cloneNode(true);
    
        for(let i=0;i<boxes.length;i++){
            let random = Math.floor(Math.random() * 6);
    
            //so preencher se estiver com filho da div vazio
            if(boxes[i].childNodes[0] == undefined){
                //aleatoriedade
                if(random <= 1){
                    boxes[i].appendChild(cloneElementoO);
                    contador++;
                    break;
                }
            } else {
                preenchido++;
            }
        }
        if(contador == 0 && preenchido < 9) {
            computerPlay();
        }
    }
}