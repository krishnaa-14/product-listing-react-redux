
const applyFilter = (products, filter) => {
    console.log(products);
    if(filter === 'Low') {
        return products.filter(product => product.price < 50);
    }

    else if(filter === 'Medium') {
        return products.filter(product => product.price > 50 && product.price < 100);
    }
    
    else if(filter === 'High') {
        return products.filter(product => product.price > 100);
    }
    else {
        return products;
    }
}

export default applyFilter;