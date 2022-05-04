import React from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./inputs/Controls";
import { useForm, Form } from './form/Index.js';



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

export default function EmployeeForm({addProduct,closeModal}) {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('product' in fieldValues)
            temp.product = fieldValues.product ? "" : "This field is required."
            if ('quantity' in fieldValues)
            temp.quantity = fieldValues.quantity ? 0 : "Please set the quantity"
            if ('unitPrice' in fieldValues)
            temp.unitPrice = fieldValues.unitPrice ? 0 : "Please set unit price"

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            addProduct(values)
            resetForm()
            closeModal()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                <Controls.Input
                        name="product"
                        label="product"
                        value={values.product}
                        onChange={handleInputChange}
                        error={errors.product}
                    />
                
                <Controls.Select
                        name="type"
                        label="type"
                        value={values.type}
                        onChange={handleInputChange}
                        options={types}
                        error={errors.type}
                    />
                   
                

                </Grid>
                <Grid item xs={6}>
                 
                 
                         <Controls.Input
                        name="quantity"
                        label="quantity"
                        value={values.quantity}
                        onChange={handleInputChange}
                        error={errors.quantity}
                    />
                 
                      <Controls.Input
                        name="unitPrice"
                        label="unitPrice"
                        value={values.unitPrice}
                        onChange={handleInputChange}
                        error={errors.unitPrice}
                    />
               

                   
                </Grid>
                <Grid item xs={6}>
                <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                    </Grid>
            </Grid>
        </Form>
    )
}

