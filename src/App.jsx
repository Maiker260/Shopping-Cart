import { useState, useEffect } from "react"

import { fetchProductsData } from "./assets/Utils/fetchProductsData"

export default function App() {

  const [productsData, setProductsData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProductsData();
        setProductsData(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    getProducts();

  }, [])

  return (
    <ul>
      {loading 
        ? <h1>Loading...</h1>
        : productsData.map((item => (
          <li key={item.title}>{item.title}</li>
        )))
      }
    </ul>
  )
  
}