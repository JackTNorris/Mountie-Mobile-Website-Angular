import {generateExpressApp} from '../loaders/express-loader';
import createUser from './create-user';
import deleteUser from './delete-user';
import updateUser from './update-user';
import readUsers from './read-users';
const app = generateExpressApp(true);

app.post('/', createUser);
app.delete('/', deleteUser);
app.put('/', updateUser);
app.get('/', readUsers);

export default app;