import React from 'react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  CloseButton,
  useDisclosure,
  // Lorem,
  Button,
  BreadcrumbLink,
  VStack,
  Box,
  Heading,
  Text,
  Stack,
  Slide
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'
const Modalnavbar = ({ category, icon, index,setstate }) => {
  const { isOpen, onOpen, onClose,onToggle } = useDisclosure()
  // const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  const btnRef = React.useRef(null)
  
  console.log(btnRef)
  console.log(category.subcategories)

  return (
    <>


      <BreadcrumbLink bg="white" isCurrentPage textDecoration="none" ref={btnRef} onClick={() => {
        index !== 2 &&   onOpen()
       

setstate(true)
        icon.current.style.transform = "rotate(90deg)"
        console.log(category)
      }} as={Link} to="#">{category.tagline}</BreadcrumbLink>
      {/* <Slide direction='left' in={isOpen} style={{ zIndex: 10 }}> */}
      
      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={"inside"}
        placement="left"
      >

        <DrawerOverlay top="18%" p="0px"  >


<Stack>
          <DrawerContent  mt="7.5%"  minW="50%" borderRadius="none" minH="450px" >
            <CloseButton ml="100%" onClick={() => {
              onClose()
setstate(false)
              console.log("hello")
            }}></CloseButton>
            <DrawerBody top="18%" >
              {
                category.subcategories.map((el) => {
                  return <Stack direction="column" mt="20px" mb="30px" justify="left">
                    <Heading as="h2" size='md'>{el.heading}</Heading>
                    <Text size="md">{el.text}</Text>
                  </Stack>
                })
              }
              <Stack h="180px" mt="100px" spacing="20px" pt="20px" width="100%" bgColor="#f0f6ff">
                <Heading as="h2" size='md'>{category.footer.heading}</Heading>
                <Text size='md'>{category.footer.text}</Text>
                <Text size='md' color="#1f64ca" fontWeight="bold" >{category.footer.end} <ArrowForwardIcon color="#1f64ca" /></Text>

              </Stack>
            </DrawerBody>
           
          </DrawerContent>
          </Stack>
        </DrawerOverlay>
      </Drawer>
      {/* </Slide> */}
    </>
  )
 
}

export default Modalnavbar