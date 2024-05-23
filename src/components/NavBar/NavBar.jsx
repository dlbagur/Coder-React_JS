import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Flex,
    Heading
  } from '@chakra-ui/react'
  import { TiArrowDownOutline } from "react-icons/ti";


const NavBar = () => {
  return (
    <Flex 
        h={'10vh'} 
        w={'100%'} 
        justify={'space-between'} 
        align={'center'} 
        backgroundColor={'#c8b6ff'}
        >
        <Heading fontSize={'xl'} m={2}>La Vinoteca</Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<TiArrowDownOutline />}>
                Sus Vinos
            </MenuButton>
            <MenuList>
                <MenuItem></MenuItem>
                <MenuItem>Tintos</MenuItem>
                <MenuItem>Blancos</MenuItem>
                <MenuItem>Rosados</MenuItem>
                <MenuItem>Espumantes</MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  )
}

export default NavBar
