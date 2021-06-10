var table = document.getElementsByTagName('table')[0];

table.onclick = function(e) {

  var target = (e || window.event).target;
  if (target.tagName in {TD:1, TH:1})
  target.setAttribute('style', 'background-color: #F00');
};