import React, { useState, useRef, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react'; 
import PropTypes from 'prop-types';

const CredentialModal = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [phone, setPhone] = useState('');
  const [shelter, setShelter] = useState('');
  const [photo, setPhoto] = useState(null);
  const notify = useToast(); 
  const firstInput = useRef(null);

  const handleSave = () => {
    // Logic to handle saving the data
    console.log({
      name,
      age,
      city,
      district,
      phone,
      shelter,
      photo,
    });
    notify({
      title: 'Sucesso',
      description: 'Salvo com sucesso',
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (firstInput.current) {
          firstInput.current.focus();
        }
      }, 100);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Registrar Desaparecido</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input ref={firstInput} value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Idade</FormLabel>
            <Input value={age} onChange={(e) => setAge(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Cidade</FormLabel>
            <Input value={city} onChange={(e) => setCity(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Bairro</FormLabel>
            <Input value={district} onChange={(e) => setDistrict(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Telefone</FormLabel>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Abrigo</FormLabel>
            <Input value={shelter} onChange={(e) => setShelter(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Foto</FormLabel>
            <Input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Salvar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

CredentialModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CredentialModal;
