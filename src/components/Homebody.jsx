import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Homebody = () => {
  let vedio = useRef(null)
  let vedio1 = useRef(null)
  let vedio2 = useRef(null)
  let navigate=useNavigate()
  useEffect(() => {
    // console.log(vedio.current)
    vedio.current.play()
    vedio1.current.play()
    vedio2.current.play()
    // vedio.current.loop
  }, [])

  return (
    <div    >
      <Box position="relative" top="100px" >
        <Flex bg="#ebf7fc" flexDirection="horizontal" w="100%" h="650px" >
          <Box w="55%" letterSpacing="0.01px" wordSpacing="0.01px" p="80px 0px 0px 80px"  >
            <Heading as="h5" size="4xl" >everything.</Heading>
            <Heading as="h5" size="4xl">Achieve.</Heading>
            <Heading as="h5" size="4xl">anything.</Heading>
            <Box mt="30px" lineHeight="1px" letterSpacing="0.01px" wordSpacing="0.01px">
              <Heading as="h6" size="lg">Accelerate work and unlock potential with </Heading>
              <Heading as="h6" size="lg"> powerful apps that connect your data</Heading>
              <Heading as="h6" size="lg">workflows and teams</Heading>
            </Box>
            <Button onClick={()=>navigate("/signup")} mt="30px" w="280px" fontSize="25px" p="5px" bg="blue" textColor="white">sign up for free</Button>
          </Box>
          <Box w="45%" >
            <video width="100%" height="200px" className='vedio' style={{ marginTop: "80px" }} ref={vedio} autoplay muted preload='auto' playsinline loop  >
              <source src="https://static.airtable.com/images/homescreen/Homepage_Hero_FINAL.mp4" ></source>
              Your browser does not support the video tag.
            </video>

          </Box>
        </Flex>
        <Box textAlign="center" pt="60px" lineHeight="35px" h="400px" >
          <Heading as="h2" size="4xl">Create solutions that</Heading>
          <Heading mb="20px" as="h2" size="4xl">mirror your business</Heading>
          <Text fontSize="xl">Move work forward faster with no-code apps that perfectly match</Text>
          <Text fontSize="xl">your team's agility and scale</Text>
        </Box>
        <Flex bg="#faf2f4" flexDirection="horizontal" w="100%" h="650px" >
          <Box w="45%" letterSpacing="0.01px" wordSpacing="0.01px" p="80px 0px 0px 80px"  >
            <Heading as="h4" size="2xl" >Unite every</Heading>
            <Heading as="h4" size="2xl">stream of work</Heading>
            <Heading as="h4" size="2xl">anything.</Heading>
            <Box height="100px" mt="30px" >
              <Text fontSize="lg">Create a single source of truththat's tailored</Text>
              <Text fontSize="lg">precisely to how your teams work. Include</Text>
              <Text fontSize="lg">everything you need, nothing you don't.</Text>
            </Box>
            <Text fontSize='xl' color="#1f64ca" fontWeight="bold" >Explore the product<ArrowForwardIcon color="#1f64ca" /></Text>
          </Box>
          <Box w="55%" pt="80px">
            <video className='vedio' mt="80px" style={{ height: "450px", width: "100%" }} ref={vedio1} autoplay muted preload='auto' playsinline loop  >
              <source src="https://static.airtable.com/images/homescreen/Homepage_Anim_02_Unite_FINAL.mp4" ></source>
              Your browser does not support the video tag.
            </video>

          </Box>
        </Flex>
        <Flex bg="#faf2f4" flexDirection="horizontal" w="100%" h="650px" >
          <Box w="55%" pt="80px">
            <video className='vedio' mt="80px" style={{ height: "450px", width: "100%" }} ref={vedio2} autoplay muted preload='auto' playsinline loop  >
              <source src="https://static.airtable.com/images/homescreen/Homepage_Anim_03_TurnInformation_FINAL.mp4" ></source>
              Your browser does not support the video tag.
            </video>

          </Box>
          <Box w="45%" letterSpacing="0.01px" wordSpacing="0.01px" p="80px 0px 0px 80px"  >
            <Text mb="30px" p="0px 7px 0px 9px" borderRadius="10px" color="white" w="55px" fontSize="lg" bg="#6b1cb0">Beta</Text>
            <Heading as="h4" size="2xl" >Interface with</Heading>
            <Heading as="h4" size="2xl">work in a new</Heading>
            <Heading as="h4" size="2xl">way</Heading>
            <Box height="100px" mt="30px" >
              <Text fontSize="lg">Create custom interfaces that give each and</Text>
              <Text fontSize="lg">every teammate the relevant information</Text>
              <Text fontSize="lg">they need a,and a simple way to take action</Text>
            </Box>
            <Text fontSize='xl' color="#1f64ca" fontWeight="bold" >Learn more about interface Designer<ArrowForwardIcon color="#1f64ca" /></Text>
          </Box>

        </Flex>
        <Box>
          <Flex bg="#faf2f4" flexDirection="horizontal" w="100%" h="300px">
            <Box w="55%" letterSpacing="0.01px" wordSpacing="0.01px" p="80px"   >
              <Heading as="h4" size="2xl" >Bring all your</Heading>
              <Heading as="h4" size="2xl">data together</Heading>
            </Box>
            <Box height="100px" mt="30px" w="45%" p="50px" >
              <Text fontSize="lg">All your inormation. Always up todate. At your fingertips.</Text>
              <Text fontSize="lg">Keep everything in async across organization.</Text>
              <Text fontSize='xl' color="#1f64ca" fontWeight="bold" mt="30px" >Learn about Sync<ArrowForwardIcon color="#1f64ca" /></Text>

            </Box>

          </Flex>
          <Box>
            <Image src="https://static.airtable.com/images/homescreen/homepage-sync.jpg"></Image>
          </Box>
        </Box>
        <Box bg="#faf2f4" pl="200px" pr="50px">
          <Flex flexDirection="horizontal" w="100%" h="300px" >
            <Box w="55%" lineHeight="10px" letterSpacing="0.01px" wordSpacing="0.01px" p="80px"   >
              <Heading as="h4" size="2xl" >Trusted by</Heading>
              <Heading as="h4" size="2xl">teams from all</Heading>
              <Heading as="h4" size="2xl">industries</Heading>
            </Box>
            <Box height="100px" mt="30px" w="45%" p="50px" >
              <Text fontSize='xl' color="#1f64ca" fontWeight="bold" mt="120px" >Read all customer stories<ArrowForwardIcon color="#1f64ca" /></Text>

            </Box>

          </Flex>
          <Flex>
            <Box w="45%">
              <Image h="600px" w="100%" src="https://static.airtable.com/images/homescreen/homepage-bakerhughes-portrait.jpg"></Image>
            </Box>
            <Box w="43%" pl="50px" bg="white">
              <Image m="30px 0px 30px 0px" w="180px" src="https://static.airtable.com/images/homescreen/BakerHughes-logo.png"></Image>
              <Text fontSize="2xl" w="380px" textAlign="left" fontWeight="semibold" mb="30px">"A business transformation is really just a series of smaller changes rolling out one after the other.it's about getting the right information to people when thry need it. What started as an Aurtable calendar very quickly became the solution that we use to manage everything."</Text>
              <Text fontSize="xl" fontWeight="semibold">Stephanie Hartgrove</Text>
              <Text fontSize="xl" mb="40px">VP of Global Communications, Baker Hughes</Text>
              <Text color="#1f64ca" fontSize="lg">Watch video<ArrowForwardIcon color="#1f64ca" /></Text>
            </Box>
          </Flex>
        </Box>
        <Box textAlign="center">
          <Heading m="auto" as="h2" size="3xl" lineHeight="70px" pt="80px" pb="20px" w="800px">300,000+ innovative companies use Airtable every day. Join them.</Heading>
          <Button onClick={()=>navigate("/signup")} mt="30px" w="280px" fontSize="25px" p="5px" bg="blue" textColor="white">sign up for free</Button>
          <Text display="block" m="20px" fontSize="lg" fontWeight="semibold">No credit card needed</Text>
        </Box>
      </Box>
    </div>
  )
}

export default Homebody