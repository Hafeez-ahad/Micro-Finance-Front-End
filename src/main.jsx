import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom'; // Corrected import

createRoot(document.getElementById('root')).render(
  <>
    <Toaster />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);