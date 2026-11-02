/*
 * Histórias Bíblicas para Crianças
 * Conteúdo em português (pt-BR), com linguagem simples e carinhosa.
 * Cada história tem páginas com uma cena ilustrada (SVG) e o texto narrado.
 *
 * A propriedade `scene` de cada página corresponde a uma função de
 * ilustração definida em scenes.js.
 */

const STORIES = [
  {
    id: "criacao",
    title: "A Criação do Mundo",
    subtitle: "Deus criou o céu, a terra e você!",
    reference: "Gênesis 1",
    color: "#7c5cff",
    emoji: "🌍",
    pages: [
      {
        scene: "darkness",
        text: "No comecinho de tudo, não havia nada. Só escuridão. E Deus, cheio de amor, decidiu criar um mundo lindo para nós.",
      },
      {
        scene: "light",
        text: "Deus disse: “Que haja luz!” E a luz apareceu, brilhante e quente. Deus chamou a luz de dia, e a escuridão de noite.",
      },
      {
        scene: "sky-sea",
        text: "Depois Deus criou o céu azul lá em cima e os mares lá embaixo. As águas balançavam suaves, e o céu ficou enorme.",
      },
      {
        scene: "plants",
        text: "Então nasceram as plantas: gramas verdinhas, flores coloridas e árvores cheias de frutas docinhas. A terra ficou bem bonita!",
      },
      {
        scene: "sun-moon",
        text: "Deus colocou o sol para brilhar de dia e a lua com as estrelas para enfeitar a noite. Assim ficou fácil saber a hora de brincar e a hora de dormir.",
      },
      {
        scene: "animals",
        text: "Deus criou os peixinhos no mar, os passarinhos no céu e muitos bichinhos na terra: leões, coelhos, borboletas e elefantes. Que festa de animais!",
      },
      {
        scene: "adam-eve",
        text: "Por último, Deus criou as pessoas, feitas com muito carinho e parecidas com Ele no amor. Deus olhou para tudo e viu que era muito bom.",
      },
      {
        scene: "rest",
        text: "No sétimo dia, Deus descansou. E até hoje Ele cuida de cada florzinha, de cada estrela e de cada criança. Deus te ama muito!",
      },
    ],
    prayer:
      "Obrigado, Deus, por este mundo tão bonito e por me criar com tanto amor. Amém.",
  },

  {
    id: "noe",
    title: "Noé e a Arca",
    subtitle: "Um barco enorme cheio de animais",
    reference: "Gênesis 6–9",
    color: "#20a4a4",
    emoji: "🚢",
    pages: [
      {
        scene: "noah",
        text: "Havia um homem muito bom chamado Noé. Ele amava a Deus e fazia sempre o que era certo, mesmo quando os outros não faziam.",
      },
      {
        scene: "ark-build",
        text: "Deus pediu a Noé: “Construa uma arca bem grande, um barco de madeira.” Noé obedeceu e começou a martelar: toc, toc, toc!",
      },
      {
        scene: "animals-two",
        text: "Então os animais chegaram, de dois em dois: dois leões, duas girafas, dois coelhinhos. Todos entraram na arca em fila, bem organizados.",
      },
      {
        scene: "rain",
        text: "Começou a chover forte, muito forte. A chuva caiu por quarenta dias e quarenta noites. Mas dentro da arca todos estavam quentinhos e seguros.",
      },
      {
        scene: "float",
        text: "A arca flutuou sobre as águas. Noé cuidava dos animais, dava comida a todos e confiava que Deus estava cuidando deles.",
      },
      {
        scene: "dove",
        text: "Quando a chuva parou, Noé soltou uma pombinha. Ela voltou com um raminho verde no bico: era sinal de que a terra estava seca de novo!",
      },
      {
        scene: "rainbow",
        text: "Deus pintou um arco-íris no céu e prometeu: “Vou sempre cuidar de vocês.” Por isso, quando você vê um arco-íris, lembre: Deus é fiel!",
      },
    ],
    prayer:
      "Obrigado, Deus, por cuidar de mim como cuidou de Noé. Eu confio em Você. Amém.",
  },

  {
    id: "davi",
    title: "Davi e Golias",
    subtitle: "O pequeno pastor corajoso",
    reference: "1 Samuel 17",
    color: "#e8873a",
    emoji: "🪨",
    pages: [
      {
        scene: "shepherd",
        text: "Davi era um menino pastor. Ele cuidava das ovelhas e tocava harpa cantando para Deus. Davi era pequeno, mas tinha um coração muito corajoso.",
      },
      {
        scene: "giant",
        text: "Um gigante enorme chamado Golias assustava todo mundo. Ele gritava alto e ninguém tinha coragem de enfrentá-lo. Todos tremiam de medo!",
      },
      {
        scene: "david-brave",
        text: "Mas Davi disse: “Não tenha medo. Deus está comigo!” Ele pegou só a sua funda e cinco pedrinhas lisas do rio.",
      },
      {
        scene: "sling",
        text: "Davi rodou a funda no ar: vuuum, vuuum! Soltou uma pedrinha que voou reto e certeiro. E o gigante enorme caiu no chão!",
      },
      {
        scene: "victory",
        text: "Todos ficaram felizes e surpresos. Davi mostrou que, com a ajuda de Deus, até os pequenos podem fazer coisas grandes e vencer o medo.",
      },
    ],
    prayer:
      "Deus, me ajude a ser corajoso como Davi, sabendo que Você está sempre comigo. Amém.",
  },

  {
    id: "daniel",
    title: "Daniel na Cova dos Leões",
    subtitle: "A fé que fecha a boca dos leões",
    reference: "Daniel 6",
    color: "#c94f7c",
    emoji: "🦁",
    pages: [
      {
        scene: "daniel-pray",
        text: "Daniel amava a Deus e rezava três vezes por dia, todos os dias. Ele agradecia por tudo e pedia ajuda com muito carinho.",
      },
      {
        scene: "jealous",
        text: "Algumas pessoas ficaram com inveja de Daniel. Elas criaram uma lei malvada: quem rezasse a Deus seria jogado na cova dos leões!",
      },
      {
        scene: "daniel-still-pray",
        text: "Mas Daniel não teve medo. Ele continuou rezando, com a janela aberta, do mesmo jeitinho de sempre, porque amava muito a Deus.",
      },
      {
        scene: "lions-den",
        text: "Então Daniel foi colocado na cova dos leões. Os leões eram grandes e tinham dentes enormes. Mas Daniel confiou em Deus e rezou.",
      },
      {
        scene: "angel-lions",
        text: "Deus enviou um anjo que fechou a boca dos leões. Eles ficaram mansinhos, como gatinhos, e não machucaram Daniel de jeito nenhum.",
      },
      {
        scene: "daniel-safe",
        text: "De manhã, Daniel saiu são e salvo! Todos viram que o Deus de Daniel é forte e cuida de quem confia n’Ele. Que alegria!",
      },
    ],
    prayer:
      "Obrigado, Deus, por me proteger. Quero rezar todos os dias como Daniel. Amém.",
  },

  {
    id: "natal",
    title: "O Nascimento de Jesus",
    subtitle: "A noite mais especial de todas",
    reference: "Lucas 2",
    color: "#4a7fd6",
    emoji: "⭐",
    pages: [
      {
        scene: "annunciation",
        text: "Um anjo chamado Gabriel visitou Maria e disse: “Você vai ser mãe de Jesus, o Filho de Deus.” Maria ficou feliz e disse sim a Deus.",
      },
      {
        scene: "journey",
        text: "Maria e José viajaram até a cidade de Belém. O caminho era longo, e o burrinho andava devagarinho pela estrada empoeirada.",
      },
      {
        scene: "manger",
        text: "Não havia lugar na hospedaria. Então Jesus nasceu num estábulo simples e foi deitado numa manjedoura, sobre palha macia e quentinha.",
      },
      {
        scene: "shepherds",
        text: "Anjos apareceram no céu para os pastores e cantaram: “Glória a Deus! Nasceu o Salvador!” Os pastores correram felizes para ver o bebê.",
      },
      {
        scene: "wisemen",
        text: "Uma estrela brilhante guiou três reis magos. Eles trouxeram presentes: ouro, incenso e mirra, para adorar o menino Jesus.",
      },
      {
        scene: "holy-family",
        text: "Maria, José e o menino Jesus ficaram juntinhos, cheios de amor. Foi assim que Deus veio ao mundo como um bebê, por amor a nós.",
      },
    ],
    prayer:
      "Feliz Natal, Jesus! Obrigado por vir ao mundo por amor a mim. Amém.",
  },

  {
    id: "tempestade",
    title: "Jesus Acalma a Tempestade",
    subtitle: "Com Jesus não precisamos ter medo",
    reference: "Marcos 4",
    color: "#3aa0a0",
    emoji: "⛵",
    pages: [
      {
        scene: "boat-calm",
        text: "Jesus e seus amigos entraram num barquinho para atravessar o lago. O dia estava tranquilo e Jesus estava cansado, então foi dormir.",
      },
      {
        scene: "storm",
        text: "De repente, um vento muito forte começou a soprar. As ondas ficaram enormes e balançavam o barco. Os amigos ficaram com muito medo!",
      },
      {
        scene: "wake-jesus",
        text: "Eles acordaram Jesus e disseram: “Socorro! Vamos afundar!” Jesus levantou, calminho, sem nenhum medo no coração.",
      },
      {
        scene: "calm-storm",
        text: "Jesus olhou para o vento e para o mar e disse: “Silêncio! Acalme-se!” Na mesma hora, tudo ficou calmo e quietinho.",
      },
      {
        scene: "peace",
        text: "Os amigos ficaram admirados. Jesus mostrou que Ele cuida de nós. Quando temos medo, podemos chamar Jesus, e Ele traz paz ao coração.",
      },
    ],
    prayer:
      "Jesus, quando eu tiver medo, me lembro que Você está comigo e me dá paz. Amém.",
  },

  {
    id: "samaritano",
    title: "O Bom Samaritano",
    subtitle: "Amar o próximo com o coração",
    reference: "Lucas 10",
    color: "#5aa84f",
    emoji: "❤️",
    pages: [
      {
        scene: "traveler",
        text: "Jesus contou uma história: um homem viajava por uma estrada quando foi atacado por ladrões. Ele ficou machucado e caído no caminho.",
      },
      {
        scene: "passing-by",
        text: "Duas pessoas passaram e viram o homem, mas não pararam para ajudar. Elas seguiram em frente, com pressa, sem olhar para ele.",
      },
      {
        scene: "samaritan-helps",
        text: "Então chegou um samaritano de coração bom. Ele parou, cuidou dos machucados do homem e o ajudou com muito carinho.",
      },
      {
        scene: "inn",
        text: "O samaritano levou o homem para um lugar seguro para descansar e pagou para cuidarem bem dele até ficar curado.",
      },
      {
        scene: "love-neighbor",
        text: "Jesus ensinou: seja como o bom samaritano. Ajude quem precisa, com bondade. Amar o próximo é amar a Deus!",
      },
    ],
    prayer:
      "Jesus, me ajude a ter um coração bondoso e a ajudar quem precisa. Amém.",
  },

  {
    id: "ovelha",
    title: "A Ovelha Perdida",
    subtitle: "Jesus procura cada um de nós",
    reference: "Lucas 15",
    color: "#d98cae",
    emoji: "🐑",
    pages: [
      {
        scene: "flock",
        text: "Um pastor tinha cem ovelhinhas. Ele conhecia cada uma pelo nome e cuidava delas com muito amor, todos os dias.",
      },
      {
        scene: "lost-sheep",
        text: "Um dia, uma ovelhinha se perdeu. Ela foi longe, longe, e ficou sozinha, com medo, no meio do escuro.",
      },
      {
        scene: "searching",
        text: "O pastor deixou as outras noventa e nove seguras e saiu procurando a ovelhinha perdida por montes e vales, sem desistir.",
      },
      {
        scene: "found-sheep",
        text: "Quando a encontrou, ficou muito feliz! Colocou a ovelhinha nos ombros e voltou para casa cantando de alegria.",
      },
      {
        scene: "celebration",
        text: "Jesus é como esse pastor. Ele ama cada um de nós e nunca desiste de nos procurar. Você é muito, muito precioso para Deus!",
      },
    ],
    prayer:
      "Obrigado, Jesus, por me amar tanto e nunca desistir de mim. Amém.",
  },

  {
    id: "jonas",
    title: "Jonas e o Grande Peixe",
    subtitle: "Deus dá uma segunda chance",
    reference: "Jonas 1–3",
    color: "#4b6fb5",
    emoji: "🐋",
    pages: [
      {
        scene: "jonah-call",
        text: "Deus pediu a Jonas: “Vá até a cidade de Nínive e fale do meu amor.” Mas Jonas não quis obedecer e fugiu para o lado contrário.",
      },
      {
        scene: "jonah-ship",
        text: "Jonas entrou num navio para fugir. Mas veio uma tempestade tão forte que o navio quase virava no meio do mar.",
      },
      {
        scene: "jonah-sea",
        text: "Jonas caiu no mar. E então aconteceu algo incrível: um peixe enorme apareceu e engoliu Jonas inteirinho!",
      },
      {
        scene: "jonah-belly",
        text: "Dentro da barriga do peixe, Jonas rezou: “Desculpa, Deus. Agora eu vou obedecer.” Ele ficou lá por três dias.",
      },
      {
        scene: "jonah-free",
        text: "O peixe levou Jonas até a praia e o soltou na areia. Deus deu a ele uma nova chance de fazer o certo.",
      },
      {
        scene: "nineveh",
        text: "Jonas foi até Nínive e contou do amor de Deus. Todos escutaram e ficaram felizes. Deus sempre nos dá uma nova chance!",
      },
    ],
    prayer:
      "Deus, obrigado pelas novas chances. Me ajude a obedecer com alegria. Amém.",
  },

  {
    id: "criancas",
    title: "Jesus e as Crianças",
    subtitle: "Deixem as crianças virem a mim",
    reference: "Mateus 19",
    color: "#e0a93f",
    emoji: "🤗",
    pages: [
      {
        scene: "children-run",
        text: "Um dia, muitas crianças correram para ficar perto de Jesus. Elas queriam abraçá-lo, ouvir suas histórias e ficar ao seu lado.",
      },
      {
        scene: "disciples-stop",
        text: "Os amigos de Jesus tentaram parar as crianças: “Jesus está ocupado!” Mas será que Jesus estava ocupado demais para elas?",
      },
      {
        scene: "let-children",
        text: "Jesus sorriu e disse: “Deixem as crianças virem a mim! Não impeçam!” Ele amava muito, muito cada uma delas.",
      },
      {
        scene: "jesus-blessing",
        text: "Jesus abraçou as crianças, colocou as mãos sobre elas e as abençoou. Ele disse que o Reino de Deus é para quem tem coração de criança.",
      },
      {
        scene: "loved",
        text: "Isso quer dizer que Jesus também ama você! Você pode falar com Ele a qualquer hora. Jesus está sempre feliz em te ver.",
      },
    ],
    prayer:
      "Jesus, que alegria saber que Você me ama! Quero ficar sempre pertinho de Você. Amém.",
  },
  {
    id: "pascoa",
    title: "A Páscoa de Jesus",
    subtitle: "Jesus está vivo! A alegria da Ressurreição",
    reference: "Lucas 24",
    color: "#d4663f",
    emoji: "🌅",
    pages: [
      { scene: "last-supper", text: "Antes da Páscoa, Jesus ceou com os seus amigos. Ele partiu o pão e disse: “Façam isto em memória de mim.” Foi um momento de muito amor." },
      { scene: "cross", text: "Por amor a todos nós, Jesus entregou a sua vida na cruz. Naquele dia os seus amigos ficaram com o coração muito triste." },
      { scene: "tomb", text: "O corpo de Jesus foi colocado num túmulo cavado na rocha. Uma pedra bem grande foi posta na entrada, e tudo ficou em silêncio." },
      { scene: "stone-rolled", text: "No domingo bem cedinho, as mulheres foram até o túmulo. Que surpresa! A pedra enorme estava rolada para o lado." },
      { scene: "angel-tomb", text: "Um anjo brilhante disse a elas: “Não tenham medo! Jesus não está aqui. Ele ressuscitou, como tinha prometido!”" },
      { scene: "risen", text: "Jesus estava vivo! Ele apareceu aos seus amigos, cheio de luz e de alegria. A morte não venceu: Jesus venceu a morte!" },
    ],
    prayer: "Jesus, Você está vivo e me ama! Obrigado por vencer a morte por mim. Aleluia! Amém.",
  },

  {
    id: "moises",
    title: "Moisés e o Mar Vermelho",
    subtitle: "Deus abre caminho onde não parece ter",
    reference: "Êxodo 14",
    color: "#2f7fb5",
    emoji: "🌊",
    pages: [
      { scene: "slaves", text: "O povo de Deus vivia no Egito trabalhando demais e sofrendo muito. Eles pediram ajuda a Deus com o coração apertado." },
      { scene: "moses-call", text: "Deus escolheu Moisés e disse: “Leve o meu povo para a liberdade.” Moisés obedeceu e foi falar com o faraó." },
      { scene: "leaving-egypt", text: "Enfim o povo saiu do Egito! Todos caminharam felizes, levando as suas coisas, rumo à terra prometida." },
      { scene: "sea-blocked", text: "Mas na frente apareceu o Mar Vermelho e, atrás, vinham os soldados do faraó. O povo ficou com muito medo." },
      { scene: "sea-opens", text: "Moisés ergueu o seu cajado e Deus abriu o mar! As águas se separaram em duas paredes, deixando um caminho sequinho no meio." },
      { scene: "crossing", text: "O povo atravessou em segurança e cantou de alegria. Deus abre caminho até quando tudo parece impossível!" },
    ],
    prayer: "Deus, obrigado por abrir caminhos na minha vida. Eu confio em Você. Amém.",
  },

  {
    id: "paes",
    title: "A Multiplicação dos Pães",
    subtitle: "Com Jesus, o pouco vira muito",
    reference: "João 6",
    color: "#c98b2e",
    emoji: "🍞",
    pages: [
      { scene: "crowd", text: "Uma multidão enorme seguiu Jesus para ouvir as suas palavras. Já era tarde e todos estavam com muita fome." },
      { scene: "no-food", text: "Os amigos de Jesus disseram: “Não temos comida para tanta gente!” Havia mais de cinco mil pessoas ali." },
      { scene: "boy-lunch", text: "Então um menino ofereceu o que tinha: cinco pãezinhos e dois peixinhos. Era pouquinho, mas ele deu de todo o coração." },
      { scene: "blessing-bread", text: "Jesus pegou os pães, olhou para o céu e agradeceu a Deus. Depois começou a repartir entre todos." },
      { scene: "multiplied", text: "E aconteceu o milagre: a comida não acabava! Todos comeram até ficarem bem satisfeitos." },
      { scene: "leftovers", text: "Ainda sobraram doze cestos cheios! Quando repartimos com amor, Jesus faz o pouco virar muito." },
    ],
    prayer: "Jesus, me ensine a repartir com alegria aquilo que eu tenho. Amém.",
  },

  {
    id: "prodigo",
    title: "O Filho Pródigo",
    subtitle: "O abraço do Pai que sempre espera",
    reference: "Lucas 15",
    color: "#9b5fa8",
    emoji: "🏡",
    pages: [
      { scene: "leaving-home", text: "Um pai tinha dois filhos. O mais novo pediu a sua parte da herança e foi embora para uma terra bem distante." },
      { scene: "wasting", text: "Longe de casa, ele gastou tudo o que tinha em festas. Logo ficou sem nada, sozinho e com fome." },
      { scene: "pigs", text: "Para sobreviver, foi cuidar de porcos. Estava com tanta fome que até a comida dos porcos parecia boa." },
      { scene: "remember", text: "Então ele pensou: “Na casa do meu pai até os empregados comem bem. Vou voltar e pedir perdão.”" },
      { scene: "father-runs", text: "De longe, o pai o viu chegando. Cheio de amor, correu até ele, abraçou e beijou o seu filho." },
      { scene: "party", text: "O pai fez uma grande festa: “Meu filho voltou!” Assim é Deus: Ele sempre nos espera de braços abertos." },
    ],
    prayer: "Pai do céu, obrigado por me perdoar e me esperar sempre com amor. Amém.",
  },

  {
    id: "cana",
    title: "As Bodas de Caná",
    subtitle: "O primeiro milagre de Jesus",
    reference: "João 2",
    color: "#b5456f",
    emoji: "🫙",
    pages: [
      { scene: "wedding", text: "Havia uma festa de casamento na cidade de Caná. Jesus, Maria e os amigos de Jesus foram convidados." },
      { scene: "no-wine", text: "No meio da festa aconteceu um problema: o vinho acabou! Os noivos ficaram sem jeito e preocupados." },
      { scene: "mary-asks", text: "Maria percebeu e falou com Jesus. Depois disse aos serventes: “Façam tudo o que Ele mandar.”" },
      { scene: "jars", text: "Jesus mandou encher seis talhas bem grandes com água. Os serventes encheram todas até a boca." },
      { scene: "water-wine", text: "Quando serviram, a água tinha virado vinho! E do melhor que havia na festa inteira." },
      { scene: "cana-joy", text: "Foi o primeiro milagre de Jesus. Maria sempre nos leva até Ele, que cuida até das nossas alegrias." },
    ],
    prayer: "Jesus, obrigado por cuidar de mim. Maria, me leve sempre para pertinho do seu Filho. Amém.",
  },

  {
    id: "jose",
    title: "José do Egito",
    subtitle: "Deus transforma o mal em bem",
    reference: "Gênesis 37–45",
    color: "#3f9b7a",
    emoji: "🧥",
    pages: [
      { scene: "coat", text: "José era muito amado pelo seu pai, que lhe deu uma túnica bonita e bem colorida. Seus irmãos ficaram com inveja." },
      { scene: "sold", text: "Os irmãos decidiram se livrar de José e o venderam a mercadores que iam para o Egito. Ele ficou bem longe de casa." },
      { scene: "prison", text: "No Egito, José foi acusado injustamente e foi parar na prisão. Mesmo assim, continuou confiando em Deus." },
      { scene: "dreams", text: "Deus deu a José o dom de explicar sonhos. O faraó sonhou com vacas e espigas, e só José soube explicar." },
      { scene: "governor", text: "José avisou: “Virão sete anos de fartura e sete de fome.” O faraó o tornou governador para guardar alimento." },
      { scene: "forgiveness", text: "Na época da fome, os irmãos foram ao Egito pedir comida. José os perdoou com um abraço: Deus transformou tudo em bem!" },
    ],
    prayer: "Deus, me ajude a perdoar como José e a confiar que Você cuida de tudo. Amém.",
  },

  {
    id: "zaqueu",
    title: "Zaqueu",
    subtitle: "Jesus quer entrar na sua casa",
    reference: "Lucas 19",
    color: "#5a8f3f",
    emoji: "🌳",
    pages: [
      { scene: "short-man", text: "Zaqueu era um homem bem baixinho e cobrador de impostos. Ninguém gostava dele, porque cobrava demais das pessoas." },
      { scene: "cant-see", text: "Um dia Jesus passou pela cidade. Zaqueu queria muito vê-lo, mas a multidão era grande e ele não enxergava nada." },
      { scene: "climbs", text: "Então ele teve uma ideia: subiu numa árvore bem alta! De lá de cima dava para ver Jesus chegando." },
      { scene: "jesus-calls", text: "Jesus parou debaixo da árvore, olhou para cima e disse: “Zaqueu, desça depressa! Hoje vou ficar na sua casa.”" },
      { scene: "change", text: "Zaqueu desceu cheio de alegria e prometeu: “Vou devolver tudo o que cobrei a mais e dar metade aos pobres!”" },
      { scene: "salvation", text: "Jesus sorriu e disse: “Hoje a salvação entrou nesta casa.” Jesus ama todos e transforma os corações." },
    ],
    prayer: "Jesus, entre na minha casa e no meu coração, como entrou na casa de Zaqueu. Amém.",
  },

  {
    id: "abraao",
    title: "Abraão e a Promessa",
    subtitle: "Confiar mesmo sem entender",
    reference: "Gênesis 12–21",
    color: "#6b6fd6",
    emoji: "✨",
    pages: [
      { scene: "call", text: "Deus chamou Abraão e disse: “Saia da sua terra e vá para o lugar que eu vou lhe mostrar.” Abraão confiou e partiu." },
      { scene: "journey-abraao", text: "Abraão viajou com Sara, a sua esposa, e com os seus rebanhos. Eles não sabiam o caminho, mas sabiam que Deus ia à frente." },
      { scene: "stars-promise", text: "Numa noite, Deus mostrou o céu e disse: “A sua família será tão numerosa quanto as estrelas.” Abraão acreditou." },
      { scene: "waiting", text: "Mas os anos passavam e eles não tinham filhos. Abraão e Sara já estavam bem velhinhos, e continuaram esperando." },
      { scene: "isaac", text: "E a promessa se cumpriu! Nasceu Isaac, e Sara riu de tanta felicidade. Deus sempre cumpre o que promete." },
      { scene: "father-faith", text: "Abraão ficou conhecido como o pai da fé, porque confiou em Deus mesmo sem entender tudo." },
    ],
    prayer: "Deus, me ajude a confiar em Você como Abraão, mesmo quando eu não entendo. Amém.",
  },

  {
    id: "sansao",
    title: "Sansão",
    subtitle: "A força verdadeira vem de Deus",
    reference: "Juízes 13–16",
    color: "#c25f2e",
    emoji: "💪",
    pages: [
      { scene: "gift", text: "Sansão nasceu com um dom especial de Deus: uma força enorme! O sinal da sua promessa eram os cabelos, que ele nunca cortava." },
      { scene: "strong", text: "Com a força que vinha de Deus, Sansão defendeu o seu povo de muitos perigos. Ninguém conseguia vencê-lo." },
      { scene: "secret", text: "Mas Sansão contou o seu segredo a Dalila, que o entregou aos inimigos. Cortaram os seus cabelos e ele perdeu a força." },
      { scene: "captured", text: "Sansão foi preso e ficou muito triste. Ele entendeu que a força verdadeira vinha de Deus, e não dele mesmo." },
      { scene: "prayer-strength", text: "Então Sansão rezou do fundo do coração: “Senhor, lembre-se de mim e me dê forças mais uma vez.”" },
      { scene: "restored", text: "Deus ouviu a sua oração e devolveu a sua força. Sansão aprendeu que tudo de bom em nós vem de Deus." },
    ],
    prayer: "Deus, obrigado pelos dons que me deu. Que eu os use sempre para o bem. Amém.",
  },

  {
    id: "ester",
    title: "A Rainha Ester",
    subtitle: "Coragem para defender quem amamos",
    reference: "Ester 4–7",
    color: "#b5457f",
    emoji: "👑",
    pages: [
      { scene: "orphan", text: "Ester era uma menina órfã do povo de Deus, criada pelo seu primo Mardoqueu, que a amava muito." },
      { scene: "queen", text: "O rei escolheu Ester para ser a rainha! Ela foi morar no palácio, mas guardou segredo sobre o seu povo." },
      { scene: "danger", text: "Um homem mau chamado Hamã fez um plano terrível para destruir todo o povo de Ester." },
      { scene: "courage", text: "Mardoqueu avisou Ester: “Talvez você tenha se tornado rainha justamente para salvar o seu povo!”" },
      { scene: "fasting", text: "Ester rezou e jejuou durante três dias. Depois foi falar com o rei, mesmo sabendo que era perigoso." },
      { scene: "saved", text: "O rei ouviu Ester e salvou o povo dela! A coragem de uma menina mudou a história." },
    ],
    prayer: "Deus, me dê coragem para fazer o certo e defender quem precisa. Amém.",
  },

  {
    id: "pentecostes",
    title: "Pentecostes",
    subtitle: "O Espírito Santo chega com fogo",
    reference: "Atos 2",
    color: "#d4762e",
    emoji: "🔥",
    pages: [
      { scene: "waiting-upper", text: "Depois que Jesus subiu ao céu, os apóstolos ficaram reunidos com Maria, rezando e esperando a promessa de Jesus." },
      { scene: "wind", text: "De repente veio um som do céu, como um vento muito forte, que encheu a casa inteira onde eles estavam." },
      { scene: "fire", text: "E apareceram pequenas línguas de fogo que pousaram sobre a cabeça de cada um deles. Era o Espírito Santo!" },
      { scene: "languages", text: "Cheios do Espírito Santo, eles começaram a falar em várias línguas. Todos na cidade conseguiam entender!" },
      { scene: "preaching", text: "Pedro falou com muita coragem sobre Jesus. Naquele dia, três mil pessoas acreditaram e foram batizadas." },
      { scene: "church", text: "Assim nasceu a Igreja! O Espírito Santo continua nos dando coragem, amor e alegria até hoje." },
    ],
    prayer: "Espírito Santo, venha ao meu coração e me dê coragem e alegria. Amém.",
  },
];

if (typeof module !== "undefined") {
  module.exports = STORIES;
}
