// VIG-9: Sistema Vigenère
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function charToIndex(char) {
  const upper = char.toUpperCase();
  return ALPHABET.indexOf(upper);
}

export function vigenereEncrypt(plaintext, key) {
  if (!key) return plaintext;
  
  const keyRepeated = key.toUpperCase().repeat(Math.ceil(plaintext.length / key.length)).slice(0, plaintext.length);
  let result = '';
  
  for (let i = 0; i < plaintext.length; i++) {
    const char = plaintext[i];
    const keyChar = keyRepeated[i];
    
    if (char.match(/[a-zA-Z]/)) {
      const isUpper = char === char.toUpperCase();
      const charIndex = charToIndex(char);
      const keyIndex = charToIndex(keyChar);
      
      if (charIndex === -1 || keyIndex === -1) {
        result += char;
      } else {
        const newIndex = (charIndex + keyIndex) % ALPHABET.length;
        const newChar = ALPHABET[newIndex];
        result += isUpper ? newChar : newChar.toLowerCase();
      }
    } else {
      result += char;
    }
  }
  
  return result;
}

export function vigenereDecrypt(ciphertext, key) {
  if (!key) return ciphertext;
  
  const keyRepeated = key.toUpperCase().repeat(Math.ceil(ciphertext.length / key.length)).slice(0, ciphertext.length);
  let result = '';
  
  for (let i = 0; i < ciphertext.length; i++) {
    const char = ciphertext[i];
    const keyChar = keyRepeated[i];
    
    if (char.match(/[a-zA-Z]/)) {
      const isUpper = char === char.toUpperCase();
      const charIndex = charToIndex(char);
      const keyIndex = charToIndex(keyChar);
      
      if (charIndex === -1 || keyIndex === -1) {
        result += char;
      } else {
        const newIndex = (charIndex - keyIndex + ALPHABET.length) % ALPHABET.length;
        const newChar = ALPHABET[newIndex];
        result += isUpper ? newChar : newChar.toLowerCase();
      }
    } else {
      result += char;
    }
  }
  
  return result;
}

// PHALANX-CORE: AES-GCM usando Web Crypto API
async function deriveKey(password, salt) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );
  
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToArrayBuffer(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

export async function phalanxEncrypt(plaintext, password) {
  try {
    const encoder = new TextEncoder();
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));
    
    const key = await deriveKey(password, salt);
    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      encoder.encode(plaintext)
    );
    
    const cipherBase64 = arrayBufferToBase64(encrypted);
    const saltBase64 = arrayBufferToBase64(salt);
    const ivBase64 = arrayBufferToBase64(iv);
    
    return {
      cipher: cipherBase64,
      salt: saltBase64,
      iv: ivBase64
    };
  } catch (error) {
    throw new Error('Error en encryptacion: ' + error.message);
  }
}

export async function phalanxDecrypt(cipher, password, salt, iv) {
  try {
    const decoder = new TextDecoder();
    const saltBuffer = new Uint8Array(base64ToArrayBuffer(salt));
    const ivBuffer = new Uint8Array(base64ToArrayBuffer(iv));
    const cipherBuffer = base64ToArrayBuffer(cipher);
    
    const key = await deriveKey(password, saltBuffer);
    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: ivBuffer },
      key,
      cipherBuffer
    );
    
    return decoder.decode(decrypted);
  } catch (error) {
    throw new Error('Error en descifrado. Verifica la clave.');
  }
}
