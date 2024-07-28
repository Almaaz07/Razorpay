import { VStack ,Image , Text,Button} from '@chakra-ui/react'
import React from 'react'

const Card = ({amount , img , CheckOut}) => {
  return (
    <VStack>
      <Image src={img} />
      <Text> {amount} </Text>
        <Button onClick={()=>CheckOut(amount)}>Buy now</Button>
    </VStack>
  )
}

export default Card
