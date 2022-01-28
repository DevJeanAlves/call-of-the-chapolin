const { inherits } = require('util')
const { EventEmitter } = require('events')

function personagem(name) {
  this.name = name
}

const talkChapolin = ['Eu...', 'Colorado!']

inherits(personagem, EventEmitter)

const chapolim = new personagem('Chapolin')

chapolim.on('help', () => {
  setTimeout(() => {
    console.log(talkChapolin[0])
  }, 4000)
  setTimeout(() => {
    console.log(`O ${chapolim.name} ${talkChapolin[1]}`)
  }, 5500)
})

function talkvitima() {
  console.log('Oh...')
  setTimeout(() => {
    console.log(`e agora`)
  }, 1000)
  setTimeout(() => {
    console.log(`quem poderá me defender?`)
  }, 2500)
}

talkvitima()

chapolim.emit('help')
