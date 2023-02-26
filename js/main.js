//const robotron = document.querySelector("#robotron")

const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste")

console.log(controle)

controle.forEach(element => {
    element.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
    
});

somar.addEventListener("click", (evento) => {
    manipulaDados("somar"); 
});
    

subtrair.addEventListener("click", (evento) => {
    manipulaDados("subtrair")
})


function manipulaDados(operacao) {
    if(operacao === "subtrair") {
        if (parseInt(braco.value) >  0) {
        
            braco.value = parseInt(braco.value) - 1;
        }

    }
    else {
        braco.value = parseInt(braco.value)  + 1; 

    }
}