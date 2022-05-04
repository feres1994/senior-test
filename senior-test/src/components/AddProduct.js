import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ProductForm from './ProductForm';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




export default function BasicModal({addProduct,classes}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <div>
      <Button onClick={handleOpen} color="primary"   variant="contained"
                    className={classes.listButtons}>Add Product</Button>
      <Modal
        open={open}
        onClose={handleClose}
        color="primary"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
         <ProductForm  addProduct={item => addProduct(item)} closeModal={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}
