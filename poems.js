<!DOCTYPE javascript>
<style type="text/css">
body { font: 14px/1.3 verdana, arial, helvetica, sans-serif; }
h1 { font-size:1.3em; }
h2 { font-size:1.2em; }
</style>
var poems = [
'���鳺����<br>������<br>�Բ�������<br>����������<br>���Ҵ�б��<br>��ɽ����Զ��<br>(б�� һ����Ϧ��)<br>',
'456<br>'
]

function newpoem(){
  var randomNumber = Math.floor(Math.random() * (poems.length));
  document.getElementById('tangpoem300').innerHTML = poems[randomNumber];
}
