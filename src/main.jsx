import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from './Component/Main.jsx';
import Phones from './Component/Phones.jsx';
import Phone from './Component/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [

      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: () => fetch("http://localhost:4000/phone")
      },
      {
        path: "/phone/:id",
        element: <Phone></Phone>,
        loader: ({ params }) => fetch(`http://localhost:4000/phone/${params.id}`)
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
