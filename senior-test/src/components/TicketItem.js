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
                    className={classes.tableWidth}
                   
               
                  >
                   {item.product}
                  </Typography>

                  <Typography
                    className={classes.tableWidth}
                   
                  
                  >
                   {item.quantity}
                  </Typography>

                  <Typography
                    className={classes.tableWidth}
                   
                  
                  >
                   {item.unitPrice}
                  </Typography>

                  <Typography
                    className={classes.tableWidth}
                   
                  
                  >
                   {item.unitPrice * item.quantity}
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


  
 
  

  
