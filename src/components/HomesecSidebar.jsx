import { AddIcon, CheckIcon, DeleteIcon, HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { Box, Button, HStack, Input, InputGroup, InputLeftElement, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Menucomponent from './Menucomponent'

const HomesecSidebar = () => {
  return (
  
        <Box w="23%"  textAlign="justify" height="570px" lineHeight="25px" position="fixed" top="73px">
<Box p="20px" w="100%" h="320px" borderRadius="10px" bg="#d0f0fd ">
    <Text fontSize="md" fontWeight="semibold">Upgdrade to Pro before your trial expires</Text>
    <Text  fontSize="12px">Keep the power you need to manage complex workflows, run reports, and more with tools like:</Text>
    <Text  fontSize="12px"><CheckIcon mr="10px"/>Multiple extensions per base</Text>
   <Text  fontSize="12px"><CheckIcon mr="10px"/>More sync integrations to quickly bring in outside data</Text>
    <Text  fontSize="12px"> <CheckIcon mr="10px"/>More record limits and attachment space</Text>
    <Text  fontSize="12px"><CheckIcon mr="10px"/>Team permissions</Text>
    <Button bgGradient='linear(to-r,#1050df,#8210f9)' h="30px" mt="20px" ml="45%" fontSize="sm" w="150px" color="white">Upgrade</Button>
</Box>
<HStack mt="10px">
<InputGroup h="40px" w="80%" >
    <InputLeftElement
      pointerEvents='none'
      h="40px"
      children={<Search2Icon color='gray.300' fontSize="sm" />}
    />
    <Input type='tel' variant='unstyled'  bg="#efefef" fontSize="sm" placeholder='Find a base or interface' />
    
  </InputGroup>
  <i className="fa-solid fa-grip"></i>
    <HamburgerIcon fontSize="sm"/>
    </HStack>
    
    <HStack pl="15px" _hover={{bg:"#efefef",cursor:"pointer"}} mt="10px" h="40px" w="100%"  >
    <i className="fa-solid fa-grip"></i>
    <Text fontSize="sm">Interface</Text>
    </HStack>
    <VStack  align='stretch' h="130px" overflow="scroll">
        <Text color="black">Work spaces</Text>
    <HStack pl="15px" pt="10px" pb="10px" _hover={{bg:"#efefef",cursor:"pointer"}} mt="10px" mb="0px" h="40px" w="100%"  >
    <i className="fa-solid fa-users"></i>
    <Text fontSize="12px">My First Workspace</Text>
    </HStack>
    <Box mb="0px" pl="15px" pt="10px" pb="10px" h="50px" w="100%" _hover={{bg:"#efefef",cursor:"pointer"}} fontSize="12px" > <AddIcon fontSize="sm" mr="10px" /> add Workspace</Box>
    <Box mb="0px" pl="15px" pt="10px" pb="10px" h="50px" w="100%" _hover={{bg:"#efefef",cursor:"pointer"}} fontSize="12px" > <DeleteIcon fontSize="sm" mr="10px" />Trash</Box>
    <Menucomponent/>
    </VStack>
        </Box>
     
  )
}

export default HomesecSidebar