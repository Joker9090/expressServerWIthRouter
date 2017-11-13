import express from 'express';
import router from  './routes/main.js';

const app = express();

// app.use('./../public');

app.use(router)
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(
  3000,
  () => {
    console.log('Example app listening on port 3000!')
  }
)


https://github.com/reactjs/express-react-views
