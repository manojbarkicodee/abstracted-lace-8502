import { ArrowUpIcon,AddIcon,CalendarIcon } from '@chakra-ui/icons'
import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Template = ({data}) => {
    // let x=data.icon
  return (
    <VStack   width="33%" pt="50px" pl="15px" pr="15px"  height="300px" _hover={{bg:"#cccccc"}} borderRadius="10px" border="1px solid #cccccc">
        <Box width="100px" h="100px" borderRadius="10px" bg="#d1f7c4" _hover={{border:"2px solid green"}} pt="15%" pl="18%">
            {
data.icon==="AddIcon" && <AddIcon color="green" fontSize="lg"/> || data.icon==="ArrowUpIcon" && <ArrowUpIcon  color="green" fontSize="lg"/> || data.icon==="CalendarIcon"  && <CalendarIcon  color="green"  fontSize="lg"/>
            }
            
        </Box>
        <Box textAlign="center" >
            <Text mt="10px" mb="10px" fontSize="lg" fontWeight="semibold">{data.title}</Text>
            <Text fontSize="sm" >{data.sub}</Text>
        </Box>
    </VStack>
  )
}

export default Template