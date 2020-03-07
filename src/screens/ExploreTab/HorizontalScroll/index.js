import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Wrapper, Card, CardInfo, Image, Header, Title, Author } from './styles'
import PropTypes from 'prop-types'

class HorizontalScroll extends Component {
  constructor(props) {
    super(props)
  }

  onCardPressed(manga) {
    console.log(manga)
  }

  renderCard(manga, index, data) {
    const { attributes } = manga

    return (
      <Card
        key={manga.id}
        first={index === 0}
        last={index + 1 === data.length}
        onPress={this.onCardPressed.bind(this, manga)}
      >
        <>
          <Image source={{ uri: attributes?.posterImage?.medium, height: 201, width: 142 }} />
          <CardInfo>
            <Title>{attributes?.titles['en_jp']}</Title>
            <Author>{attributes?.titles['en_jp']}</Author>
          </CardInfo>
        </>
      </Card>
    )
  }

  render() {
    return (
      <Wrapper>
        <Header>{this.props.title}</Header>
        <ScrollView contentContainerStyle={{ paddingVertical: 16 }} horizontal={true}>
          {this.props.data?.map(this.renderCard.bind(this))}
        </ScrollView>
      </Wrapper>
    )
  }
}

HorizontalScroll.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
}

export default HorizontalScroll
