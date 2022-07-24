import { AddIcon } from '@chakra-ui/icons'
import { GridItem,Grid, Text } from '@chakra-ui/react'
import React from 'react'
import {griddisplaydata} from "../displaydata/griddisplaydata"
const Grid1 = () => {
  return (
    <div >
        <Grid pl="10px" pr="10px" mb="100px"  templateColumns='repeat(6, 1fr)' gap="55px">
        {griddisplaydata.map((el,index)=> <div key={index}> <GridItem w='100%' pl="20px" pt="18px" borderRadius="10px" h='90px' bg={el} fontSize="4xl" color={index===griddisplaydata.length-1 ?"black":"white"}>{index===griddisplaydata.length-1 ?<AddIcon/>:"UN" }</GridItem><Text textAlign="center" fontSize="sm"> {index===griddisplaydata.length-1 ?"Add base":"Untitled base" }</Text></div> )}
 
</Grid>
    
    </div>
  )
}

export default Grid1