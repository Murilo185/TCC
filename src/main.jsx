import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/LoginRegistro.jsx';
import TelaPrincipal from './components/telaprincipal.jsx'
import Camisa from './components/pgProduto/camisa.jsx'
import Agenda from './components/pgProduto/agenda.jsx'
import Almofada from './components/pgProduto/almofada.jsx'
import Azulejo from './components/pgProduto/azulejo.jsx'
import Caderno from './components/pgProduto/caderno.jsx'
import Caneca from './components/pgProduto/caneca.jsx'
import Chaveiro from './components/pgProduto/chaveiro.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaPrincipal />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path:"pgProduto/camisa.jsx",
    element:<Camisa />
  },
  {
    path:"pgProduto/agenda.jsx",
    element:<Agenda />
  },
  {
    path:"pgProduto/almofada.jsx",
    element:<Almofada />
  },
  {
    path:"pgProduto/azulejo.jsx",
    element:<Azulejo />
  },
  {
    path:"pgProduto/caderno.jsx",
    element:<Caderno />
  },
  {
    path:"pgProduto/caneca.jsx",
    element:<Caneca />
  },
  {
    path:"pgProduto/chaveiro.jsx",
    element:<Chaveiro />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
