import React, {useState} from "react";
import {
    FlatList,
    Image,
    Text,
    Pressable,
    Box,
    VStack,
    Modal,
    Button,
  } from "native-base";

  // Dummmy Data (Array of Object)
  const datas = [
    {
      id: 1,
      title:
        "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
      id: 2,
      title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
      id: 3,
      title:
        "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
      id: 4,
      title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
      id: 5,
      title:
        "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
    {
      id: 6,
      title:
        "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
      id: 7,
      title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
      id: 8,
      title:
        "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
      id: 9,
      title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
      id: 10,
      title:
        "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
      image:
        "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
  ];
  
  // Functional Component
  const List = () => {
    const [itemSelect, setItemSelect] = useState(0);
    const modalOpen = (item) =>{
      setItemSelect(item);
    };
    const modalClose = () => {
      setItemSelect(null);
    };

    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
      return (
       <Pressable
        padding={15}
        borderBottomColor="#dddddd"
        borderBottomWidth={1}
        onPress={()=>modalOpen(item)}>
        <Box>
          <Image source={{uri:item.image}} height={200} width={null} />
          <Text fontSize={18} paddingTop={10} >
          {item.title}
          </Text>
        </Box>
       </Pressable>
      );
    };
  
    return (
      <Box 
        paddingBottom={100} >
        <FlatList 
          data={datas}
          renderItem={renderItem}
          keyExtractor={(item)=>item.id}>
        </FlatList>
        <Modal isOpen={itemSelect !== null} onClose={modalClose} size="lg" >
          <Modal.Content>
            <Modal.Header>{itemSelect ? itemSelect.title : ""}</Modal.Header>
            <Modal.CloseButton />
            <Modal.Body>
              {itemSelect && (
                <VStack space={3}>
                  <Image source={{uri:itemSelect.image}} height={200} width={null} />
                  <Text> {itemSelect.title}</Text>
                </VStack>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button onPress={modalClose}>Close</Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Box>
      
    );
  };
  
  export default List;
  