jQuery(window).load(function($){
  atualizaRelogio();
});
function atualizaRelogio(){
  var momentoAtual = new Date();

  var vhora = momentoAtual.getHours();
  var vminuto = momentoAtual.getMinutes();
  var vsegundo = momentoAtual.getSeconds();

  var vdia = momentoAtual.getDate();
  var vmes = momentoAtual.getMonth() + 1;
  var vano = momentoAtual.getFullYear();

  if (vdia < 10){ vdia = "0" + vdia;}
  if (vmes < 10){ vmes = "0" + vmes;}
  if (vhora < 10){ vhora = "0" + vhora;}
  if (vminuto < 10){ vminuto = "0" + vminuto;}
  if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

  dataFormat = vdia + " / " + vmes + " / " + vano;
  horaFormat = vhora + " : " + vminuto + " : " + vsegundo;

  document.getElementById("data").innerHTML = dataFormat;
  document.getElementById("hora").innerHTML = horaFormat;

  setTimeout("atualizaRelogio()",1000);
}
//Para SideBar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
$(document).ready(function(){
  $("#horaLink").click(function(){
    $("#visorSpan").slideDown(3000);
    $("#horaLink").hide();
  });
  $("#visorSpan").click(function(){
    $("#visorSpan").slideUp(5000);
    setTimeout("$('#horaLink').show()",5001);
  });
});
 
 