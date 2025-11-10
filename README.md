# 🎻 Sinfonia das Strings - Desafio Palíndromo

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 📖 Sobre o Desafio

**Sinfonia das Strings** é um desafio de programação que explora a verificação e contagem de palíndromos em strings. A temática cyberpunk urbana inspira uma aplicação interativa onde o usuário pode analisar frases palíndromas através de uma interface moderna e elegante.

### 🎯 Descrição Completa do Desafio

> A cidade chuvosa ressoa seus segredos em frases refletidas pelas luzes, onde o(a) violinista urbano(a) desvenda melodias de ida e volta — as frases palíndromas que ecoam perfeitas.

#### Parte 1: Frases Musicais Palíndromas

Implemente a função `isPalindrome(mensagem)`, que recebe uma frase e retorna `true` se, desconsiderando espaços, pontuação e diferenças entre maiúsculas/minúsculas, ela for um palíndromo; ou `false` caso contrário.

**Exemplos:**
- `isPalindrome('A base do teto desaba')` ➡️ `true`
- `isPalindrome('Socorram-me, subi no ônibus em Marrocos')` ➡️ `true`
- `isPalindrome('A grama é amarga')` ➡️ `true`
- `isPalindrome('Essa frase não é palíndroma')` ➡️ `false`

**Dica:** Considere apenas letras e números para a verificação.

#### Parte 2: Contador de Palíndromos

Crie a função `contaPalindromos(mensagem)`, que retorna a quantidade de substrings palíndromas (com 2 ou mais caracteres) encontradas dentro da frase, ignorando espaços e pontuação.

**Exemplo:**
- `contaPalindromos('A base do teto desaba')` ➡️ `8` (exemplos de substrings: 'asa', 'aba', 'esab', 'aba', 'baseb', 'a base a', ...)

---

## 🚀 Funções Principais

### 1️⃣ `isPalindrome(mensagem)`

```javascript
function isPalindrome(mensagem) {
    const limpa = limparString(mensagem);
    const reversa = limpa.split('').reverse().join('');
    return limpa === reversa;
}
```

**Propósito:** Verifica se uma string é um palíndromo perfeito, ignorando espaços, pontuação e case-sensitivity.

**Aplicação Real:**
- Validação de códigos/senhas simétricas
- Análise linguística e processamento de texto
- Jogos de palavras e quebra-cabeças
- Sistemas de detecção de padrões em textos

### 2️⃣ `contaPalindromos(mensagem)`

```javascript
function contaPalindromos(mensagem) {
    const limpa = limparString(mensagem);
    const palindromos = new Set();
    
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
```

**Propósito:** Identifica e conta todas as substrings palíndromas únicas dentro de uma string.

**Aplicação Real:**
- Análise de DNA e sequências biológicas (onde palíndromos têm significado biológico)
- Compressão de dados e identificação de padrões repetitivos
- Algoritmos de busca em textos
- Sistemas de reconhecimento de padrões

---

## 🧠 Lógica Técnica da Solução

### Parte 1: Verificação de Palíndromo Completo

**Algoritmo:**
1. **Normalização da String:** Remove todos os caracteres não-alfanuméricos usando regex `/[^a-z0-9]/g` e converte para minúsculas
2. **Reversão:** Cria uma cópia reversa da string normalizada usando `.split('').reverse().join('')`
3. **Comparação:** Compara a string normalizada com sua versão reversa usando operador de igualdade estrita (`===`)

**Complexidade:**
- **Tempo:** O(n) - onde n é o comprimento da string
- **Espaço:** O(n) - para armazenar a string limpa e reversa

**Otimizações Aplicadas:**
- Uso de regex para limpeza eficiente em uma única operação
- Case-insensitive através de `.toLowerCase()`
- Remoção de caracteres especiais para comparação precisa

### Parte 2: Contagem de Substrings Palíndromas

