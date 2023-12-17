import express, { Application } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
// /api/v1/students/create-student
app.use('/api/v1/students', StudentRoutes);

// app.get('/', (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// });

export default app;
