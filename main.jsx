import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Contact from './Components/Contact.jsx';
import Body from './Components/body/Body.jsx';
import About from './Components/About.jsx';


const appRouter = createBrowserRouter([
    {path : "/",
    element: <App/>,
    children : [
        {
          path : "/",
          element : <Body/>
        },
         {
            path : "/contact",
            element : <Contact/>
        },
         {
            path : "/about",
            element : <About/>
        },
    ]
    }
]);


createRoot(document.getElementById('root')).render(
<RouterProvider router = {appRouter}/>
)

