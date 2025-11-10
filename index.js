const prevButton = document.getElementById("esquerda")
const nextButton = document.getElementById("direita")
const itens = document.querySelectorAll('.item')
const list = document.querySelector('.list')
const dots = document.querySelectorAll('.number-dot') 


let active = 0;
const total = itens.length


function update(direction){


    //Vai procurar e remover a classe Active
    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.number-dot.active').classList.remove('active')
    


     
   // Se a direção for maior que 0 =  
    if(direction > 0){

        // Vai pular para o proximo, 0 >>  1 >>  2
        active = active + 1;
        

        // Quando chegar no 2 ( indicador 3 ), volta pro primeiro
        if(active == total){
            active = 0;
        }
    }

    else if(direction < 0){
        active = active - 1;
        if(active < 0){
            active = total - 1;
        }
    }

    

    // Adiciona a classe ACTIVE ao próximo item
    itens[active].classList.add('active')
    dots[active].classList.add('active')

}




nextButton.addEventListener('click', () => {

    update(-1)
    
})

prevButton.addEventListener('click', () => {

    // Vai executar a função definida abaixo. 'Update'
   update(1)
})