const Fisher = require('./src/Fisher.js');
const client = new Fisher();

client.fish("4")

client.on('Fished', data => {
  
  console.log(`
Fishing on an interval of ${data.interval}. 
In channel ${data.id}.
`)
  
});




client.sell("all", 1800)

client.on('Sold', data => {
  
  console.log(`
Sold ${data.amount} Fish. 
In channel ${data.id}.
Interval of ${data.interval}.
`)
  
});
