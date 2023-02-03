import express from 'express';
import morgan from 'morgan';
import './db.js';
import UserRoutes from './routes/usersRoutes.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extend:true}));
//middleware para mostrat por consola los status code
app.use(morgan("dev"));

app.use("/user", UserRoutes)

app.listen(8080, () => console.log('Server OK'));
