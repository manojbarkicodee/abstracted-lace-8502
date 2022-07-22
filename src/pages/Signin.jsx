import React from 'react'
import {
   
    Box,
    Image,
    useDisclosure,
  } from '@chakra-ui/react'
import Signinmodal from '../components/Signinmodal'
const Signin = () => {
  return (
    <Box >
    <Image sx={{ filter: 'blur(8px)' }} src="https://thewebdev.info/wp-content/uploads/2020/09/2btyo-phwyi-1200x800.jpg"></Image>
    <Signinmodal/>
   </Box>
  )
}

export default Signin