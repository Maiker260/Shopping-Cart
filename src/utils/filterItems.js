import selectProducts from "./selectProducts"

export default function filterItems (data, filters) {
    if (!data.length) return [];

    let { category, sortBy, searchQuery } = filters;

    let filteredData = 
        category === 'all' 
            ? [...data] 
            : data.filter(item => item.category === category)

    const sorts = {
        'featured': () => filteredData.reverse(),
        'lowestPrice': () => filteredData.sort((a, b) => a.price - b.price),
        'highestPrice': () => filteredData.sort((a, b) => (b.price - a.price)),
        'bestSeller': () => {
            filteredData = selectProducts(filteredData, 10, 20);
        }
    }

    if (sorts[sortBy]) {
        sorts[sortBy]();
    }

    if (searchQuery) {
        filteredData = filteredData.filter(item => 
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    return filteredData;
}