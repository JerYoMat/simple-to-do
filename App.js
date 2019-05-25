import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import Button from './components/Button';


let todoIndex = 0

class App extends Component {

  constructor () {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
   
    this.submitTodo = this.submitTodo.bind(this)
  }

  inputChange (inputValue) {
    this.setState({ inputValue })
  }

  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) return
    let todo = { title: this.state.inputValue, todoIndex: todoIndex, complete: false }
    todoIndex++
    this.state.todos.push(todo)
    this.setState({ todos: this.state.todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    })
  }



  render () {
    const { todos, inputValue } = this.state
    return (
      <View
        style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
          <Button
            submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1
  },
  content: {
    flex: 1
  }
})

export default App