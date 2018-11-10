// import

import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

// body
const Header = props => {
  const {viewStyle, textStyle} = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#30d0fe',
    justifyContent: 'center',
    height: 116,
    paddingLeft: 22,
    paddingTop: 71,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'AvenirNext-DemiBold',
    color: '#fff'
  }
})

export { Header }
