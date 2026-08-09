const dns = require('dns').promises;

dns.resolveSrv('_mongodb._tcp.learning-backend.x9tdww8.mongodb.net')
  .then((records) => {
    console.log('SRV records:', records);
  })
  .catch((err) => {
    console.error('DNS error:', err);
  });