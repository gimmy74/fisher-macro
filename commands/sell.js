const Fisher = require('./src/Fisher.js');
const client = new Fisher();

client.sell(//"amount of fish to sell", // number in seconds to run script at)

client.on('Sold', selling => {
console.log(`Sold ${selling.amount} Fish. In channel ${selling.id}. Interval of ${selling.interval}.
`)
});
