import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { FilterContext } from "../../pages/Search/SearchPage";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import srchBarStyle from "./SearchBar.module.css";
import utilStyles from "../../styles/utilities.module.css";

export default function SearchBar({ }) {
    const { categories } = useContext(ProductsContext);
    const { changeFilter, filteredData } = useContext(FilterContext);

    return (
        <aside className={`${srchBarStyle.searchBarContainer} ${utilStyles.flexColumn}`}>
            <div className={`${srchBarStyle.searchBarFilters} ${utilStyles.flexJustCenter} ${utilStyles.flexCenter}`}>
                <input
                    className={`${srchBarStyle.inputs} ${srchBarStyle.searchBarInput}`}
                    type="search"
                    placeholder="Search"
                    onChange={(e) => changeFilter("searchQuery", e.target.value)}
                />
                
                <select
                    className={`${srchBarStyle.inputs}`}
                    onChange={(e) => changeFilter("category", e.target.value)}
                >
                    <option value="all">All</option>
                    {categories.map((categ) => (
                        <option key={categ.name} value={categ.name}>
                            {capitalizeFirstLetter(categ.name)}
                        </option>
                    ))}
                </select>

                <select
                    className={`${srchBarStyle.inputs}`}
                    onChange={(e) => changeFilter("sortBy", e.target.value)}
                >
                    <option value="featured">Featured</option>
                    <option value="lowestPrice">Price: Low to High</option>
                    <option value="highestPrice">Price: High to Low</option>
                    <option value="bestSeller">Best Sellers</option>
                    <option value="newProducts">Release Dates</option>
                </select>
            </div>
            <div className={srchBarStyle.prodFound}>
                <h4>Products Found: {filteredData.length}</h4>
            </div>
        </aside>
    );
}