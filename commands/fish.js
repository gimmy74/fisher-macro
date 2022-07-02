const Fisher = require('./src/Fisher.js');
const client = new Fisher();

client.fish(// number from 3s - 10s to run command at)

client.on('Fished', fishing => {
  
  console.log(`
Fishing on an interval of ${fishing.interval}. 
In channel ${fishing.id}.
`)
  
});
