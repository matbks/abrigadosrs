// src/pages/AboutPage.js
import React from 'react';
import { Box, Text, VStack, Link } from '@chakra-ui/react';

function AboutPage() {
  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="xl">Recado importante aos abrigos!</Text>
        <Text>Temos uma carreta com 16 toneladas de alimentos e ração para cães doadas pelas Linhas Aéreas Azul. O abrigo que está precisando de doações envie um e-mail para Ana que está responsável pela entrega da doação: <Link href="mailto:anasarapinheiro10@gmail.com" isExternal>anasarapinheiro10@gmail.com</Link></Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="xl">Atualização de Cadastros</Text>
        <Text>Foram incluídos no sistema mais de 9 mil cadastros de pessoas desabrigadas que foram acolhidas nos abrigos de diversas cidades do Rio Grande do Sul, às 23:05 de 05/05/2024.</Text>
      </Box>
    </VStack>
  );
}

export default AboutPage;
