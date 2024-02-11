import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { ItemsLayout } from "./layout/ItemsLayout";
import { Home } from './pages/Home'
import { ItemInStock } from "./pages/ItemInStock";
import { NewItem } from "./pages/NewItem";
import { ItemIndividual } from "./pages/ItemIndividual";
import { UpdateItem } from "./pages/UpdateItem";

export const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    { index: true, element: <Home /> },
    { 
      path: "items", 
      element: <ItemsLayout />,
      children: [
        { index: true, element: <ItemInStock /> },
        { path: "new", element: <NewItem /> },
        // { path: "/:id", element: <ItemIndividual /> },
        // { path: "/:id/update", element: <UpdateItem /> },
      ]
    }
  ]
}])