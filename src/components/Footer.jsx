// import React from 'react'
import React, { useState } from 'react'
import { footerdata } from "../displaydata/Footerdata"
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
  Box,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon } from "@chakra-ui/icons"
// import Modal from './Modalnavbar'
import { Navabardata, navbardata } from "../displaydata/Navbar"
import Modalnavbar from './Modalnavbar'
import { useRef } from 'react'
const Footer = () => {
  return (
    <div style={{ display: "block", position: "relative", top: "100px", padding: "0px 50px 0px 50px" }} >
      <HStack borderBottom="2px solid #e0e2e6" spacing="300px" w="100%" bg="white">
        <HStack width="60%" bg="white"  >
          {
            <Image h="80px" spacing={"20px"} src="data:image/png;base64,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" alt="" />

          }

          <Breadcrumb bg="white" spacing="10px" separator="" fontSize="16px" fontWeight="bold">
            {/* <BreadcrumbItem> */}
            {
              navbardata.map((el, ind) => {
                return (<BreadcrumbItem bg="white" key={ind}>
                  {/* <Modalnavbar icon={icon} category={el} setstate={setstate} state={state}index={index} /> */}
                  {
                    // index !== 2 && <ChevronRightIcon color='gray.500' ref={icon} />
                  }
                  <BreadcrumbLink>{el.tagline}</BreadcrumbLink>
                </BreadcrumbItem>)
              })
            }



          </Breadcrumb>

        </HStack>
        <HStack spacing="30px" fontSize="20px" >
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-twitter-square"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
        </HStack>
      </HStack>
      <HStack spacing="130px" mt="70px" mb="50px">
        {
          footerdata.map((el,i) => {
            return <Box key={i}>{
              el.map((name, index) => {
                return <Text key={name} fontWeight={index === 0 && "semibold"} fontSize={index == 0 && "lg"} lineHeight="40px">{name}</Text>
              })
            }</Box>
          })
        }


      </HStack>

    </div>
  )
}

export default Footer