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
  'my-action': (context, cb) => {
    context['name'] = 'Julien';
    cb(context);
  },
};

const client = new Wit('OMUY3TPLUFUZEZVDV3JZ33SWS4U7ZJC7', actions);
client.interactive();