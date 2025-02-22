import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: 'Register', element: <Register /> },
      { path: 'Login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
  
} 
