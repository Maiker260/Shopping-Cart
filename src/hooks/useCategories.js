import { useState, useEffect } from "react";
import Category from "../utils/newCategory";

export default function useCategories(productsData) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (!productsData.length) return;

        setCategories(() => {
            const newCategories = [];

            productsData.forEach(item => {
                let category = newCategories.find(categ => categ.name === item.category);

                if (!category) {
                    category = new Category(item.category);
                    newCategories.push(category);
                }

                category.items.push(item);
            });

            return newCategories;
        });
    }, [productsData]);

    return categories;
}
