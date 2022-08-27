import { h, render } from 'preact';
import App from './components/app';

export default App;

const appNode = document.getElementById("app-root");
render(<App />, appNode);