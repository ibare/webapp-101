import Woowahan from 'woowahan';
import Home from './views/home';
import Hello from './views/hello';

global.$ = global.jQuery = Woowahan.$;

let app = new Woowahan();

app.start({
  url: '/', view: Home, container: '#app', pages: [
    { url: 'hello', view: Hello, container: '#app' }
  ]
});
