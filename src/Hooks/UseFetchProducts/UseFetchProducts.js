import { useEffect, useState } from 'react'

const UseFetchProducts = () => {

  const [products, setProducts] = useState([]);

    useEffect (()=>{
        // ////Traer el servicio de firestone
        // const querydb = getFirestore();
        // //creo el puntero al dato que quiero traer 
        // const queryColletion = collection(querydb, 'Productos');
        // //Traigo el dato con una promesa
        // getDocs(queryColletion)
        //     .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
    },[])

  return products;
}

export default UseFetchProducts;