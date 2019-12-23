let pegaNomedoPais = document.getElementById('selecionaPais');

pegaNomedoPais.addEventListener('change', function() {
  let pegaValuedoPais = pegaNomedoPais.value;
  let pegaPaisBrasil = document.getElementById('selecionaPaisBrasil');
  let qualPresente = document.getElementById('mostraPresente');
  let qualCamisetaverde = document.getElementById('camiseta-verde');
  let qualCamisetaroxa = document.getElementById('camiseta-roxa');
  let qualCamisetaamarela = document.getElementById('camiseta-amarela');


  let camisetas = ['camiseta-branca', 'camiseta-azul', 'camiseta-amarela', 'camiseta-verde', 'camiseta-roxa','camiseta-preta'];

  switch (pegaValuedoPais) {
    case 'brasil':
      qualPresente.innerText = '';
      pegaPaisBrasil.classList.remove('escondido');
      qualCamisetaverde.classList.add('escondidoverde');
      qualCamisetaroxa.classList.add('escondidoroxo');

      pegaPaisBrasil.addEventListener('change', function() {
        let pegaValuePaisBrasil = pegaPaisBrasil.value;

        if (pegaValuePaisBrasil === 'caxias') {
          qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta branca.'
        } else if (pegaValuePaisBrasil === 'poa') {
          qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta azul.'
        } else if (pegaValuePaisBrasil === 'sp') {
          qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta amarela.'
          qualCamisetaamarela.classList.remove('escondidoamarela');
        } else {
          qualPresente.innerText = '';
        }
      });
      break;
    case 'australia':
      pegaPaisBrasil.classList.add('escondido');
      qualCamisetaverde.classList.add('escondidoverde');
      qualCamisetaroxa.classList.add('escondidoroxo');
      qualCamisetaamarela.classList.add('escondidoamarela');
      qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta verde.'
      qualCamisetaverde.classList.remove('escondidoverde');
      qualCamisetaverde.src = `src/${camiseta-verde}.jpg`;
            break;
    case 'eua':
      pegaPaisBrasil.classList.add('escondido');
      qualCamisetaverde.classList.add('escondidoverde');
      qualCamisetaroxa.classList.add('escondidoroxo');
      qualCamisetaamarela.classList.add('escondidoamarela');
      qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta roxa.'
      qualCamisetaroxa.classList.remove('escondidoroxo');
      qualCamisetaroxa.src = `src/${camiseta-roxa}.jpg`;
      break;
    case 'inglaterra':
      pegaPaisBrasil.classList.add('escondido');
      qualCamisetaverde.classList.add('escondidoverde');
      qualCamisetaroxa.classList.add('escondidoroxo');
      qualCamisetaamarela.classList.add('escondidoamarela');
      qualPresente.innerText = 'Essa pessoa vai ganhar uma camiseta preta.'
      break;
    default:
      pegaPaisBrasil.classList.add('escondido');
      qualCamisetaverde.classList.add('escondidoverde');
      qualCamisetaamarela.classList.add('escondidoamarela');
      qualCamisetaroxa.classList.add('escondidoroxo');
      qualPresente.innerText = '';
  }
});

(function () {

  var COUNT = 300;
  var masthead = document.querySelector('.sky');
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var width = masthead.clientWidth;
  var height = masthead.clientHeight;
  var i = 0;
  var active = false;

  function onResize() {
    width = masthead.clientWidth;
    height = masthead.clientHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = '#FFF';

    var wasActive = active;
    active = width > 600;

    if (!wasActive && active)
      requestAnimFrame(update);
  }

  var Snowflake = function () {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
    this.r = 0;

    this.reset();
  }

  Snowflake.prototype.reset = function() {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    this.vy = 1 + Math.random() * 3;
    this.vx = 0.5 - Math.random();
    this.r = 1 + Math.random() * 2;
    this.o = 0.5 + Math.random() * 0.5;
  }

  canvas.style.position = 'absolute';
  canvas.style.left = canvas.style.top = '0';

  var snowflakes = [], snowflake;
  for (i = 0; i < COUNT; i++) {
    snowflake = new Snowflake();
    snowflake.reset();
    snowflakes.push(snowflake);
  }

  function update() {

    ctx.clearRect(0, 0, width, height);

    if (!active)
      return;

    for (i = 0; i < COUNT; i++) {
      snowflake = snowflakes[i];
      snowflake.y += snowflake.vy;
      snowflake.x += snowflake.vx;

      ctx.globalAlpha = snowflake.o;
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();

      if (snowflake.y > height) {
        snowflake.reset();
      }
    }

    requestAnimFrame(update);
  }

  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  onResize();
  window.addEventListener('resize', onResize, false);

  masthead.appendChild(canvas);
})();


