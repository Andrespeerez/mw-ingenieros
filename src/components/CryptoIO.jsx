import React, { useState } from 'react';

export default function CryptoIO({ 
  encodeFn, 
  decodeFn, 
  decodeRequiresKey = false,
  keyLabel = 'Clave',
  placeholder = 'Escribe aqui...',
  isAsync = false 
}) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [salt, setSalt] = useState('');
  const [iv, setIv] = useState('');

  const handleEncode = async () => {
    if (!input.trim()) return;
    setError('');
    try {
      if (isAsync) {
        const result = await encodeFn(input, key);
        if (typeof result === 'object' && result.cipher) {
          setOutput(result.cipher);
          setSalt(result.salt);
          setIv(result.iv);
        } else {
          setOutput(result);
        }
      } else {
        setOutput(encodeFn(input, key));
        setSalt('');
        setIv('');
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const handleDecode = async () => {
    if (!input.trim()) return;
    setError('');
    try {
      if (isAsync) {
        if (!key || !salt || !iv) {
          setError('Se requiere clave, salt e IV para descifrar');
          return;
        }
        const result = await decodeFn(input, key, salt, iv);
        setOutput(result);
      } else {
        setOutput(decodeFn(input, key));
        setSalt('');
        setIv('');
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="space-y-3">
      {decodeRequiresKey && (
        <div className="flex flex-col gap-1">
          <label className="text-green-500 text-xs">{keyLabel}</label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Introduce la clave..."
            className="w-full p-2 bg-black text-green-500 border border-green-900 rounded"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-green-500 text-xs">Input</label>
          <textarea
            rows={3}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="w-full p-2 bg-black text-green-500 border border-green-900 rounded resize-none"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-green-500 text-xs">Output</label>
          <textarea
            rows={3}
            value={output}
            readOnly
            placeholder="Resultado..."
            className="w-full p-2 bg-black/50 text-green-400 border border-green-900 rounded resize-none"
          />
        </div>
      </div>

      {isAsync && salt && iv && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-yellow-500">Salt: </span>
            <span className="text-green-600 font-mono break-all">{salt}</span>
          </div>
          <div>
            <span className="text-yellow-500">IV: </span>
            <span className="text-green-600 font-mono break-all">{iv}</span>
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-400 text-xs p-2 bg-red-900/30 border border-red-600/50 rounded">
          {error}
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={handleEncode}
          className="px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500/20 transition-colors"
        >
          Encode
        </button>
        <button
          onClick={handleDecode}
          className="px-4 py-2 border border-mint-500 text-mint-400 rounded hover:bg-mint-500/20 transition-colors"
        >
          Decode
        </button>
      </div>
    </div>
  );
}
