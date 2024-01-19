const tabela = document.querySelector('.temporizador')
let index = -1
let itens = []

function criarcronometro() {
  index++
  nome = prompt('Qual nome? Ex: Megaterio') || 'Megaterio'
  horas = prompt('Quantas horas? Ex: 1') || 0
  minutos = prompt('Quantos minutos? Ex: 30') || 30
  segundos = 59
  itens.push({ 'nome': nome, 'horas': horas, 'minutos': minutos, 'segundos': segundos })

  if (horas >= 0) {
    minutos = minutos - 1
  } else {
    horas = 0
  }

  let div = document.createElement('div')
  div.innerHTML = `
    <div id="div${index}" class="t-novo">
    <p id="n${index}">${itens[index].nome}</p>
    <p>
    Horas:<span id="h${index}" class="hora">${itens[index].horas}</span> 
    Minutos:<span id="m${index}" class="minuto">${itens[index].minutos}</span> 
    Segundos:<span id="s${index}" class="segundo">${itens[index].segundos}</span>.
    </p>
    <button onclick="excluiritem(${index})" class="excluir">X</button>
    </div>
  `
  tabela.appendChild(div)

  let intervalID = setInterval(tempo, 1000, index);
}

let som = new Audio('alert.mp3')

function tempo(index) {

  if (itens[index].segundos == 0 && itens[index].minutos == 0 && itens[index].horas == 0) {
    // clearInterval(intervalID);
    // console.log('Acabou, play Sound')
    let div = document.getElementById(`div${index}`)
    if (div) {
      som.play()
      return
    }
  }

  if (itens[index].horas > 0 && itens[index].minutos == 0 && itens[index].segundos == 0) {
    itens[index].horas = itens[index].horas - 1
    document.getElementById(`h${index}`).innerText = itens[index].horas;
    itens[index].minutos = 59
    document.getElementById(`m${index}`).innerText = itens[index].minutos;
  }

  if (itens[index].minutos > 0 && itens[index].segundos == 0) {
    itens[index].minutos = itens[index].minutos - 1
    document.getElementById(`m${index}`).innerText = itens[index].minutos;
    itens[index].segundos = 59
  }

  itens[index].segundos = itens[index].segundos - 1;
  let div = document.getElementById(`div${index}`)
  if (div) {
    document.getElementById(`s${index}`).innerText = itens[index].segundos;
  }
}

function excluiritem(index) {
  let div = document.getElementById(`div${index}`)
  som.pause()
  div.remove()
}