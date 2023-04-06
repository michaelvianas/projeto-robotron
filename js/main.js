//console.log(`oi`);
const robotron = document.querySelector("#robotron")

robotron.addEventListener(`click`, () => {
  console.log(`Cliquei no robô!`);
});

function dizerOi(nome){
  console.log(`oi, ${nome}`);
  console.log(`bem-vindo ao Robotron 2000`);
}

dizerOi(`Michael`);