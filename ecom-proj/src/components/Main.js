import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, emptyCart, removeFromCart} from '../Redux/action';
import { productList } from '../Redux/productAction';

const Main = ()=> {
    const dispatch = useDispatch();
     const productListData = useSelector((state)=>state.productData);
     console.log('in main',productListData);
    const product = {
        name: 'i phone',
        category: 'mobile',
        price: 10000,
        color: 'red'
    }
    useEffect(()=>{
      dispatch(productList());
    },[useSelector((state)=>state.cartData)])
    

  return (
    <div>
        
        <button className='Empty-cart' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
        
        <div className='productContainer'>
        {
          productListData.map((data)=>
            <div className='productItem' key={data.id}>
              <div className='imageContainer'>
                 <img src={data.photo} alt="" />
              </div>
              
              <div className='itemDetails'>
              <div>Name : {data.name}</div>
              <div>Color : {data.color}</div>
              <div>Price : {data.price}</div>
              <div>Category : {data.category}</div>
              </div>
              
            
              <div className="butTons">
                <button onClick={()=>dispatch(addToCart(data))}>Add To Cart</button>
                <button onClick={()=>dispatch(removeFromCart(data.id))}>Remove From Cart</button>
              </div>
            </div>
          )
        }
        </div>
    </div>
  )
}

export default Main;