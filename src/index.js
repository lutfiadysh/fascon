module.exports = async function App(context) {
 
    if (context.event.text == 'hi') {
      return SayHi;
   }
};

async function SayHi(context) {
  await context.sendButtonTemplate('Fascon Silahkan tekan tombol dibawah ini untuk melihat produk', [
    {
      type: 'web_url',
      url: 'https://petersapparel.parseapp.com',
      title: 'Mulai',
    },
    {
      type: 'postback',
      title: 'Start Chatting',
      payload: 'USER_DEFINED_PAYLOAD',
    },
  ]);
}
