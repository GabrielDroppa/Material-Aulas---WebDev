//Adiciona ao fim do array
function executarPush() {
  const array = ['🍎', '🍌'];
  array.push("🍇")
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

//Remove o ultimo elemento do Array
function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  array.pop();
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

//Remove o primeiro elemento
function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  array.shift();
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

//Adiciona o elemento no começo
function executarUnshift() {
  const array = ['🍌', '🍇'];
  array.unshift("🍓");
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

//Verificar o que tem na Array
function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = array.includes("🥝");
  document.getElementById('resultado-includes').textContent = resultado;
}

//Inverte a ordem dos elementos no Array
function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.reverse();
  document.getElementById('resultado-reverse').textContent = resultado;
}

//Ordenar elementos dentro do Array por ordem crescente array.sort();
//Ordenar elementos dentro do Array por ordem decrescente array.sort().reverse();
function executarSort() {
  const array = [3, 1, 4, 2];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

  const resultado = array.sort(((a,b) => b - a));
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort().reverse();
  document.getElementById('resultado-sort2').textContent = resultado2;
}

//
function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  const resultado = array;
  document.getElementById('resultado-slice').textContent = resultado;
}

//
function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}

//
function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-indexof').textContent = resultado;
}

//
function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array;
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */

//Vai passar por cada item do Array e se transformar nele, fazendo o que você pode naquele item
function executarForEach() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.forEach(pegaItem => console.log(pegaItem));
  document.getElementById('resultado-foreach').textContent = resultado;
}

//Gera uma copia da lista atual mas modificada
function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  array.map(pegaItem => `✅ ${pegaItem}`);
  const resultado = 'Resultado da operação map';
  document.getElementById('resultado-map').textContent = resultado;
}

//Mesma coisa que o de cima mas com usabilidades a mais
 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    dispositivos.map(pegaItem =>{ 
      return`<h1>Item ${index = 1} em promoção!</h1>
      <p>${pegaitem}</p>`
    });
    const resultado = 'Resultado da operação map inserindo HTML';
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

//Faz um filtro no array e retorna ela filtrada
function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  array.filter(pegaItem);
  const resultado = 'Resultado da operação filter';
  document.getElementById('resultado-filter').textContent = resultado;
}

//retorna o item que está sendo procurado, mas se não existir retorna -1
function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = 'Resultado da operação find';
  array.find(pegaItem => pegaItem === "🍎");
  document.getElementById('resultado-find').textContent = resultado;
}

//Retorna a posição do elemento no Array
function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  const resultado = 'Resultado da operação findIndex';
  document.getElementById('resultado-findIndex').textContent = resultado;
}

//Soma todos os numeros dentro do Array
function executarReduce() {
  const array = [1, 2, 3, 4];
  const resultado = array.reduce((totalAcumulado, valorAnual) => {
    return totalAcumulado + valorAnual
  });
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}



//Declara Array
let nomes = ["Gabriel", 1, "Fulano"];
console.log(nomes[2])
//Atualizar o valor de um item do Array
nomes[2] = "Matheus Bidu"
//Como saber o tamanho de um Array
nomes.length