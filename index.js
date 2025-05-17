const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Aplicação funcionando!');
});

app.get('/redirect', (req, res) => {
  const ua = req.headers['user-agent'];

  if (/android/i.test(ua)) {
    return res.redirect('https://play.google.com/store/apps/details?id=com.seuapp.android');
  } else if (/iphone|ipad|ipod/i.test(ua)) {
    return res.redirect('https://play.google.com/store/apps/details?id=xpss.pralapraka');
  } else {
    return res.send("Sistema não reconhecido. Apenas Android e iOS são suportados.");
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});