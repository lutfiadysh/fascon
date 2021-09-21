module.exports = async function App(context) {
 
    if (context.event.text == 'hi') {
      return SayHi;
   }
};

async function SayHi(context) {
  await context.sendText('Halo apakabar');
}
