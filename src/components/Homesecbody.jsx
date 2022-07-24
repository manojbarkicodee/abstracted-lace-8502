import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Grid1 from './Grid1'
import Template from './Template'
import {templatedata} from "../displaydata/templatedata"
const Homesecbody = () => {
  return (
    <Box position="relative" w="70%"  pb="100px" left="370px" top="73px" >
<HStack fontSize="sm" h="55px" pl="20px" pr="20px" borderRadius="10px" bg="#efefef" justifyContent="space-between" >
    <HStack spacing="10px">
<StarIcon  color="#2d7ff9"/><Text color="#2d7ff9">Invite your frinds and co-workers</Text><Text  color="black">to earn account credit!</Text>

    </HStack>
    <Text>No thanks</Text>
</HStack>
<HStack justifyContent="space-between" mt="40px" mb="40px">
    <Text fontSize="3xl"  fontWeight="bold" >MyFirst Workspace</Text>
    <HStack>
    <i className="fa-solid fa-circle-user"></i>
    <Box bg="#20c933" color="white" h="30px" w="60px" pl="7px" pt="3px" borderRadius="15px" fontSize="sm" > <Text >SHARE</Text></Box>
    
    </HStack>
    
   
  
</HStack>
<Grid1/>
<HStack spacing="3%">

{templatedata.map((el)=><Template data={el}/>)}
</HStack>
    </Box>
  )
}

export default Homesecbody