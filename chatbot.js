// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|Bom dia|Boa tarde|Boa noite|oi|Oi|Olá|olá|ola|Ola|bom dia|boa tarde|boa noite)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from, 'Olá! 😊👋 ' + name.split(" ")[0] + '\n🤖 Sou o assistente virtual da Âncora Representação. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo👇:\n\n1 - Vendas\n2 - Financeiro\n3 - Garantia\n4 - Outras Perguntas\n5 - Sair'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos


    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🤖 Você vai ser direcionado para os nossos vendedores. \n\nVendedor Divino: +55 62 9393-1135\n\nVendedora Witória: Este whatsapp\n\n👆 Click nos números acima para entrar em contato.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Obrigado pelo contato. 😉');




    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🤖 Para tratar sobre: Boletos, Faturas, Notas Fiscais, Etc.\n\nVocê vai ser direcionado ao Financeiro Fabiane: +55 62 9945-1493\n\n👆 Click no número acima para entrar em contato.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🤖 Você vai ser direcionado para os nossos vendedores, para tratar sobre a garantia desejada. \n\nVendedor Divino: +55 62 9393-1135\n\nVendedora Witória: Este whatsapp\n\n👆 Click nos números acima para entrar em contato.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🤖 Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp.\nObrigado!');





    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🤖 Seu atendimento foi encerrado.\nObrigado pelo contato. 😊 ');


    }








});