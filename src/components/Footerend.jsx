import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Footerend = () => {
    return (
        <HStack position="relative" color="#535965" pl="50px" top="120px" fontSize="md" spacing="30px" bg="#f2f4f7" h="50px" w="100%">
            <Text>Security</Text>
            <Text>API</Text>
            <Text>Site map</Text>
            <Text>Privacy</Text>
            <Text>Terms</Text>
        </HStack>
    )
}

export default Footerend