'use strict';
const Wit = require('node-wit').Wit;

const actions = {
  say: (sessionId, msg, cb) => {
    console.log(msg);
    cb();
  },
  merge: (context, entities, cb) => {
    cb(context);
  },
  error: (sessionId, msg) => {
    console.log('Oops, I don\'t know what to do.');
  },
  'find-pokemon': (context, cb) => {
    // Call the pokemon api
    context['name'] = 'Julien';
    cb(context);
  },
};

const client = new Wit('YOUR_TOKEN', actions);
client.interactive();