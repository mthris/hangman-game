const express = require('express');
const app = express();

app.use(express.static('dist'))
app.listen(5000, () => console.log(`Listening at http://localhost:${5000}`))
