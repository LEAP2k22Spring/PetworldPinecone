import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import styles from '../../../styles/service.module.css'
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

const shops = [
  {
    shopName: 'FIDO Pet Shop',
    shopImg: 'https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/banner%20image%2FFido%20pet%20shop%2C%20pkb%20arquitetura%20_%20homify.jpeg?alt=media&token=3567b299-83c6-4751-a4a2-04c55cc9b7df',
    email: 'FidoPetShop@gmail.com',
    web: 'www.fidopetshop.com',
    location: 'Khan-Uul Destrict 17 khoroo King Tower 135-1',
    phone: '99991111'
  },
  {
    shopName: 'My Hobby',
    shopImg: 'https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/banner%20image%2FMascotoy.png?alt=media&token=0962d0e9-15ff-4529-be76-34a10a06c878',
    email: 'MyHobby@gmail.com',
    web: 'www.myhobbymongolia.com',
    location: '"Exhibition Centre" Trade Centre, Ulaanbaatar',
    phone: '99991111'
  },
  {
    shopName: 'Heart Food Mongolia',
    shopImg: 'https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/banner%20image%2FLoja%20com%20Mo%CC%81veis%20planejados%20coloridos%20e%20porcelanato%20claro%20_%20Mobio%20Arquitetura%2029152%20-%20Viva%20Decora.jpeg?alt=media&token=f2722e7b-bb01-42d5-a869-8003c4fba0fa',
    email: 'Heartfood@gmail.com',
    web: 'www.heartfood.mn',
    location: 'Их Монгол Улсын гудамж, Улаанбаатар',
    phone: '86045575'
  },
  {
    shopName: 'Wannadog Pet Shop',
    shopImg: 'https://firebasestorage.googleapis.com/v0/b/petworldpinecone.appspot.com/o/banner%20image%2F%E1%84%80%E1%85%B1%E1%84%8B%E1%85%A7%E1%84%8B%E1%85%AE%E1%86%AB%20%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B4%2012%E1%84%91%E1%85%A7%E1%86%BC%20%E1%84%8B%E1%85%A2%E1%84%80%E1%85%A7%E1%86%AB%20%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A6%E1%84%80%E1%85%A1%E1%86%AB%E1%84%89%E1%85%B5%E1%86%A8%20%E1%84%8F%E1%85%A1%E1%84%91%E1%85%A6%20%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A6%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A5%20%E1%84%87%E1%85%B5%E1%84%8B%E1%85%AD%E1%86%BC.jpeg?alt=media&token=3890f8b9-b093-467e-874a-f52756662588',
    email: 'Wannadog@gmail.com',
    web: 'www.wannadog.com',
    location: 'Khan-Uul Destrict 17 khoroo King Tower 135-1',
    phone: '99991111'
  },
]

const PetShop = () => {
  return (
    <Box className={styles.petshop_wrapper}>
      <Box ></Box>
      <Box className={styles.shops_wrapp}>
        {shops.map((shop, i) => (
          <Box key={i} className={styles.shop_box}>
            <Box display="flex" gap={3}>
              <Image
                object-fit='contained'
                width={185}
                height={200}
                src={shop.shopImg}
                alt="shop image"
              />
              <Box className={styles.shop_text} py={2} >
                <Typography variant='h5' sx={{ color: 'white' }}>
                  {shop.shopName}
                </Typography>
                <Typography mt={1} variant="body2">
                  <LocationOnIcon sx={{ color: 'rgb(0, 187, 255)' }} />{shop.location}
                </Typography>
                <Typography mt={1} variant="body2">
                  <LanguageIcon sx={{ color: 'rgb(0, 187, 255)' }} />{shop.web}
                </Typography>
                <Typography mt={1} variant="body2">
                  <EmailIcon sx={{ color: 'rgb(0, 187, 255)' }} />{shop.email}
                </Typography>
                <Typography mt={1} variant="body2">
                  <PermPhoneMsgIcon sx={{ color: 'rgb(0, 187, 255)' }} />{shop.phone}
                </Typography>
              </Box>
            </Box>
            <Box className={styles.shop_map}></Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PetShop;
