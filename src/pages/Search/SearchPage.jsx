import { createContext, useContext, useEffect, useState } from "react"
import SearchBar from "../../components/SearchBar/SearchBar"
import { ProductsContext } from "../../context/ProductsContext"
import ProductContainer from "../../components/ProductContainer/ProductContainer"
import filterItems from "../../utils/filterItems"
import utilStyles from "../../styles/utilities.module.css"
import srchPageStyle from "./SearchPage.module.css"

export const FilterContext = createContext();

export default function SearchPage() {
    const { productsData } = useContext(ProductsContext);
    
    const [filteredData, setfilteredData] = useState([]);
    const [filters, setFilters] = useState({
        category: 'all',
        sortBy: 'featured',
        searchQuery: '',
    })
    
    useEffect(() => {
        setfilteredData(filterItems(productsData, filters));
    }, [productsData, filters])

    return (
        <FilterContext.Provider value={{
            filters,
            setFilters,
            changeFilter: (key, value) => setFilters(prev => ({ ...prev, [key]: value })),
            filteredData
        }}> 
            <section className={`${utilStyles.flexColumn} ${utilStyles.mainContainer} ${srchPageStyle.searchPageContainer}`}>
                <SearchBar />
                <article className={`${utilStyles.gridAutoFit} ${srchPageStyle.productsContainer}`}>
                    {filteredData.map(itm => (
                        <ProductContainer 
                            key={itm.id}
                            item={itm}
                        />
                    ))}
                </article>
            </section>
        </FilterContext.Provider>
    )
}