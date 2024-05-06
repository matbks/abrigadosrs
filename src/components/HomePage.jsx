import React, { useState } from 'react';
import '../App.css';
import CredentialModal from './CredentialModal';
import { FaWhatsapp, FaHome } from 'react-icons/fa';

import { Button,  Flex,  Link, HStack, useColorModeValue, IconButton } from '@chakra-ui/react';
function App() {
  const [isOpen, setIsOpen] = useState(false); 

  // const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="App">
      <IconButton
        icon={<FaWhatsapp />}
        isRound
        size="lg"
        colorScheme="whatsapp"
        position="fixed"
        bottom="2vh"
        right="2vh"
        aria-label="Whatsapp"
        onClick={() => window.open('https://wa.me/numero_do_whatsapp', '_blank')}
      />
      <Flex boxShadow="lg"
        border="lg" as="nav" align="top" justify="space-between" wrap="wrap" bg="#282c34" color="white" w="100%">
        <Flex align="top" mr={5} alignItems='center' marginStart='2'> 
            <FaHome p="2"  fontSize='2vh' _hover={{ textDecoration: 'none', opacity: 0.8}}></FaHome>
          
          
          <Link href="#" p="2" _hover={{ textDecoration: 'none', opacity: 0.8 }} marginStart='2' fontSize='2vh'>
            Doe
          </Link>
          <Link href="#" p="2" _hover={{ textDecoration: 'none', opacity: 0.8 }} fontSize='2vh'>
            Sobre
          </Link>
        </Flex>
      </Flex>

      <header className="App-header">

        <h1 style={{ marginTop: '3vh', fontSize: '8vh', fontWeight: "bold" }}>Ajude a me encontrar</h1>
        <img src="./logo512.png" alt="Logo" width="45%" height="45%" />
        <HStack>

          <Button
            fontSize="2vh"
            // _hover={{ bg: useColorModeValue("gray.400", "#4DD0E1") }}  >
            style={{ fontSize: '4vh', color: "white", minWidth: '30vh', backgroundColor: useColorModeValue("#282c34f2", "#4DD0E1") }}  >
            Buscar
          </Button>

          <Button
            fontSize="2vh"
            // _hover={{ bg: useColorModeValue("gray.400", "#4DD0E1") }}  >
            style={{ fontSize: '4vh', color: "white", minWidth: '30vh', backgroundColor: useColorModeValue("#282c34f2", "#4DD0E1") }}  >
            Cadastrar
          </Button>

        </HStack>
        <CredentialModal isOpen={isOpen} onClose={handleCloseModal} />
      </header>

      <main>

      </main>
    </div>
  );
}

export default App;