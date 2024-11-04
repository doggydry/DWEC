function factorial(numero) {
  let resultado = "";
  let factorial = 1;

  for (let i = numero; i > 0; i--) {
    factorial *= i;
    resultado += i === 1 ? `${i} = ` : `${i} x `;
  }
  return resultado + factorial;
}
console.log(factorial(7));

document.getElementById("factorial-btn").addEventListener("click", function () {
  const factorialBtn = document.getElementById("factorial-btn");
  const numero = parseInt(document.getElementById("numero-fact").value, 10);
  const resultado = factorial(numero);
  document.getElementById("resultado").innerHTML =  resultado;
});
