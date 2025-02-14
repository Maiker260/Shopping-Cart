export default function selectProducts(list, startID, endID) {
    const filteredlist = list
        .filter((item) => {
            if (item.id >= startID && item.id <= endID) return item
        })

    return filteredlist;
}