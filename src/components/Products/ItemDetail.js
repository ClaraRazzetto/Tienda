import {useState} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {useCartContext} from './CartContext';

function ItemDetail({data}) {

 const[goToCart,setGoToCart]= useState(false);
 const {addProduct} = useCartContext();
 
 const onAdd =(quantity)=>{
    setGoToCart(true);
    addProduct(data,quantity);
  }

  return (
    <div className='container'>
        <div className='detail'>
         <img className='detail_image' src={data.image} alt=''/>
         <div className='content'>
        <h1>{data.title}</h1>    
        <p>{data.price} </p>
        {goToCart ? <Link to='/cart'>Terminar compra</Link> :<ItemCount initial={1} stock={10} onAdd={onAdd}/>}
        
        </div>       
        </div> 
    </div>
  )
}

export default ItemDetail;