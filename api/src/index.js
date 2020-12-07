import App from './app';
import { SERVER_PORT } from './constants';

const app = new App();

app.init();
app.run(SERVER_PORT);
