import { useEffect, useState } from 'react'

const UseFetchProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        //Llamada a la API
        const fetchProducts = async () => {
            const productsResponse = await fetch('', {method:'GET'})
                .then((response)=> response.json())
                .catch((err)=> console.log('err', err));
            
            setProducts(productsResponse);
        }
        
        fetchProducts();

        return () => {};
    }
    ,[]);


  return products;
}

export default UseFetchProducts;