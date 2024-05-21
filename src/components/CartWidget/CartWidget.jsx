import { Box } from '@chakra-ui/react';
import React from 'react'
import { PiShoppingCartBold } from "react-icons/pi";

const CartWidget = () => {
  return (
    <Box m={2}>
      <PiShoppingCartBold />
    </Box>
  )
}

export default CartWidget
