(function(){
  var d=document.documentElement; d.classList.remove('no-js'); d.classList.add('js');
  var btn=document.querySelector('.nav-toggle'), nav=document.getElementById('site-nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('open'); btn.setAttribute('aria-expanded',open?'true':'false');
    });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');btn.focus();} });
  }
  var y=document.getElementById('year'); if(y){y.textContent=new Date().getFullYear();}
})();
