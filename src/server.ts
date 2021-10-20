import express from 'express';
import { createAction } from './routes';

const app = express();

app.get("/", createAction);

app.listen(3333);