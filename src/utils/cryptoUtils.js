// Texto a binario (8 bits por caracter)
export function textToBinary(text) {
  return text.split('').map(char => {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
}

// Binario a texto
export function binaryToText(binary) {
  return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

// Texto a hexadecimal (UTF-8)
export function textToHex(text) {
  return Array.from(text).map(char => {
    return char.charCodeAt(0).toString(16).padStart(2, '0').toUpperCase();
  }).join(' ');
}

// Hexadecimal a texto
export function hexToText(hex) {
  return hex.split(' ').map(h => String.fromCharCode(parseInt(h, 16))).join('');
}

// Texto a UTF-8 hex
export function textToUtf8Hex(text) {
  return Array.from(new TextEncoder().encode(text))
    .map(byte => byte.toString(16).padStart(2, '0').toUpperCase())
    .join('');
}

// UTF-8 hex a texto
export function utf8HexToText(hex) {
  const bytes = hex.match(/.{1,2}/g)?.map(h => parseInt(h, 16)) || [];
  return new TextDecoder().decode(new Uint8Array(bytes));
}

// Texto a UTF-16 hex
export function textToUtf16Hex(text) {
  const buffer = new ArrayBuffer(text.length * 2);
  const view = new Uint16Array(buffer);
  for (let i = 0; i < text.length; i++) {
    view[i] = text.charCodeAt(i);
  }
  return Array.from(new Uint8Array(buffer))
    .map(byte => byte.toString(16).padStart(2, '0').toUpperCase())
    .join('');
}

// UTF-16 hex a texto
export function utf16HexToText(hex) {
  const bytes = hex.match(/.{1,2}/g)?.map(h => parseInt(h, 16)) || [];
  return String.fromCharCode(...new Uint16Array(new Uint8Array(bytes).buffer));
}

// Texto a Base64
export function textToBase64(text) {
  return btoa(unescape(encodeURIComponent(text)));
}

// Base64 a texto
export function base64ToText(base64) {
  return decodeURIComponent(escape(atob(base64)));
}

// Alfabeto Morse
const MORSE_CODE = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
  'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
  'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--',
  '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
  ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
  '$': '...-..-', '@': '.--.-.', ' ': '/'
};

// Invertir el mapa Morse para decodificar
const MORSE_TO_TEXT = Object.fromEntries(
  Object.entries(MORSE_CODE).map(([k, v]) => [v, k])
);

// Texto a Morse
export function textToMorse(text) {
  return text.toUpperCase().split('').map(char => {
    return MORSE_CODE[char] || char;
  }).join(' ');
}

// Morse a texto
export function morseToText(morse) {
  return morse.split('   ').map(word => {
    return word.split(' ').map(code => {
      return MORSE_TO_TEXT[code] || '';
    }).join('');
  }).join(' ');
}
