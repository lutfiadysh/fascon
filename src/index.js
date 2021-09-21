module.exports = async function App(context) {
 
    if (context.event.text == 'hi') {
      return SayHi;
   }
};

async function SayHi(context) {
  await context.sendText(askTemplate);
}

const askTemplate = (text) => {
  return {
      "attachment":{
          "type":"template",
          "payload":{
              "template_type":"button",
              "text": text,
              "buttons":[
                  {
                      "type":"postback",
                      "title":"Cats",
                      "payload":"CAT_PICS"
                  },
                  {
                      "type":"postback",
                      "title":"Dogs",
                      "payload":"DOG_PICS"
                  }
              ]
          }
      }
  }
}
