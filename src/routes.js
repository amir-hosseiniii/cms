import Comments from "./Components/Comments/Comments";
import Products from "./Components/Products/Products";
import Users from "./Components/Users/Users";
import Orders from "./Components/Orders/Orders";
import Offs from "./Components/Off/Offs";
import Home from "./Components/Home/Home"

const routes = [
    {path : "/products" , element: <Products/>},
    {path : "/" , element: <Home/>},
    {path : "/comments" , element: <Comments/>},
    {path : "/users" , element: <Users/>},
    {path : "/orders" , element: <Orders/>},
    {path : "/offs" , element: <Offs/>}
]

export default routes