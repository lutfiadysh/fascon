module.exports = async function App(context) {
 
    if (context.event.text == 'hi' || context.event.text == 'Hi' || context.event.text == "hello" || context.event.text == "Hello") {
      return SayHi;
   }
};

async function SayHi(context) {
  await context.sendButtonTemplate('Fascon Silahkan tekan tombol dibawah ini untuk melihat produk', [
    {
      type: 'web_url',
      url: 'https://instagram.com',
      title: 'MULAI',
    },
    {
      type: 'postback',
      title: 'SUPPORTs',
      payload: 'USER_DEFINED_PAYLOAD',
    },
    {
      type: 'postback',
      title: 'SCAN QR CODE',
      payload: 'USER_DEFINED_PAYLOAD',
    },
  ]);

  await context.sendText('Hi!', {
    quickReplies: [
      {
        contentType: 'USER_ID',
      },
    ],
  });
}
