export default function filterItems (data, filters) {
    if (!data.length) return [];

    let { category, sortBy, searchQuery } = filters;

    const filteredData = 
        category == 'all' 
            ? [...data] 
            : data.filter(item => item.category === category)

            // featured
            // lowestPrice
            // highestPrice
            // bestSeller
            // newProducts


    if (sortBy === 'lowestPrice') {
        filteredData.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'highestPrice') {
        filteredData.sort((a, b) => (a.price > b.price ? -1 : 0))
    } else if (sortBy === 'bestSeller') {

    }

    return filteredData;
}