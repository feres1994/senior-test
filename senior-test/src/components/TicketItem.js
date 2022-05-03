import React, {useState} from 'react'


import {
    Button,
    Typography,
    List,
    ListItem,
    Container,
  } from "@material-ui/core";
  
 
export default function TicketItem({item, deleteItem}) {



  return (
<div>
{item.product} 
<button  onClick={deleteItem} >
    delete
</button>
</div>
       
            
              
  )
      
  
}


  
 
  

  
