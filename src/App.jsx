import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer title='Vinoteca' />
    </ChakraProvider>

  )
}

export default App
