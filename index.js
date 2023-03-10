// Code your solutions in this file
const names = []
const event = "suprise"




const writeCards = (arr,event) => {
    const messages = []
    for(let i = 0; i < arr.length;i++) {
        
           const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
          
    }
   
            return messages;
}

let number = 0

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
