import React from 'react'


import {
    Button,
    Typography,
    ListItem,
  } from "@material-ui/core";
  
 
export default function TicketItem({item, classes, deleteItem}) {



  return (


                <ListItem divider="bool" className={classes.list}>
                
                  <Typography
                    className={classes.text}
                   
                    key={item.id}
                  >
                   {item.product}
                  </Typography>
            
                  <Button
                   
                    color="secondary"
                    variant="contained"
                    className={classes.listButtons}
                    onClick={deleteItem}
                  >
                    delete
                  </Button>
                </ListItem>
  )
      
  
}


  
 
  

  
