import React,{useState} from 'react'
import HeaderMain from '../HeaderMin/HeaderMain'
export default function MainContent() {
  
    const [products , setProducts] = useState([
        {id : 1 , name : "milk" , type : "Household" , Amount : 1 , Price : 100_00 , NeedFridge : "yes",imgSrc :""},
        {id : 2 , name : "glue" , type : "Household" , Amount : 1 , Price : 200_00 , NeedFridge : "yes",imgSrc :""},
        {id : 2 , name : "chips" , type : "Household" , Amount : 1 , Price : 300_00 , NeedFridge : "yes",imgSrc :""},
        {id : 4 , name : "cheese" , type : "Household" , Amount : 1 , Price : 400_00 , NeedFridge : "yes",imgSrc :""},
    ])
    console.log(products)
  return (
    <div>
    <HeaderMain/>
      
    </div>
  )
}
