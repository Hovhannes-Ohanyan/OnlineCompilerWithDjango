$(document).ready(function() {
  var text = $("#codearea").val();
  var keywords = ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'];
  keywords.forEach(function(word) {
    var re = new RegExp("\\b" + word + "\\b", "gi");
    text = text.replace(re, "<mark>" + word + "</mark>");
  });
  $("#codearea").html(text + "<span style="background-color:yellow"> </span>");
});