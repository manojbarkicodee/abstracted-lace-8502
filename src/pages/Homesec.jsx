import { BellIcon, QuestionIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {navbarsecdata} from"../displaydata/Nabarsecdata"
const Homesec = () => {
  return (
    <div>
        <HStack borderBottom="2px solid #e0e2e6" spacing="300px" w="100%" bg="white">
        <HStack width="60%" bg="white" pl="100px" >
          {
            <Image h="50px" spacing={"20px"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAABDlBMVEX///8YHSYYv//8tAAAAADiLFsACxgAAAOAgYXiLlwVGiR2d3vIycv8sgADvf/8sAAIEBxz0//JJVAAAAjiIFbw8PBBREkQFiEbISr3+PjAwcNnam4AAA7X2NqLjI7i4uMsMDcAABJZW2BOUVbRJlK2t7nBJU799ej9+/Wpqqyen6G3uLpFSE0zNj2Vlpn704n8wkr72Zz8uB/868/8xlzy+//7vTz95bvkjp/l9/+b3v9kZmv88t/83qr7ym7+7Mr90Hf74LH70IHhdo3SVnLvnK757e7N7v89xv/nYX/aDUryy9O8AD/foKzLBkWG2f+35//PNl1fzf/tt8Duz9TReIvhC0zlUHL20dfob4nnH9zRAAAKmUlEQVR4nO2aDXvaOBKAIREmGAIOBgyJwRiStCaQtN1+XJO2d912t91uLtt2e729//9HTtJItiTbYEL3yG3n7ZM+CfLn69FoJFMqIQiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjyl+b+vXvbvoT/F15cPN3d33/04CUaW8X9Z09brf3dXeqrtf/q79u+nDvNvYe7XJVgv/Xg5bYv6c7y7FVLdQW+dv/xYtvXdQe5//CRqQpotR5gh9R58Wo/25UIsIeY8SUss+eqEr5amPE5Ly52V7gSwh493Palbh2W2Verkh3yu874uZk9X9jTZ/e3fdXbYWlmXxJgF99fgN1/uSqz5/v67jL+xS3CShX26PW27+B/yOuimT3fV+HuGIx7jHEj3TSsT68Ov+V9zeZTyryb0zzklzI+WfOo38BW4XJ15HsM6yrVckYszyF7a177Mur8XCTIaW4Q1hyufcb0jHA9V/vFay/HLnNS99ANeQvJCLrbUrcyzyRpVFmztf7zubdu8aC6evqyeBlx5oKscnhutETQ4hwt2TvwxpTyrODJ/ixblB8e3yLAaFj9+MM6Z+l5wpY9NlpmIdiaLNl7SGxKOCp4sj/R1i0CrNV6+nq96nRIyhJypjedQdPSi4fdre3ZGrx5+9PP8V9rBBgNq4skrN4d7Lx/svpse1ZsKxVEC4eFXO69MbZu65cP7Zv2m1/jv4sFGK1JHyRh9fzyfbO507xcebKBb5eT4DLuIlgQnzhLk/zWbXU6ndP28fXxP5UAWzUHouXoRVIyvPtMVVGaBytPFvnQ2+zsm25Eh4Ol+2/fVqXSabeP29c3SoAtmwjRsHr8LN7y+W874KqQrYUH19dnumxnjcsEtm+rVutUjqmv0+ObT2oG+zEzwLSwevLxvVRVyBbcrDcvjfj4556t2iH7ANuNLRpdFaaLdsibt7/HLekAM8LqYEdxVcTWEcvjZT8qBVLbmtwNW5UO7Y2nbcb1p7/lBJgeVpfvNVVFbIkcT+i8be4tvQ+N7uFMpn5hy7y/QWO2d7QXDc09VVvdRhRFJw01L2baGp6cj0azs5wro7ZoX6S9keYuGl3M17URYK19Smv3cbIw8+7AVFXE1syPi3VI91Zdbd6bMKCUv2K/Ttl8dzjxq6QuPlqIITXZkG1RD0loOVZI+mx+UO/NKVPdVnBkET8M6Zh7lDhN2wr2+nQzywpdMj7PGnA6tQr7R6OLdsW2+LlpKwF27+Wrx48vnhn1QpqVtvoQWmyZocvDzPbVK+pZDsVjH3UJ+9Wn9zEjDlgdsI9k/cFaiZRMLPmx7Y+D0tjhc2XN1izexnbIkVyTMG0N6smh6LGcKMMW64i1GuuNNLBOj2mEndKfG5rBMkfzj58zVRWw1eDdyC7zP+oyhSm2WO+0+2BL3MeMyBgcJLMAwIc7nPvqh144WCTjrbDVHWn7Ws4w01bQD7UT2BnrIZC3WHzR6OKxxfM9/U8LMECpF9a3deUoKRrUeb2ltkaBmA3l21pY+qfONGXLmvn6Nl4YZNgKHDGFpTNRsSFJDScdIYv9sKGxzdM9lBTXWoDp9cLatsBAnNlFt1Qyc4YtGESFLdq/4i5n2x7vifU4HGzRCv+rtsqW2s634SfRbQ3GXJbtk8ViHIo5R2r5qCNlQfLito5heGQRdnMsM/7BkrAqYgvWGOKq4TyUHnJteRO4Ac9nW01p6gbFZW/BKCmTdIf05/NxNQ40zRbbg9i9+diVf8MKoGZrxAPQ8yKW1bpRnz8nb5y2JV3B0Mj7oogxpu0GoutyuarVtuBO40wVVOFRJrGbslWmH9hhtT+fyp3MvAydm8bAZMh2C+okTuaareqUlw7ByIfeZodd42iiAhzLEWAAS0vEWPnuQNKCgVHk+rYMLZbAPsF2BxvaaoiOGNuBkstPVvbSttizPg+UwcaoTuVmJF5aH4ro02258UkC6G+wFqnagtmFUgAG8fhi2AJRNbBVYbPshOu3P38bWxAGysroiQudapktb6G/gTBsiYVYEplb6LZ8ZZk2gPVsb2rY4mODVqjynGn72bZojq/JwqsNAyPthW+/yO02tCVGN1dJm7axDp+2ZftGSW3YgtUybWAVhlRb+iot5Muy39VswQnDWWkgKY2ypk0dpRvWwBxLXnREbN+8+SPZbkNbEOn0Rs9OgLMI+oQTv/xJ20pNCA1bU+jM2iuuoWva0t8AdEU8DjVbh+KlQD/BibdTbVVUWzU5NJ7eXL/5om63oa2ySL+WKwlFaiKys6VtEXPmZ9gS0ak/fsust6p6GQCzJ/dQsxWJq7ETRMrT10mU2KrJuqtS+frhX0Zlupmts2o5j/jRp2zB70tswTyF6Ft5qVpetzmJA1KxNQszroxvp09/1NiiqUsk+lQVv6GtuZdzNUpaSddbPfMwRWyNU7b0CJ04+bZC14Tob+M6SWQJZ1muNrQVmNMWFVnTpG1NV9jysnpiaNpy9ZoJ1m+Nngi2rNlhCv1RJBUE9MSvtZ8yZ9Mb2YLxRc0KSm6QeX59W5P01Dwjy+tjRRcmjZlZvppaITPpaJH1tfZ7znab2Bq4MHmzxzoi9YvgWN8WPAS7r24CU0utggjVxy8qiFCvIIKCi7KdShJZ+a42syWqyKr5BZoAPhfvnovbkkWkGPeV+YCcMuizanW9z8+uTuHkllYMR+n3Bp3E1b/zXW1mC1KFbacaoGASY19hW7Yjb0rOfOK+2LCyZj7VuOIa9nNmPhBy3kIJwxFJr4SLNYjOclcb2Rrm1Jpy9lN2TwraEqOF16/XeYo5krPqKzarHgR71exZtStn1aEYm7kH1VYXShynL+K/e9IP1WlZYou5+uUPs+Hb2RIXnfHOYgCzNmda0FbJl6EDC3XKio3X6/XJkhUbi7fLGplPlrUVjXN4cDYZ12ezvQmscPnmA651qKv/fCmt4va2xKpn5vswVWQRW0fxChV0rr14WVSu9jlpW5Dr7WQ10Pa6KVulnohT2wpDS5aH5hP+9UOngKtNbInX+X7GSwGZlPkVF7EVF25yBjAPyxrWEa/VtQri3NW3scXcXrc1GBuL1hR3YlZTg4xS9Ha2cr41MhZ1QmYZB7M2m73pKWKrFBElTTMmxFZuzxrDyKHPfPS3GI4sh421xcFcOxTb0PxGXmFW2Go2d37L3rHB33Y5fj2z9Rxa2ajWC+kvlnhDZlH8rL7bWBCftiU3MiNh/OKM0FiYs2bL5bZcfuyADm/xqy+P9GTvgitzk/oiCv1k6d8i05XFai5LbTWbnz/m7RhMjhiT7Le/3Sveyr7LPOK/gtQ9Tva3jYfRiLYld9IdjYnr+z7xp6yHRXxXLjOCg1P/Q/b2lb1V9edJEdWNTy0ZRFOH0EP5LunXN/kCbL4tFlbPNzjyNyA4ZG/t877pzRk0qOTZ2dJtGN3hSRRFh4W+c5BPni0aVu82O/JfkUxbzeb7ywLfn/z+SNtqNpsHGFbZmLZoWH3EsMpDs3UHEvvdRrG1rF5AONIWDatLDKtVgC2sF4px2cR6oThPPu9gvYAgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCPLX5b+7VCmPmgbD8wAAAABJRU5ErkJggg==" alt="" />

          }

          <Breadcrumb bg="white" spacing="10px" separator="" color="#6c6c6c" fontSize="sm" fontWeight="semibold">
            {
              navbarsecdata.map((el, ind) => {
                return (<BreadcrumbItem bg="white" key={ind} _hover={{textDecoration:"none"}} >
                 
                  <BreadcrumbLink>{el}</BreadcrumbLink>
                </BreadcrumbItem>)
              })
            }



          </Breadcrumb>

        </HStack>
        <HStack spacing="10px"  fontSize="sm" color="#6c6c6c">
            <Text >HELP</Text>
            <QuestionIcon/>
            <BellIcon fontSize="md"/>
            <i className="fa-solid fa-circle-user"></i>
          
        </HStack>
      </HStack>
      <HStack pl="100px" pr="100px">
        <Box w="30%" height="600px" border='1px solid black' position="fixed" top="53px">hdjdjd</Box>
        {/* <Box w="60%" height="900px" border="1px solid black">jddkkdkk</Box> */}
      </HStack>
    </div>
  )
}

export default Homesec