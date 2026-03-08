export const MAILS = [
  {
    id: 1,
    from: 'Colas 😘',
    fromEmail: 'colas@valentinesmail.com',
    to: 'filipa@valentinesmail.com',
    subject: 'Convite para o Dia dos Namorados',
    body: `
Venho por este meio solicitar a companhia da minha princesa para um date um bocadinho mais especial.

Como a própria deve saber, no próximo dia 14 de fevereiro é o Dia dos Namorados, e apesar de ser um dia conhecido por se celebrar o amor, não posso deixar de clarificar que para mim todos os dias são um bom dia para te amar.

Contudo, queria aproveitar o facto de a data ser mais emblemática para passar o dia contigo, e fazer-te sentir ainda mais especial do que já tento fazer sentir diarimante.

Os detalhes do nosso dia estão especificados no convite em anexo.

Aceitas ser a minha valentine? 💖
    `,
    date: '14h00',
    read: false,
    starred: true,
    folder: 'inbox',
  },
  {
    id: 2,
    from: 'CTT Expresso',
    fromEmail: 'expresso@ctt.pt',
    to: 'filipa@valentinesmail.com',
    subject: 'A tua encomenda foi entregue!',
    body: 'A tua encomenda de ?????? foi entregue às 09h37 do dia 07 de fevereiro.',
    date: '09h37',
    read: true,
    starred: false,
    folder: 'inbox',
  },
  {
    id: 3,
    from: 'CTT Expresso',
    fromEmail: 'expresso@ctt.pt',
    to: 'filipa@valentinesmail.com',
    subject: 'A tua encomenda vai ser entregue amanhã!',
    body: `
A tua encomenda de ?????? vai ser entregue entre as 09h e as 12h amanhã. dia 07 de fevereiro.

Utiliza o código de rastreio D84379836 para acompanhar a entrega.

Utiliza o PIN 4567 para confirmar a entrega.
    `,
    date: '06 fev',
    read: true,
    starred: true,
    folder: 'inbox',
  },
  {
    id: 4,
    from: 'The Fork',
    fromEmail: 'thefork@mail.com',
    to: 'filipa@valentinesmail.com',
    subject: 'A tua reserva para dia 14 de fevereiro!',
    body: `
Olá Filipa,

A tua reserva para o dia 14 de fevereiro no restaurante "???????" foi confirmada com sucesso!

Detalhes da reserva:
- Data: 14 de fevereiro
- Hora: 20h00
- Número de pessoas: 2
- Local: ????????
- Código de reserva: ????
    `,
    date: '02 fev',
    read: true,
    starred: true,
    folder: 'inbox',
  },
  {
    id: 5,
    from: 'Netflix',
    fromEmail: 'netflix@mail.com',
    to: 'filipa@valentinesmail.com',
    subject: 'Nova temporada de Bridgerton disponível!',
    body: 'A tão aguardada quarta temporada de Bridgerton já está disponível na Netflix!',
    date: '29 jan',
    read: true,
    starred: true,
    folder: 'inbox',
  },
  // SENT MAILS
  {
    id: 6,
    from: 'Me',
    fromEmail: 'filipa@valentinesmail.com',
    to: 'colas@valentinesmail.com',
    subject: 'Jogo de Padel',
    body: `
Hoje foste um estúpido no Padel! Não sei o que te deu, mas espero que tenhas aprendido a lição.

Devias ter sido mais paciente comigo. Foi a primeira vez que joguei, e tu devias ter percebido isso!`,
    date: '17 jan',
    read: true,
    starred: false,
    folder: 'sent',
  },
];
