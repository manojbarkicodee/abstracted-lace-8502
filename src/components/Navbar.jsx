import React, { useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Button,
    HStack,
    Image,
    Link,
    VStack,
} from '@chakra-ui/react'
import { ChevronRightIcon } from "@chakra-ui/icons"
// import Modal from './Modalnavbar'
import { Navabardata, navbardata } from "../displaydata/Navbar"
import Modalnavbar from './Modalnavbar'
import { useRef } from 'react'
import Navbaricon from './Navbaricon'
const Navbar = () => {
    let [state, setstate] = useState(false)
    let icon = useRef(null)
    console.log(state)
    return (
        <div>
            <VStack position="fixed" top="0px" w="100%" zIndex="67" bg="white" h="100px">
                <HStack p="10px" spacing="200px" w="100%" bg="white">
                    <HStack width="60%" bg="white"  >
                        {
                            !state && <Image h="80px" spacing={"20px"} src="data:image/png;base64,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" alt="" />

                        }

                        <Breadcrumb bg="white" spacing="10px" separator="" fontSize="16px" fontWeight="bold">
                            {/* <BreadcrumbItem> */}
                            {
                                navbardata.map((el, index) => {
                                    return (<BreadcrumbItem bg="white">
                                        <Modalnavbar icon={icon} category={el} setstate={setstate} state={state} index={index} />
                                        {
                                            index !== 2 && <Navbaricon icon={icon}/>
                                        }

                                    </BreadcrumbItem>)
                                })
                            }



                        </Breadcrumb>

                    </HStack>
                    <HStack spacing="20px" width="30%">
                        <Button border="2px solid grey" fontSize="lg" bg="white">contact sales</Button>
                        <Button bg="blue" textColor="white">sign up for free</Button>
                        <Link >sign up</Link>

                        {/* <Link></Link> */}
                    </HStack>
                </HStack>
            </VStack>
        </div>
    )
}

export default Navbar