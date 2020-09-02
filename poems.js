<!DOCTYPE javascript>
<style type="text/css">
body { font: 14px/1.3 verdana, arial, helvetica, sans-serif; }
h1 { font-size:1.3em; }
h2 { font-size:1.2em; }
</style>
var poems = [
'ËÍÁé³ºÉÏÈË<br>Áõ³¤Çä<br>²Ô²ÔÖñÁÖËÂ<br>èÃèÃÖÓÉùÍí<br>ºÉóÒ´øĞ±Ñô<br>ÇàÉ½¶À¹éÔ¶¡£<br>(Ğ±Ñô Ò»×÷£ºÏ¦Ñô)<br>',
'456<br>'
]

function newpoem(){
  var randomNumber = Math.floor(Math.random() * (poems.length));
  document.getElementById('tangpoem300').innerHTML = poems[randomNumber];
}
