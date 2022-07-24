import React, { useRef, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Box,
    Text,
    VStack,
  } from '@chakra-ui/react'
  import {sidebardata} from "../displaydata/sidebardata"
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
const Menucomponent = () => {
    let[value,setvalue]=useState(false)
    let ref=useRef(null)
  return (
    <Box>
<Box>
    <Text color="#979797" _hover={{color:"black"}}  fontSize="sm"><ChevronRightIcon fontSize="lg"  ref={ref} onClick={()=>{
        setvalue(!value)
        console.log(value)
        value ? ref.current.style.transform = "rotate(0deg)" : ref.current.style.transform = "rotate(90deg)"
        }}/>Learing and Resources</Text>
   { value &&<VStack>
{
    sidebardata.map((el)=>{
        return<Box  mb="0px" mt="0" pl="15px"   h="30px" w="100%" _hover={{bg:"#efefef",cursor:"pointer"}} fontSize="12px" >{el}</Box>

    })
}
    </VStack>
}
</Box>
    </Box>

  )
}

export default Menucomponent

