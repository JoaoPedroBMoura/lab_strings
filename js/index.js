  // 1. Inverter frase
  function inverterFrase() {
    let frase = document.getElementById("frase1").value;
    let invertida = frase.split("").reverse().join("");
    document.getElementById("resultado1").innerText = invertida;
  }

  // 2. Marcar vogais em negrito
  function marcarVogais() {
    let frase = document.getElementById("frase2").value;
    let resultado = frase.replace(/([aeiouAEIOU])/g, "<strong>$1</strong>");
    document.getElementById("resultado2").innerHTML = resultado;
  }

  // 3. Contar frequência de palavras e exibir tabela
  function contarPalavras() {
    let texto = document.getElementById("texto3").value.toLowerCase();
    let palavras = texto.match(/\w+/g);
    let freq = {};
    if (palavras) {
      palavras.forEach(function(palavra) {
        freq[palavra] = (freq[palavra] || 0) + 1;
      });
    }
    let html = "<table><tr><th>Palavra</th><th>Ocorrências</th></tr>";
    for (let palavra in freq) {
      html += "<tr><td>" + palavra + "</td><td>" + freq[palavra] + "</td></tr>";
    }
    html += "</table>";
    document.getElementById("resultado3").innerHTML = html;
  }

  // 4. Encontrar a palavra de maior ocorrência
  function palavraMaisFrequente() {
    let texto = document.getElementById("texto4").value.toLowerCase();
    let palavras = texto.match(/\w+/g);
    let freq = {};
    if (palavras) {
      palavras.forEach(function(palavra) {
        freq[palavra] = (freq[palavra] || 0) + 1;
      });
    }
    let maxPalavra = "";
    let maxCont = 0;
    for (let palavra in freq) {
      if (freq[palavra] > maxCont) {
        maxCont = freq[palavra];
        maxPalavra = palavra;
      }
    }
    if (maxPalavra) {
      document.getElementById("resultado4").innerText =
        "Palavra: " + maxPalavra + " | Ocorrências: " + maxCont;
    } else {
      document.getElementById("resultado4").innerText =
        "Nenhuma palavra encontrada.";
    }
  }

  // 5. Substituir texto
  function substituirTexto() {
    let texto = document.getElementById("texto5").value;
    let buscar = document.getElementById("buscar").value;
    let substituir = document.getElementById("substituir").value;
    let regex = new RegExp(buscar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "g");
    let resultado = texto.replace(regex, substituir);
    document.getElementById("resultado5").innerText = resultado;
  }

  // 6. Calcular quantos dias de vida
  function calcularDiasDeVida() {
    let dataStr = document.getElementById("data-nascimento").value;
    let partes = dataStr.split("/");
    if (partes.length !== 3) {
      document.getElementById("resultado6").innerText = "Formato inválido. Use dd/mm/aaaa.";
      return;
    }
    let dia = parseInt(partes[0], 10);
    let mes = parseInt(partes[1], 10) - 1;
    let ano = parseInt(partes[2], 10);
    let dataNascimento = new Date(ano, mes, dia);
    let hoje = new Date();
    let diff = hoje - dataNascimento;
    let dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("resultado6").innerText = "Você viveu " + dias + " dias.";
  }

  // 7. Converter data para extenso
  function dataPorExtenso() {
    let dataStr = document.getElementById("data7").value;
    let partes = dataStr.split("/");
    if (partes.length !== 3) {
      document.getElementById("resultado7").innerText = "Formato inválido. Use dd/mm/aaaa.";
      return;
    }
    let dia = partes[0];
    let mes = partes[1];
    let ano = partes[2];
    let meses = {
      "01": "janeiro", "1": "janeiro",
      "02": "fevereiro", "2": "fevereiro",
      "03": "março", "3": "março",
      "04": "abril", "4": "abril",
      "05": "maio", "5": "maio",
      "06": "junho", "6": "junho",
      "07": "julho", "7": "julho",
      "08": "agosto", "8": "agosto",
      "09": "setembro", "9": "setembro",
      "10": "outubro",
      "11": "novembro",
      "12": "dezembro"
    };
    let mesExtenso = meses[mes] || "mês inválido";
    document.getElementById("resultado7").innerText = dia + " de " + mesExtenso + " de " + ano;
  }

  // 8. Calcular diferença entre duas datas em semanas
  function semanasEntreDatas() {
    let dataStr1 = document.getElementById("data8-1").value;
    let dataStr2 = document.getElementById("data8-2").value;
    function parseDate(str) {
      let partes = str.split("/");
      if (partes.length !== 3) return null;
      let dia = parseInt(partes[0], 10);
      let mes = parseInt(partes[1], 10) - 1;
      let ano = parseInt(partes[2], 10);
      return new Date(ano, mes, dia);
    }
    let d1 = parseDate(dataStr1);
    let d2 = parseDate(dataStr2);
    if (!d1 || !d2) {
      document.getElementById("resultado8").innerText = "Formato de data inválido.";
      return;
    }
    let diff = Math.abs(d2 - d1);
    let semanas = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    document.getElementById("resultado8").innerText = "Diferença: aproximadamente " + semanas + " semanas.";
  }

  // 9. Classificar força do texto (senha)
  function classificarTexto() {
    let texto = document.getElementById("senha").value;
    let temMinuscula = /[a-z]/.test(texto);
    let temMaiuscula = /[A-Z]/.test(texto);
    let temNumero = /[0-9]/.test(texto);
    let temEspecial = /[@#!$%&*\(\)\-\+\.=]/.test(texto);

    let classificacao = "";
    let classeCss = "";
    if (/^[A-Za-z]+$/.test(texto)) {
      classificacao = "Fraca";
      classeCss = "weak";
    } else if (temMinuscula && temMaiuscula && temNumero && !temEspecial) {
      classificacao = "Moderada";
      classeCss = "moderate";
    } else if (temMinuscula && temMaiuscula && temNumero && temEspecial) {
      classificacao = "Forte";
      classeCss = "strong";
    } else {
      classificacao = "Fraca";
      classeCss = "weak";
    }
    document.getElementById("resultado9").innerHTML = "<span class='" + classeCss + "'>" + classificacao + "</span>";
  }

  // 10. Codificar frase (estratégia TENIS/POLAR)
  function codificarFrase() {
    let frase = document.getElementById("frase10").value;
    let mapa = {
      'T': 'P', 'P': 'T',
      't': 'p', 'p': 't',
      'E': 'O', 'O': 'E',
      'e': 'o', 'o': 'e',
      'N': 'L', 'L': 'N',
      'n': 'l', 'l': 'n',
      'I': 'A', 'A': 'I',
      'i': 'a', 'a': 'i',
      'S': 'R', 'R': 'S',
      's': 'r', 'r': 's'
    };
    let resultado = "";
    for (let char of frase) {
      resultado += mapa[char] || char;
    }
    document.getElementById("resultado10").innerText = resultado;
  }