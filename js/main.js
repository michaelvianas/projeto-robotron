//console.log(`oi`);
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
  elemento.addEventListener(`click`, (evento) => {
    manipularDados(evento.target.textContent);
  })
})

function manipularDados(operacao){
  if(operacao === "-"){
    braco.value = parseInt(braco.value) - 1;
  }else if(operacao === "+"){
    braco.value = parseInt(braco.value) + 1;
  }
}