import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'

const Navbaricon = ({icon}) => {
    // let icon = useRef(null)
  return (
    <ChevronRightIcon color='gray.500' ref={icon}/>
  )
}

export default Navbaricon