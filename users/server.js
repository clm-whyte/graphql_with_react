const express = require('express');

const app = express();

app.listenerCount(4000, () => {
    console.log('Listerning');
});
