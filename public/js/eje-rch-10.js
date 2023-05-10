alert("Hola Mundo del Java Script");

function suma() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 + num2;
    document.getElementById('resultado').textContent = resultado;
  }
  
  function resta() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 - num2;
    document.getElementById('resultado').textContent = resultado;
  }
  
  function multi() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 * num2;
    document.getElementById('resultado').textContent = resultado;
  }
  
  function dividir() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 / num2;
    document.getElementById('resultado').textContent = resultado;
  }


