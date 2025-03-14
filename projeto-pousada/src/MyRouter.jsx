import {createBrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import Quartos from './Pages/Quartos.jsx';


const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    children:[
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/quartos",
            element: <Quartos />
        },
    ]
}])
export default router;