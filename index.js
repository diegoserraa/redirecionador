const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Aplicação funcionando!');
});

app.get('/redirect', (req, res) => {
  const ua = (req.headers['user-agent'] || '').toLowerCase();

  const isAndroid = /android|miuibrowser|xiaomi/.test(ua);
  const isIOS = /iphone|ipad|ipod/.test(ua);

  if (isAndroid) {
    return res.redirect('https://play.google.com/store/apps/details?id=xpss.pralapraka');
  } else if (isIOS) {
    return res.redirect('https://apps.apple.com/br/app/pra-la-pra-ka-passageiros/id6745391462');
  } else {
    // Fallback para navegadores que não passam corretamente o user-agent
    return res.send(`
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Redirecionamento</title>
          <style>
            body { font-family: sans-serif; padding: 20px; text-align: center; }
            a { display: block; margin: 15px 0; font-size: 18px; }
          </style>
        </head>
        <body>
          <h2>Sistema não reconhecido</h2>
          <p>Toque no botão correspondente ao seu celular:</p>
          <a href="https://play.google.com/store/apps/details?id=xpss.pralapraka">👉 Android</a>
          <a href="https://apps.apple.com/br/app/pra-la-pra-ka-passageiros/id6745391462">🍎 iOS (iPhone)</a>
        </body>
      </html>
    `);
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});