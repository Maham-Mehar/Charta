import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import Navroutes from './Routes/index.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navroutes />
  </BrowserRouter>,
)
