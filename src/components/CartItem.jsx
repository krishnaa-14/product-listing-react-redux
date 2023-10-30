
const CartItem = ({itemId, title, price, imageURL}) => {
    return (
        <div className = "bg-white w-full h-30 p-2 flex flex-row mt-0">
            <div className = "ml-auto">
                {console.log(imageURL)}
                <img className = "w-20 h-20 p-2 object-fit" src = {imageURL} alt = "cart image"/>
            </div>
            <div className = "ml-20 w-60 mr-20">
                <h1 className = "font-bold text-sm mb-4"> {title} </h1>
                <h1 className = "font-bold text-xl"> {price} $ </h1>
            </div>
            <div className = "mr-auto">
                <button className = "p-2 rounded text-white bg-gray-500"> Remove to Cart </button>
            </div>
        </div>
    )
}

export default CartItem;