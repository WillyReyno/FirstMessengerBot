module.exports = {
  Logger: require('./lib/logger.js').Logger,
  logLevels: require('./lib/logger.js').logLevels,
  Wit: require('./lib/wit.js').Wit,
}

app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === "lets_verify_my_token") {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});
