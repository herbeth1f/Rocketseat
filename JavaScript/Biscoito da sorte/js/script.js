const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const phrases = [
  "A persistência realiza o impossível",
  "Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo",
  "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação",
  "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação"
]

screen1.querySelector(".screen1 img").addEventListener('click', generateMessage)
screen2.querySelector(".screen2 button").addEventListener('click', homeScreen)


//Funções:
function generateMessage() {
  resetScreens()
  let message = phrases[Math.floor((Math.random() * phrases.length))]
  screen2.querySelector(".phrases p").innerText = message
}

function homeScreen() {
  resetScreens()
}

function resetScreens() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}