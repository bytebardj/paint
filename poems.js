var poems = [
'送灵澈上人<br>刘长卿<br>苍苍竹林寺<br>杳杳钟声晚<br>荷笠带斜阳<br>青山独归远。<br>(斜阳 一作：夕阳)<br>',
'456<br>'
]

function newpoem(){
  var randomNumber = Math.floor(Math.random() * (poems.length));
  document.getElementById('tangpoem300').innerHTML = poems[randomNumber];
}
