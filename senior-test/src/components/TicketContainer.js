import React, {useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import TicketItem from './TicketItem'
import getTicket from '../services/get-ticket'

import {
    List,
    Container,
    makeStyles
  } from "@material-ui/core";
  
  const useStyles = makeStyles({
    input: {
      width: "70%",
      marginBottom: 30
    },
    addButton: {
      height: 55,
      marginBottom: 30
    },
    container: {
      textAlign: "center",
      marginTop: 100
    },
    list: {
      width: "80%",
      margin: "auto",
      display: "flex",
      justifyContent: "space-around",
      border: "1px solid light-gray"
    },
    text: {
      width: "70%"
    },
    listButtons: {
      marginLeft: 10
    }
  });
export default function TicketContainer() {

const [products, setProducts] = useState([{id: uuidv4(),product: 'water', type: 'drinks', quantity: 10, unitPrice: 1},
{id: uuidv4(),product: 'chicken wings', type: 'food', quantity: 3, unitPrice: 5},
{id: uuidv4(),product: 'steak', type: 'food', quantity: 1, unitPrice: 9},
{id: uuidv4(),product: 'coffee', type: 'drinks', quantity: 4, unitPrice: 2},
{id: uuidv4(),product: 'wine bottle', type: 'drinks', quantity: 1, unitPrice: 7}])


useEffect(() => {
  (
      async () => {
        let result = await getTicket(products)
       setProducts(result)
       
        
      }
  )()
  }, [])
  
 

  return (


      <div>
          { products?.products?.map((product,i) =>  <TicketItem item={product}   key={i} />)} </div>
          
  )
       
     

}


  
 
  

  