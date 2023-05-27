import './styles/product.css';

export default function Product(product) {

    return (
        <div key={product.id} className="product">
            <figure>
                <img src={product.img_url} alt={product.name} />
            </figure>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price} €</p>
                <p style={{color: product.stock===0?'red':'black'}}>Stock: {product.stock}</p>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}