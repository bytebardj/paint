var poems = [
'���鳺����<br>������<br>�Բ�������<br>����������<br>���Ҵ�б��<br>��ɽ����Զ��<br>(б�� һ����Ϧ��)<br>',
'456<br>'
]

function newpoem(){
  var randomNumber = Math.floor(Math.random() * (poems.length));
  document.getElementById('tangpoem300').innerHTML = poems[randomNumber];
}
