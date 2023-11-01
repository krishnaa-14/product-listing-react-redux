const ProductsLoader = () => {
    return (
        <div className="p-5 flex flex-row flex-wrap">
            {Array(10).map((index) => (
                <div key={index} className="w-20 h-20 border border-gray-400 m-1 bg-black"></div>
            ))}
        </div>
    );
}

export default ProductsLoader;
