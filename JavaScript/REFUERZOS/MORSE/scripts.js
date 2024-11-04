/**
 * Escribe una función que codifique/decodifique el código morse. La función detectara
automáticamente el tipo antes de realizar la conversión.
En morse se soporta 3 símbolos para representar la información:
• Raya “-“
• Punto “.”
• Espacio “ “.
Entre cada carácter se incluye 1 espacio, entre palabras 2 espacios.
 */
const abcMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};
function codificiarDesMorse(palabra) {
  if (palabra.match(/^[A-Z0-9 ]+$/) !== null) {
    return palabra.normalaMorse();
  } else if (palabra.match(/^[-. ]+$/) !== null) {
    return palabra.morseaNormal();
  }

  function morseaNormal(palabra) {
    for (let i = 0; i < palabra.lenght; i++) {}
  }

  function normalaMorse() {}
}
codificiarDesMorse();
