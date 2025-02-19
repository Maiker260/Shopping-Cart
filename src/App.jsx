import { createBrowserRouter, RouterProvider } from "react-router-dom"
import routes from "./routes/routes"
import { ProductsProvider } from "./context/ProductsContext"
import './styles/global.css'

const router = createBrowserRouter(routes)

export default function App() {
  return (
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  )
}