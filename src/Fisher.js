const Request = require('request');
const EventEmitter = require('events');


const link = require('../assets/links.js');

const Utils = require('../assets/dontTouch.js');


const prefix = process.env.prefix;
const token = process.env.token;
const id = process.env.id;
class Fisher extends EventEmitter {
  constructor() {
    super();
  };

  // Run Fish Command

  async fish(seconds) {

    const fishing = {
      interval: seconds + "s",
      id: id,
    }

    if (!seconds || seconds.toString().includes('-')) {
      throw new Error("Must Provide A Valid Number In Seconds To Run Script At")
    }

    if (seconds < 2.6 || seconds > 10) {
      throw new Error("Seconds Must Be Over The Bots Cooldown" + " " + `\(2.6s)` + " " + "Or Over The Limit" + " " + `\(10s).`)
    }

    setInterval(function() {
      Request.post(link.API + id + "/messages", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({ "content": prefix + "f" })
      }, function(err, res, body) {

      });

    }, seconds * 1000)
    this.emit('Fished', fishing)
  };
  //                   Sell Fish


  async sell(amount, seconds) {

    const selling = {
      interval: seconds + "s",
      amount: amount,
      id: id,
    }
    if (!amount || amount.toString().includes('-') || amount !== "all") {
      throw new Error("Must Provide A Valid Amount Of Fish To Sell")
    }



    if (!seconds || seconds.toString().includes('-')) {
      throw new Error("Must Provide A Valid Number In Seconds To Run Script At")
    }

    if (seconds < 10 || seconds > 6000) {
      throw new Error("Seconds Must Be Over The Bots Cooldown" + " " + `\(2.6s)` + " " + "Or Over The Limit" + " " + `\(10s).`)
    }



    setInterval(function() {
      Request.post(link.API + id + "/messages", {

        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.token
        },
        body: JSON.stringify({ "content": prefix + "s" + " " + amount })

      }, function(err, res, body) {

      });

    }, seconds * 1000)
    
    this.emit('Sold', selling)
    
  }


};
module.exports = Fisher
