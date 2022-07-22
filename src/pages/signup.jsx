import React from 'react'
import {
   
    Box,
    Image,
    useDisclosure,
  } from '@chakra-ui/react'
import Signupmodal from '../components/Signupmodal'
const Signup = () => {
   
  return (

   <Box >
    <Image sx={{ filter: 'blur(8px)' }} src="https://thewebdev.info/wp-content/uploads/2020/09/2btyo-phwyi-1200x800.jpg"></Image>
    <Signupmodal/>
   </Box>
  
  )
}

export default Signup