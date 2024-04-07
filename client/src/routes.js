import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import ItemPage from "./pages/ItemPage";
import Shop from "./pages/Shop";
import { ADMIN_ROUTE, BASKET_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    }
]

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    }
]

export const guestRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: <ItemPage/>
    }
]