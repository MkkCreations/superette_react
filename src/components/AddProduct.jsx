import './styles/addProduct.css';
import { addListeAction, editListeAction } from '../Actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function AddProduct({product=null, edit=false, setAddProduct=null}) {
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const nextId = useSelector(state => state.listeReducer[state.listeReducer.length - 1].id) + 1;

    const addProduct = (product) => {
        dispatch(
            addListeAction(product)
        );
        setAddProduct(false);
    }

    const editProduct = (id, product) => {
        dispatch(
            editListeAction(id, product)
        );
        setAddProduct(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = product? product.id : nextId;
        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const stock = e.target.stock.value;
        const img_url = e.target.img_url.value;

        if (name === '' || description === '' || price === '' || stock === '' || img_url === '') {
            setError('Please fill all the fields');
            return;
        }
        if (edit) {
            editProduct(product.id, {id, name, description, price, stock, img_url});
        } else {
            addProduct({id, name, description, price, stock, img_url});
        }

        e.target.name.value = '';
        e.target.description.value = '';
        e.target.price.value = '';
        e.target.stock.value = '';
        e.target.img_url.value = '';
        setError('');
    }
    
    return (
        <div className='addProduct'>
            <div className='bg'></div>
            <div className='addForm'>
                <h2>{edit? 'Edit Product' : 'Add Product'}</h2>
                <center className='error'><p>{error}</p></center>
                <form onSubmit={handleSubmit}>
                        <input type='text' id='name' placeholder='Name' defaultValue={product? product.name : ''} />

                        <input type='text' id='description' placeholder='Description' defaultValue={product? product.description : ''} />

                        <input type='number' id='price' placeholder='Price' defaultValue={product? product.price : ''} />

                        <input type='number' id='stock' placeholder='Stock' defaultValue={product? product.stock : ''} />

                        <input type='text' id='img_url' placeholder='Image URL' defaultValue={product? product.img_url : ''} />

                        <span>
                            <p onClick={() => {edit=false;setAddProduct(false)}} >Cancel</p>
                            <button type='submit'>{edit? 'Edit' : 'Add'}</button>
                        </span>

                </form>
            </div>
        </div>
    )
}

export default AddProduct;