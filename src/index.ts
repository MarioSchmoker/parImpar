let btnEnviar = document.getElementById("btnEnviar");
let número1 = document.getElementById("número");

rotulo.innerHTLM = "Ingresar Número";

btnEnviar?.addEventListener("click", () => {
  let número1: number = número.value;

  if (número1 == 0) {
    console.log("El " + número1 + " no es par, ni impar.");
  } else if (número1 % 2 === 0) {
    console.log("El " + número1 + " es par.");
  } else {
    console.log("El " + número1 + " es impar");
  }
});
