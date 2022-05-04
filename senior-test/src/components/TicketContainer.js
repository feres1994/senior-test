import React, {useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import TicketItem from './TicketItem'
import AddProduct from "./AddProduct"
import getTicket from '../services/get-ticket'

import {
    List,
    Container,
    makeStyles,
    Typography,
    ListItem,
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
      width: "70%",
      textAlign: 'left'
    },
    tableWidth: {
        width: '7em',
        textAlign: 'left'
    },
    listButtons: {
      marginLeft: 10
    },
    mT100: {
        marginTop: "100px"
      },
  });
export default function TicketContainer() {

const [products, setProducts] = useState([{id: uuidv4(),product: 'water', type: 'drinks', quantity: 10, unitPrice: 1},
{id: uuidv4(),product: 'chicken wings', type: 'food', quantity: 3, unitPrice: 5},
{id: uuidv4(),product: 'steak', type: 'food', quantity: 1, unitPrice: 9},
{id: uuidv4(),product: 'coffee', type: 'drinks', quantity: 4, unitPrice: 2},
{id: uuidv4(),product: 'wine bottle', type: 'drinks', quantity: 1, unitPrice: 7}])

const classes = useStyles()

useEffect(() => {
  (
      async () => {
        let result = await getTicket(products)
       setProducts(result)
       
        
      }
  )()
  }, [])
  
 const deleteItem = (id) => {
     const items = products.products.filter(el => el.id !== id)
     setProducts(getTicket(items))
     
 }

 const addItem = (item) => {
     const newItems = [...products.products, item]
     setProducts(getTicket(newItems))
 }

  return (


      <Container className={classes.mT100}>
          <List>
          <ListItem divider="bool" className={classes.list}>
                
                <Typography
                  className={classes.tableWidth}
                >
                Product Name
                </Typography>

                <Typography
                  className={classes.tableWidth}
                 
                
                >
                Quantity
                </Typography>

                <Typography
                  className={classes.tableWidth}
                 
                
                >
                 Unit Price
                </Typography>

                <Typography
                  className={classes.tableWidth}
                 
                
                >
                 Total
                </Typography>

                <Typography
                  className={classes.tableWidth}
                 
                
                >
                 Options
                </Typography>
          
          
              </ListItem>
          { products?.products?.map((product,i) =>  <TicketItem item={product}   key={i} classes={classes} deleteItem={() => deleteItem(product.id)} />)} 
          
        <Typography variant="h2" gutterBottom component="div">
        Total Ticket Price : {products.totalPrice}
      </Typography>
          </List>
          <AddProduct   addProduct={item => addItem(item)} classes={classes}/>
          </Container>
          
  )
       
     

}


  
 
  

  /**
   * 
   * 
   * import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(product,type, quantity, unitPrice, total, options) {
  return { product,type, quantity, unitPrice, total, options };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
   */