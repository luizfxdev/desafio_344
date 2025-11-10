// Elementos DOM
const inputFrase = document.getElementById('input-frase');
const btnDecifrar = document.querySelector('.btn-decifrar');
const btnRetornar = document.querySelector('.btn-retornar');
const resultadoContent = document.getElementById('resultado-content');
const themeAudio = document.getElementById('theme-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');

// Controles de Áudio
playAudioBtn.addEventListener('click', () => {
  themeAudio.play();
  playAudioBtn.style.background = 'rgba(0, 255, 85, 0.5)';
  pauseAudioBtn.style.background = 'rgba(10, 5, 24, 0.9)';
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
  pauseAudioBtn.style.background = 'rgba(255, 0, 85, 0.5)';
  playAudioBtn.style.background = 'rgba(10, 5, 24, 0.9)';
});

// Função para limpar string (apenas letras e números)
function limparString(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Parte 1: Verifica se é palíndromo
function isPalindrome(mensagem) {
  const limpa = limparString(mensagem);
  const reversa = limpa.split('').reverse().join('');
  return limpa === reversa;
}

// Parte 2: Conta palíndromos (substrings de 2+ caracteres)
function contaPalindromos(mensagem) {
  const limpa = limparString(mensagem);
  const palindromos = new Set();

  // Verifica todas as substrings possíveis
  for (let i = 0; i < limpa.length; i++) {
    for (let j = i + 2; j <= limpa.length; j++) {
      const substring = limpa.substring(i, j);
      const reversa = substring.split('').reverse().join('');

      if (substring === reversa) {
        palindromos.add(substring);
      }
    }
  }

  return {
    count: palindromos.size,
    list: Array.from(palindromos).sort((a, b) => b.length - a.length)
  };
}

// Função para exibir resultado
function exibirResultado(frase) {
  if (!frase.trim()) {
    resultadoContent.innerHTML = '<p class="placeholder">Por favor, digite uma frase!</p>';
    return;
  }

  const limpaOriginal = limparString(frase);
  const reversaOriginal = limpaOriginal.split('').reverse().join('');
  const ehPalindromo = isPalindrome(frase);
  const { count, list } = contaPalindromos(frase);

  let html = `
        <div class="resultado-item">
            <span class="resultado-label">📝 Frase Original:</span><br>
            "${frase}"
        </div>

        <div class="resultado-item">
            <span class="resultado-label">🧹 String Limpa (sem espaços/pontuação):</span><br>
            "${limpaOriginal}"
        </div>

        <div class="resultado-item">
            <span class="resultado-label">🔄 String Reversa:</span><br>
            "${reversaOriginal}"
        </div>

        <div class="resultado-item">
            <span class="resultado-label">✅ Parte 1 - É Palíndromo?</span><br>
            <strong style="color: ${ehPalindromo ? '#00ff55' : '#ff0055'}; font-size: 1.1rem;">
                ${ehPalindromo ? '✓ SIM' : '✗ NÃO'}
            </strong>
            <br><small>Comparação: "${limpaOriginal}" ${ehPalindromo ? '===' : '!=='} "${reversaOriginal}"</small>
        </div>

        <div class="resultado-item">
            <span class="resultado-label">🔢 Parte 2 - Substrings Palíndromas Encontradas:</span><br>
            <strong style="color: #00ff55; font-size: 1.2rem;">${count} palíndromos únicos</strong>
            ${
              list.length > 0
                ? `
                <div class="substring-list">
                    ${list
                      .slice(0, 20)
                      .map(p => `<span class="substring-item">"${p}"</span>`)
                      .join('')}
                    ${
                      list.length > 20
                        ? `<p style="margin-top: 10px; color: #00ff55; font-size: 0.85rem;">... e mais ${
                            list.length - 20
                          } palíndromos</p>`
                        : ''
                    }
                </div>
            `
                : ''
            }
        </div>

        <div class="resultado-destaque">
            🎻 RESULTADO FINAL 🎻<br>
            Palíndromo Completo: <span style="color: ${ehPalindromo ? '#00ff55' : '#ff0055'}">${
    ehPalindromo ? 'SIM' : 'NÃO'
  }</span><br>
            Substrings Palíndromas: <span style="color: #00ff55">${count}</span>
        </div>
    `;

  resultadoContent.innerHTML = html;
}

// Função para limpar resultado
function limparResultado() {
  inputFrase.value = '';
  resultadoContent.innerHTML = '<p class="placeholder">Aguardando entrada...</p>';
  inputFrase.focus();
}

// Event Listeners
btnDecifrar.addEventListener('click', () => {
  const frase = inputFrase.value;
  exibirResultado(frase);
});

btnRetornar.addEventListener('click', () => {
  limparResultado();
});

// Permitir Enter para decifrar
inputFrase.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    exibirResultado(inputFrase.value);
  }
});

// Foco inicial no input
inputFrase.focus();
