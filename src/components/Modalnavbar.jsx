import React from 'react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
 
  DrawerBody,
  CloseButton,
  useDisclosure,
  // Lorem,
 
  BreadcrumbLink,
 
  Heading,
  Text,
  Stack,
  
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { ArrowForwardIcon } from '@chakra-ui/icons'
const Modalnavbar = ({ category, icon, index, setstate, state }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  const btnRef = React.useRef(null)

  // console.log(btnRef)
  // console.log(category.subcategories)

  return (
    <div key={index}>


      <BreadcrumbLink bg="white"  ref={btnRef} onClick={() => {
        index !== 2 && onOpen()


        index !== 2 && setstate(true)
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

        <DrawerOverlay top="16%" p="0px"  >


          <Stack>
            <DrawerContent mt="7.5%" minW="50%" borderRadius="none" minH="450px" >
              <CloseButton ml="105%" borderRadius="50%" bg={state && "white"} onClick={() => {
                onClose()
                index !== 2 && setstate(false)
                console.log("hello")
              }}></CloseButton>
              <DrawerBody top="18%" >
                {
                  category.subcategories.map((el,i) => {
                    return <Stack key={i} direction="column" mt="20px" mb="30px" justify="left">
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
    </div>
  )

}

export default Modalnavbar