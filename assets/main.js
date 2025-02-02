const palavra1 = ['Heróis', 'Geração', 'Grupo', 'Exército', 'Conexão', 'Gerreiros', 'Jovens', 'Coluna', 'Herdeiros', 'Filhos', 'Unidos', 'Escolhidos', 'Pescadores', 'Reflexo', 'Raízes', 'Fronteiras', 'Redenção', 'Chamados', 'Discípulos', 'Soldados', 'Guardiões', 'Vozes', 'Remanescentes', 'Semeadores', 'Eco(s)', 'Testemunhas', 'Embaixadores', 'Resgatados', 'Despertos', 'Vencedores', 'Legado', 'Manancial'];
const palavra2 = ['do/pelo Senhor', 'Valente(s)', 'de/em Cristo', 'da/pela Promessa', 'da/na Adoração', 'da/pela Fé', 'da/pela Graça', 'Eleita(os)', 'na/da Verdade', 'da/pela Luz', 'da/pela Palavra', 'do/pelo Reino', 'Valoroso(a/os)', 'da/pela Glória', 'do Propósito', 'Santa(os)', 'da/pela Vitória', 'da Eternidade', 'no/do Poder', 'de Vida', 'do Futuro', 'da/pela Paz', 'de Valor', 'na/da Rocha', 'na/da Aliança'];
const palavrainteira = ['Jovens de Valor', 'Resgate Jovem', 'Aviva', 'Sal da Terra', 'Missão Juventude', 'Grupo Ágape', 'Deus é Luz', 'Gideões', 'Glória Jovem', 'Adoradores da Luz', 'Sementes de Cristo', 'Arca da Aliança', 'Arca Jovem', 'Conexão Jovem', 'Vanguarda Jovem', 'Luz do Caminho', 'Chamas da Fé', 'Firme Fundamento', 'Herança Celestial', 'Despertar Espiritual', 'Ilumina Jovem', 'Sacerdócio Real', 'Primeiro Amor', 'Águas Vivas', 'Habitantes do Céu', 'Prontos para a Colheita', 'Geração Transformada', 'Coluna de Fogo', 'Guerreiros do Cordeiro'];
const versiculos = {
    'Unidos da/pela Graça': 'Efésios 2.5: Estando nós ainda mortos em nossas ofensas, nos vivificou juntamente com Cristo (pela graça sois salvos).',
    'Unidos da/pela Fé': 'Efésios 4:5: Há um só Senhor, uma só fé, um só batismo.',
    'Gideões': 'Juízes 6.12: Então o anjo do Senhor lhe apareceu e lhe disse: O Senhor é contigo, homem valente.',
    'Valente(s)': 'Juízes 6.12: Então o anjo do Senhor lhe apareceu e lhe disse: O Senhor é contigo, homem valente.',
    'Aviva': 'Habacuque 3:2: Ouvi, Senhor, a tua palavra e temi; aviva, ó Senhor, a tua obra no meio dos anos, no meio dos anos a notifica; na ira lembra-te da misericórdia.',
    'Sal da Terra': '“Mateus 5:13: “Vós sois o sal da terra; e se o sal for insípido, com que se há de salgar? Para nada mais presta senão para se lançar fora, e ser pisado pelos homens.”',
    'Deus é Luz': '1 João 1:5: “Ora, a mensagem que, da parte dele, temos ouvido e vos anunciamos é esta: que Deus é luz, e não há nele treva nenhuma.”',
    'Arca da Aliança': 'Hebreus 9:4: “Que tinha o incensário de ouro, e a arca da aliança, coberta de ouro toda em redor; em que estava um vaso de ouro, que continha o maná, e a vara de Arão, que tinha florescido, e as tábuas da aliança.”',
    'Herdeiros da/pela Promessa': 'Hb 6.17: “Por isso, querendo Deus mostrar mais abundantemente a imutabilidade do seu conselho aos herdeiros da promessa, se interpôs com juramento.”',
    'Geração Eleita(os)': '1 Pedro 2.9: “Mas vòs sois a geração eleita, o sacerdòcio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz.”',
    'Guerreiros do Cordeiro': 'Ap. 17.14: “”',
    'Coluna de Fogo': 'Ex. 13.21: “Durante o dia o Senhor ia adiante deles, numa coluna de nuvem, para guiá-los no caminho, e de noite, numa coluna de fogo, para iluminá-los, e assim podiam caminhar de dia e de noite.”',
    'Arca Jovem': 'Gn. 6.14: “Você, porém, fará uma arca de madeira de cipreste; divida-a em compartimentos e revista-a de piche por dentro e por fora.”',
    'Luz do Caminho': 'João 8:12: “Falou-lhes, pois, Jesus outra vez, dizendo: Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida.”',
    'Firme Fundamento': 'Mateus 7:24-25: “Quem ouve minhas palavras e as pratica é tão sábio como a pessoa que constrói sua casa sobre uma rocha firme.”',
    'Sacerdócio Real': '1 Pedro 2:9: “Mas vòs sois a geração eleita, o sacerdòcio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz.”',
    'Prontos para a Colheita': 'Mateus 9:37-38: “Então disse aos seus discípulos: "A seara é grande, mas os trabalhadores são poucos. Peçam, pois, ao Senhor da seara que envie trabalhadores para a sua seara".”'
};

// Função para gerar um nome
const gerarNome = () => {
    const aleatorio = Math.random();
    let nomeGerado;
    let versiculoAssociado = '';

    if (aleatorio < 0.5) {
        // Gera um nome combinando palavra1 e palavra2
        const palavra1Escolhida = palavra1[Math.floor(Math.random() * palavra1.length)];
        const palavra2Escolhida = palavra2[Math.floor(Math.random() * palavra2.length)];
        nomeGerado = `${palavra1Escolhida} ${palavra2Escolhida}`;
    } else {
        // Escolhe um nome da lista de nomes inteiros
        nomeGerado = palavrainteira[Math.floor(Math.random() * palavrainteira.length)];
    }

    // Verifica se o nome gerado já possui um versículo associado
    if (versiculos[nomeGerado]) {
        versiculoAssociado = versiculos[nomeGerado];
    }

    // Exibe o nome gerado no elemento com a classe "nome"
    document.querySelector('.nome').textContent = nomeGerado;

    // Exibe o versículo caso exista, ou limpa o campo se não houver
    document.querySelector('.versiculo').textContent = versiculoAssociado ? `Referência bíblica: ${versiculoAssociado}` : '';
};

// Adiciona o evento de escuta para o espaço
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault(); // Evita que a página role para baixo ao pressionar espaço
        gerarNome();
    }
});


function copiar() {
  // Encontrar o parágrafo com a classe 'nome' e pegar o conteúdo do span dentro dele
  const texto = document.querySelector('.nome').textContent;

  // Criar um elemento temporário para copiar o texto para a área de transferência
  const tempInput = document.createElement('input');
  tempInput.value = texto;
  document.body.appendChild(tempInput);

  // Selecionar o texto e copiá-lo
  tempInput.select();
  document.execCommand('copy');

  // Remover o elemento temporário
  document.body.removeChild(tempInput);

  // Adicionar a classe 'show' ao elemento .copiado para mostrar que foi copiado
  const copiadoElement = document.querySelector('.copiado');
  copiadoElement.classList.add('show');

  // Remover a classe 'show' após 3 segundos
  setTimeout(() => {
    copiadoElement.classList.remove('show');
  }, 3000);
}
