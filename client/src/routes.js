import Admin from "./pages/admin";
import {ModalWindow} from "./pages/auth";
import Basket from "./pages/basket";
import ItemPage from "./pages/itemPage";
import Shop from "./pages/shop";
import { ADMIN_ROUTE, BASKET_ROUTE, ITEM_ROUTE, AUTH_ROUTE, SHOP_ROUTE } from "./utils/consts";

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
        path: AUTH_ROUTE,
        Component: <ModalWindow/>
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