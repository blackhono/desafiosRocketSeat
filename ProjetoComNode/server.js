const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('eita caraiba');
})


app.listen(3001);