**Algoritmo:**
1. **Normalização:** Aplica a mesma limpeza da Parte 1
2. **Geração de Substrings:** Utiliza dois loops aninhados para gerar todas as substrings possíveis de tamanho ≥ 2
   - Loop externo (i): Define o início da substring (0 até n-1)
   - Loop interno (j): Define o fim da substring (i+2 até n)
3. **Verificação de Palíndromo:** Para cada substring, verifica se é igual à sua reversa
4. **Armazenamento Único:** Usa `Set()` para evitar duplicatas e contar apenas palíndromos únicos
5. **Ordenação:** Ordena os palíndromos por comprimento decrescente para melhor visualização

**Complexidade:**
- **Tempo:** O(n³) - n² para gerar substrings, n para verificar cada uma
- **Espaço:** O(n²) - no pior caso, armazena todas as substrings possíveis

**Estrutura de Dados Utilizada:**
- **Set:** Garante unicidade dos palíndromos encontrados automaticamente
- **Array:** Permite ordenação e manipulação dos resultados para exibição

**Otimizações Possíveis (não implementadas para manter simplicidade):**
- Algoritmo de Manacher para O(n) em verificação de palíndromos
- Programação dinâmica para evitar recálculos
- Suffix Trees para buscas mais eficientes

---

## 💻 Como Usar em Projetos Reais

### 1. Validação de Dados
```javascript
// Validar se uma senha/código é palindrômico
if (isPalindrome(userInput)) {
    console.log("Padrão simétrico detectado!");
}
```

### 2. Análise de Texto
```javascript
// Analisar padrões em documentos
const analysis = contaPalindromos(document);
console.log(`Encontrados ${analysis.count} padrões palindrômicos`);
```

### 3. Processamento de Sequências
```javascript
// Análise de DNA ou sequências binárias
const dnaSequence = "ATCGATCG";
const patterns = contaPalindromos(dnaSequence);
```

### 4. Sistema de Detecção
```javascript
// Detectar padrões suspeitos em logs
function detectSymmetricPatterns(logEntry) {
    const { count, list } = contaPalindromos(logEntry);
    if (count > threshold) {
        alertSecurityTeam(list);
    }
}
```

---

## 🎨 Funcionalidades da Interface

- ✅ **Design Cyberpunk:** Interface inspirada em cenários urbanos futurísticos
- 🎵 **Controles de Áudio:** Player integrado para música temática
- 🎬 **Background em Vídeo:** Suporte para vídeos em alta resolução
- 📊 **Análise Detalhada:** Exibição completa do processo de validação
- 🔄 **Animações Suaves:** Efeitos visuais que complementam a temática
- 📱 **Totalmente Responsivo:** Funciona perfeitamente em dispositivos móveis

---

## 📂 Estrutura do Projeto

```
desafio_344/
├── index.html          # Estrutura HTML
├── styles.css          # Estilos e animações
├── script.js           # Lógica do desafio
├── assets/
│   ├── background.mp4  # Vídeo de fundo
│   └── theme.mp3       # Música temática
└── README.md           # Documentação
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica e moderna
- **CSS3:** Animações, glassmorphism, responsividade
- **JavaScript (ES6+):** Manipulação de strings, arrays e DOM
- **Design Patterns:** Event-driven programming

---

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/luizfxdev/desafio_344.git
```

2. Adicione os arquivos de mídia:
   - Coloque seu vídeo como `assets/background.mp4`
   - Coloque sua música como `assets/theme.mp3`

3. Abra o arquivo `index.html` em um navegador moderno

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Compartilhar ideias

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**Luiz Felipe de Oliveira**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- Linkedin: [in/luizfxdev](https://www.linkedin.com/in/luizfxdev)
- Portfólio: [luizfxdev.com.br](https://luizfxdev.com.br)

---

## 🌟 Agradecimentos

Obrigado por conferir este projeto! Se gostou, não esqueça de deixar uma ⭐ no repositório!

---

<div align="center">
  <strong>🎻 Feito com paixão e código 🎻</strong>
</div>
