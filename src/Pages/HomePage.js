import Main from "../components/Main/Main"
import Footer from "../components/Footer/Footer"

import {getFirestore, collection, getDocs} from 'firebase/firestore';
import { useEffect, useState } from "react";



const HomePage = () => {

    const [products, setProducts] = useState([]);

    useEffect (()=>{
        ////Traer el servicio de firestone
        const querydb = getFirestore();
        //creo el puntero al dato que quiero traer 
        const queryColletion = collection(querydb, 'Productos');
        //Traigo el dato con una promesa
        getDocs(queryColletion)
            .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
    },[])

    return (
        <>

            <Main
                products={products}
            />

            <Footer />
        </>
    )

}

export default HomePage