import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
];
