const express = require('express');

const app = express();



const PORT = env.process.PORT || 4200;



app.listen(PORT, () => {
    console.log(`the server is listening on port: ${PORT}`)
})