export const fetchProductsData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {throw new Error("Failed to get Products Data")}
        return await response.json();
    } catch (error) {
        throw error
    }
}