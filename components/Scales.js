import React from 'react'
import { Container, Header, Content, List, ListItem, CheckBox, Text, Body, Input } from 'native-base'

import { connect } from 'react-redux'

import { toggleComplete } from '../actions'

class Scales extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(JSON.stringify(this.state))
    return (
      <Container>
        <Header />
        <Content>
          <List
            dataArray={this.props.scales}
            renderRow={(scale, _, index)=>
            <ListItem>
                <CheckBox checked={scale.done}
                  onPress={() => this.props.toggleComplete(Number(index))} />
                <Body>
                  <Text>{scale.name}</Text>
                </Body>
            </ListItem>}/>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    scales: state.scales
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleComplete: (index) => {dispatch(toggleComplete(index))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scales)
