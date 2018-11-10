import React, {Component} from 'react'
import { View } from 'react-native'
import { Header, ImageCard } from './src/component/uikit'
import { h, w, url} from './constants'

export default class App extends Component {
  state = {
    title: 'Star Gate',
    data: {}
  }

  componentDidMount = async () => {
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ data })
  }

  render() {
    console.log('h, w', h, w)

    return (
      <View>
        <Header title={this.state.title} />
        <ImageCard />
      </View>
    )
  }
}
