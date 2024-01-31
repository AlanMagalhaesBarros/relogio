const rolex = document.getElementsByClassName('relogio');
const minutos = document.getElementById('minutos');
const segundos= document.getElementById('segundos');
   

const relogio = setInterval( function time() {
  let dateToday = new Date();
  let hor = dateToday.getHours();
  let min =dateToday.getMinutes();
  let seg = dateToday.getSeconds();

  if(hor < 10 ) hor ='0'+ hor;
  if(minutos < 10 ) min ='0'+ min;
  if(seg < 10 ) seg ='0'+ seg;

  horas.textContent = hor;
  minutos.textContent = min;
  segundos.textContent =seg;
 

  
})
 const image = document.querySelector('fundo')

function atualiza(){
  rolex.classList.toggle('animar');
}

const img = document.querySelector('.fundo')

if(minutos >= 39){
img.src='./fundo1.png';
}else{
  
}