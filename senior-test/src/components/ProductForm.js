import { TextField } from '@material-ui/core'
import Grid from '@mui/material/Grid';
import React, {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const initialValues = {
    product: "",
    type: "food",
    quantity: 0,
    unitPrice: 0
}

const types = [
    "food",
    "drinks"
]
export default function ProductForm({addProduct}) {
    const [values,setValues] = useState(initialValues)
    const handleInputChange = e => {
        const {name, value} = e.target
  
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetInputs = () => {
        setValues(initialValues)
    }

    const submitValues = e => {
  
            e.preventDefault()
            addProduct(values)
            resetInputs()

        }
    
  return (
    <form onSubmit={(e) => submitValues(e)}>
        <Grid container>
            <Grid item xs={6}>
                <TextField  variant="outlined"   label="Product Name" 
                name="product"
                value={values.product}
                onChange={handleInputChange}
                />
                <TextField  variant="outlined"   
                label="quantity" 
                name="quantity"
                value={values.quantity}
                onChange={handleInputChange}
                />
                   <TextField  variant="outlined"   
                label="unitPrice" 
                name="unitPrice"
                value={values.unitPrice}
                onChange={handleInputChange}
                />


              
            </Grid>
            <Grid item xs={6}>
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label"></InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={values.type}
    name="type"
    label="type"
    onChange={handleInputChange}
  >
   {
       types.map(el =>  <MenuItem value={el}>{el}</MenuItem>
      )
   }
  </Select>
</FormControl>
            </Grid>
        </Grid>
        <input type="submit" value="add" />
    </form>
  )
}
