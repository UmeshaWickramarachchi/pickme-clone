import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native'
import React from 'react'


const data=[
    {
        id: "123",
        title:"Rides",
        image:"@/assets/images/yellow-hatchback-car-yellow-background-vector.png"

    }
]
const NavOptions = () => {
  return (
    
    <TouchableOpacity>
      <Image
      style={{ width:120, height: 120, resizeMode: "contain"}}
      source={require('@/assets/images/yellow-hatchback-car-yellow-background-vector.png')}
      />
    </TouchableOpacity>

    

    

    
  )
}



export default NavOptions

const styles = StyleSheet.create({})