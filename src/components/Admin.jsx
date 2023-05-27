import './styles/admin.css';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteListeAction, listeAction } from '../Actions';
import AddProduct from './AddProduct';

export default function Admin() {
    const  liste = useSelector(state => state.listeReducer);
    const [searchListe, setSearchListe] = useState();
    const [addProduct, setAddProduct] = useState(false);

    const handleChange = (e) => {
        setSearchListe(liste.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase())));
        console.log(searchListe);
    }

    useEffect(() => {
        listeAction();
      }, []);
    return (
        <div className='admin'>
            <Header admin={true}/>
            <h1>Admin </h1>
            <section>
                <h2>Products</h2>
                <span>
                    <div>
                        <div className='tools'>
                            <input type='text' placeholder='Search' onChange={handleChange} />
                        </div>
                        <button onClick={() => {setAddProduct(!addProduct)}}>Add Product</button>
                        <div style={{display: addProduct?'unset':'none'}}><AddProduct setAddProduct={setAddProduct} /></div>
                    </div>
                    <div>
                        <ul className='listProducts'>
                            {
                                searchListe?
                                    searchListe.map((el) => (
                                        <ListProductsAdmin key={el.id} product={el} />
                                    ))
                                :
                                    liste.map((el) => (
                                        <ListProductsAdmin key={el.id} product={el}/>
                                    ))
                            }
                        </ul>
                    </div>
                </span>
            </section>
        </div>
    )
}

function ListProductsAdmin({product=null}) {
    const [addProduct, setAddProduct] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(
            deleteListeAction(product.id)
        );
    }

    return (
        <li key={product.id}>
            <figure>
                <img src={product.img_url} alt={product.name} />
            </figure>
            <h3>{product.name}</h3>
            <span>
                <p>Description</p>
                <p>{product.description}</p>
            </span>
            <span>
                <p>Price</p>
                <p>{product.price} €</p>
            </span>
            <span>
                <p>Stock</p>
                <p>{product.stock}</p>
            </span>
            <span>
                <button onClick={() => {setAddProduct(true)}}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </span>
            <div style={{display: addProduct?'unset':'none'}}><AddProduct product={product} setAddProduct={setAddProduct} edit={true} /></div>
        </li>
    )
}