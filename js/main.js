window.addEventListener("load", () =>
{
    setupOpenLetter(document.querySelector(".initial-modal"));


    const pictures =
    {
        current: 0,
        src: ["/static/may0.jpg", "/static/may2.jpg"]
    }

    const titles = 
    {
        current: 0,
        src: ["Mayara", "Procurada"]
    };

    const subtitles =
    {
        current: 0,
        src: ["<p>ou Pedagoganda,<br>para os mais íntimos.</p>", "<p>Indígena perigosa...</p>"]
    };

    const right_content =
    {
        current: 0,
        src:
        [
            `<div class="r-card-title"><p>Uma pessoa especial</p></div>
            <dir class="text-body-justify">
                <p>
                    Hey! É dia dos namorados e não achei que deveria deixar a data passar sem, do meu jeito, falar um pouco sobre o quanto eu amo você. "Ah, Matheus, mas nós nem somos namorados!" Tá, e daí? Vai me impedir de dizer que te adoro? Eu sinceramente acho bem difícil que consiga.<br>
                    Sabe, minha ideia era fazer algo bem mais elaborado e bonitinho, mas um monte de coisa combinou de acontecer hoje e tomou boa parte do meu tempo. Mesmo assim, não queria deixar passar em branco e falar um pouquinho do que você significa pra <i>moi</i>.<br>
                    <br>
                    A primeira coisa que posso dizer é: <b>Você é muito importante para mim</b>. E digo isso em diversos aspectos. Seja em representar um porto seguro, seja como um símbolo do quanto consegui evoluir como gente ou pela quantidade de afetos que trocamos, que torna recorrente a sua memória nos meus pensamentos.<br>
                    <br>
                    Te conheci você num período bem conturbado e esquisito da minha vida.
                    Relaxa, que não é uma daquelas histórias de "mas você chegou e mudou tudo de repente", apesar de ter sido uma presença tão marcante que, inevitavelmente, precisei mudar algumas coisas para conseguir acompanhar. Mas não é centralmente sobre isso.
                    Assim, gostaria de poder escrever aqui o quanto valorizo você ter permanecido no meio de tanta bagunça e ainda me ajudado a tolerar boa parte disso, acompanhando e participando desse caminho, e o quanto isso foi importante pra mim.<br>
                    Eu fico feliz (e preocupado), que tenha visto na minha bobagem, nas piadinhas sem graça e, mesmo na estupidez, coisas legais.<br>
                    <br>
                    E sou bem grato à vida por ter sido você a pessoa a me aparecer.<br>
                    <br>
                    <b>Mas por quê?</b><br>
                    Eu sei que você definitivamente não fez essa pergunta, que é essencialmente retórica, mas aqui vão alguns motivos que me atraem tanto a você:<br>
                    
                    <div style="padding: 10px;margin: 5px 0px;background-color: rgb(207 192 192 / 20%);">
                    <b>1 -</b> Você é uma das pessoas mais doces já elaboradas nesse mundo, algo comparável a uma boa torta de limão.<br>
                    <b>2 -</b> Você é divertida, e foram pouquíssimos e pontuais os dias contigo em que não dei uma boa risada ou me diverti.<br>
                    <b>3 -</b> Eu admiro o quão esforçada e, ao mesmo tempo cuidadosa, você é.<br>
                    <b>4 -</b> Te acho bem gatinha e isso influencia a minha opinião sim.<br>
                    <b>5 -</b> Sua voz é uma das coisas mais gostosas que tem pra ouvir nesse mundo.<br>
                    <b>6 -</b> Você é cativante e consegue me deixar interessado nas coisas mais simples desse mundo.<br>
                    <b>7 -</b> Amo como cê lida com as crianças e os bichinhos, passa uma vibe muito boa.<br>
                    <b>8 -</b> Você é sincera e justa com o que pensa, o que é algo que eu valorizo.<br>
                    </div>
                    <br>

                    E ainda tem um monte de coisa mais, que se for ficar citando aqui não termino nunca esse programa!<br>
                    Mas vamos com calma, que você não é completamente perfeita não...<br>
                    Conforme podemos ver na próxima página!!!!!!<br>
                    (&leftarrow; clica na tua fotinho ao lado)
                    <br><br><br>


                </p>
            </dir>`,

            `<div class="r-card-title"><p>Ficha Criminal</p></div>
            <dir class="text-body-justify">
                <p>
                    <div style="padding: 10px;margin: 5px 0px;background-color: rgb(207 192 192 / 20%);">
                    <span class="criminal-field-name">Nome:</span> Mayara R. R. de Souza<br>
                    <span class="criminal-field-name">Idade:</span> 20 anos<br>
                    <span class="criminal-field-name">Altura:</span> 1,62m<br>
                    <span class="criminal-field-name">Cor favorita:</span> Amarelo (yellow, em inglês)<br>
                    <span class="criminal-field-name">Aniversário:</span> 30 de janeiro<br>
                    <span class="criminal-field-name">Cidade:</span> Macapá/AP<br>
                    </div><br>

                    <br><span style="font-size: 20px; font-weight: bold;">Histórico Criminal</span>

                    <br><br><div class="crime-list">
                        <span class="crime-data-nome">30 de janeiro de 2005 - APROPRIAÇÃO INDEVIDA DE DATA DE ANIVERSÁRIO</span>

                        <br><br>INFRAÇÃO GRAVE

                        <br><br>A refererida, por motivos não esclarecidos, tomou a liberdade de nascer no mesmo dia do denunciante JOÃO M. C. VIANA, que apresentou sua queixa às autoridades responsáveis no dia XX de XXXXXXXX de XXXX.

                        <br><br><b>Decisão judicial</b> - Caso ainda em julgamento, a promotoria do caso considera pena de multa no valor de R$MUITO DINHEIRO,00.
                    </div>

                    <br><br><div class="crime-list">
                        <span class="crime-data-nome">▓▓ de ▓▓▓▓▓▓▓▓▓ de  ▓▓▓▓ -  VOZ EXCESSIVAMENTE FOFA E GOSTOSA DE OUVIR</span>

                        <br><br>INFRAÇÃO LEVE

                        <br><br>Foram apresentadas provas materiais de que a acusada possui - e se utiliza de - uma voz excessivamente fofa, cativante e agradável de ouvir. Não foram apresentadas justificativas válidas referentes à motivação da criminosa, porém obteve perdão por maioria de votos do júri.

                        <br><br<b>Decisão judicial</b> - A criminosa foi absolvida.
                    </div>

                    <br><br><div class="crime-list">
                        <span class="crime-data-nome">▓▓ de ▓▓▓▓▓▓▓▓▓ de  ▓▓▓▓ - ROUBO/APROPRIAÇÃO MATERIAL DO CORAÇÃO DE UM TERCEIRO</span>

                        <br><br>INFRAÇÃO GRAVÍSSIMA

                        <br><br>O denunciante (estranhamente, o mesmo cara nos outros dois casos) acusa a referida como responsável pelo crime de roubar seu coraçãozinho diversas vezes durante seus períodos de interação. A listagem do material fornecido para a perícia menciona: "ser uma pessoa excessivamente interessante", "alto carisma e capacidade de empatia", "ter um papo agradável demais" e "irresponsabilidade com o próprio carinho exercido". Sinceramente, nada disso aí em cima é um crime, esse tribunal com certeza é parte de algum esquema de lavagem de dinheiro.

                        <br><br><b>Decisão judicial</b> - A réu atende ao julgamento em regime aberto.
                    </div>

                    <br><br><div class="crime-list">
                        <span class="crime-data-nome">▓▓ de ▓▓▓▓▓▓▓▓▓ de  ▓▓▓▓ - COXAS E QUADRIL EXCESSIVAMENTE ATRAENTES</span>

                        <br><br>INFRAÇÃO MÉDIA

                        <br><br>Crime flagrante. Não foi necessária a apresentação de provas aprofundadas no caso.

                        <br><br><b>Decisão judicial</b> - A acusada cumpriu em regime fechado a pena de EXIBIR IRRESTRITAMENTE E COM EXCLUSIVIDADE ESTE BELO PARZÃO DE PERNAS AI AI AI UI UI ao denunciante, como compensação.
                    </div>

                    <br><br>O restante do histórico no banco de dados parece ter sido corrompido...

                    <br><br>E o Furlan não toma nenhuma providência...
                    <br><br>


                </p>
            </dir>`
        ]
    };

    setupCardChanges(document.querySelector(".letter-l-card"), document.querySelector(".letter-r-card"), pictures, titles, subtitles, right_content);

});
