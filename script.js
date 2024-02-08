const perguntas = [
    {
      pergunta: "Quem morre mais no jogo 'Valheim'?",
      respostas: [
        "Matheus rushando",
        "Jeh com sua espadona",
        "Helo com as mosconas",
      ],
      correta: 0
    },
    {
      pergunta: "Qual o nome da pessoa que é dono dessa frase 'galero, sei que to sumido, mas vou tentar colar mais na call'?",
      respostas: [
        "nossaL",
        "L4sson",
        "Lasson",
      ],
      correta: 2
    },
    {
      pergunta: "O meme 'Vamos dar o fora daqui esse lugar me dá nojo' lembra qual loja virtual de jogos eletrônicos? ",
      respostas: [
        "Steam",
        "Epic Games Store",
        "Nuuvem",
      ],
      correta: 1
    },
    {
      pergunta: "Quem adora fazer um pãozinho durante o jojin?",
      respostas: [
        "Padeiro",
        "Filho do padeiro",
        "Matheus",
      ],
      correta: 2
    },
    {
      pergunta: "A Jéssica gosta de crackear jogo eletrônicos vulgo pirataria?",
      respostas: [
        "Gosta quando é no PC do Matheus, sai fora crackear no PC dela",
        "Não gosta",
        "Gosta e faz",
      ],
      correta: 0
    },
    {
      pergunta: "Pq o grupo se chama 'Alieligenas'?",
      respostas: [
        "Os integrantes são alieligenas de verdade",
        "Os integrantes não tem uma boa dicção",
        "Os integrantes são alieligenas de verdade com dicção ruim",
      ],
      correta: 1
    },
    {
      pergunta: "A Sasa faz?",
      respostas: [
        "Maiu",
        "Máááááááh",
        "Meow (kwaii)",
      ],
      correta: 1
    },
    {
      pergunta: "Como é a jogatina da Helo no jogo Demonologist?",
      respostas: [
        "Só morre",
        "Ela enfrenta todos os fantasmas",
        "Fica só na tenda, nas cameras",
      ],
      correta: 2
    },
    {
      pergunta: "Proxímo a qual horário alguém fala 'Não vou muito longe não, hein'?",
      respostas: [
        "22h",
        "00h",
        "Ninguém fala isso",
      ],
      correta: 0
    },
    {
      pergunta: "No jogo Valheim, quem sempre passa por cima dos itens que estão no chão e coleta tudo?",
      respostas: [
        "Helo",
        "Jeh",
        "Matheus",
      ],
      correta: 1
    },
  ];
  
  

const quiz = document.querySelector('#quiz')

const template = document.querySelector('template')
  
const corretas = new Set()

  
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
        
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
        
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta){
            corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

    quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
    
    }
  