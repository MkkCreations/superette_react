import './styles/listeProducts.css';
import Product from './Product';
import Header from './Header';
import { useState } from 'react';

function ListeProducts({liste}) {
    const [searchListe, setSearchListe] = useState();

    const handleChange = (e) => {
        setSearchListe(liste.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    return (
        <div className='listeProducts'>
            <Header />
            <h1>Home</h1>
            <div>
                <h2>Products</h2>
                <div className='toolsListProducts'>
                    <input type='text' placeholder='Search' onChange={handleChange} />
                </div>
                <section>
                    {
                        searchListe?
                            searchListe.map((el) => (
                                Product(el)
                            ))
                        :  
                            liste.map((el) => (
                                Product(el)
                            ))
                    }
                </section>
            </div>
        </div>
    )
}

export default ListeProducts;