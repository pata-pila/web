var bodyParser = require('body-parser')
const url = require('url');
var express = require('express');
var app = express();
const https = require('https');

app.use(bodyParser.json({
  type: "*/*"
}));


app.post('/', function (req, resp) {
  body = req.body;

  https.get('https://pata-pila-web.prismic.io/api/v2', (res) => {
    var data1 = '';

    res.on('data', d => {
      data1 += d;
    });

    res.on('end', () => {
      var data = JSON.parse(data1);
      var prismicRef = data.refs[0].ref;
      
      const requestUrl = url.parse(url.format({
        protocol: 'https',
        hostname: 'pata-pila-web.prismic.io',
        pathname: '/graphql',
        query: {
          query: body.query,
          operationName: 'IntrospectionQuery'
        }
      }));
    
      https.get(requestUrl.href, { headers: { 'Prismic-ref': prismicRef } }, (res) => {
        var data2 = '';
        
        res.on('data', d => {
          data2 += d;
        });

        res.on('end', () => {
          resp.set('Content-Type', 'application/json')
          resp.send(data2);
          server.close();
        });
      });
    });
  });
});

const server = app.listen(3000, function () { });



