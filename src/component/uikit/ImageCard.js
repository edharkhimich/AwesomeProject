import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { w } from '../../../constants.js'

const ImageCard = () => {
  const { h1, sub, cover, container } = styles
  return (
    <View style={container}>
      <View style={sub}>
        <Image
          style={cover}
          source={{uri: 'https://github.com/react-native-village/react-native-init/raw/master/stargate/images/Stargate.jpg'}}
        />
      </View>
      <Text style={h1}>Image</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: w / 2.4
  },
  sub: {
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    padding: 8
  },
  cover: {
    width: w / 2.4,
    height: w * 0.6,
    borderRadius: 10
  },
  container: {
    width: w / 2.1
  }
})

export { ImageCard }
