import logo from './logo.svg';
import './App.css';
// import App from './components/App';
import React, {useState}  from 'react';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList';
import Footer from './components/Footer';


function App() {

    const products=[
        {
            price : 99999,
            name :" IPhone 10x pro",
            quantity : 0,
        },
        {
            price : 9999,
            name :" Redmi 10x pro",
            quantity : 0,
        }
    ];
    const [productList , SetProductList] = useState(products)
    const [totalAmount , SetTotalAmount] = useState(0)
    const [text, setText] = useState("");

    const incrementQuantity=(index)=>{
      let newProductList =[...productList]
      let newTotalAmount =totalAmount
      newProductList[index].quantity++
      newTotalAmount+=  newProductList[index].price
      SetTotalAmount(newTotalAmount)
      SetProductList(newProductList);
    }
    const decrementQuantity=(index)=>{
      let newProductList =[...productList];
      let newTotalAmount =totalAmount
      if(newProductList[index].quantity > 0)
      {
        newProductList[index].quantity--
        newTotalAmount -=  newProductList[index].price
      }
      // (newProductList[index].quantity = 0);
      SetTotalAmount(newTotalAmount)
      SetProductList(newProductList);
    }
    
    const resetQuantity=()=>{
      let newProductList =[...productList];
      newProductList.map((products)=>{
        products.quantity=0
      })
      SetProductList(newProductList);
      SetTotalAmount(0)
    }
  return (
    
    <>
    
    <Navbar/>
     <main className='container mt-5'>
     <ProductList
      productList={productList} 
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}/>
     </main>
       
        <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
       
   
  );
}


export default App;
