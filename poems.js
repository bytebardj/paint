var poems = [
'送灵澈上人<br>刘长卿<br><br>苍苍竹林寺<br>杳杳钟声晚<br>荷笠带斜阳<br>青山独归远<br>(斜阳 一作：夕阳)<br><br>',
'锦瑟<br>李商隐<br><br>锦瑟无端五十弦<br>一弦一柱思华年<br>庄生晓梦迷蝴蝶<br>望帝春心托杜鹃<br>沧海月明珠有泪<br>蓝田日暖玉生烟<br>此情可待成追忆<br>只是当时已惘然<br><br>',
'崔九欲往南山马上口号与别/留别王维/送崔九<br>裴迪<br><br>归山深浅去<br>须尽丘壑美<br>莫学武陵人<br>暂游桃源里<br><br>'
]

function newpoem(){
  var randomNumber = Math.floor(Math.random() * (poems.length));
  document.getElementById('tangpoem300').innerHTML = poems[randomNumber];
}
