const app = require('./controller/rest');

const port = 8080;

app.listen(port, () => console.log(`App listening on port ${port}!`))