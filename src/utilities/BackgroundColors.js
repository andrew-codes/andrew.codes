import { first, last } from 'lodash'

class OrderedLinkedList {
  constructor(items = []) {
    this.items = items
    this.current = 0
  }

  add = (item) => {
    this.items.push(item)
  }

  set = (index) => {
    this.current = index
  }

  at = (index) => {
    return this.items[index]
  }

  getCurrentIndex = () => {
    return this.current
  }

  next = (item) => {
    if (item) {
      const index = this.items.findIndex((i) => i === item)
      this.current = index
    }
    if (this.current === this.items.length - 1) {
      this.current = 0
      return first(this.items)
    }
    return this.items[++this.current]
  }

  nextTimes = (numberOfTimes) => {
    for (let i = 0; i < numberOfTimes; i++) {
      this.next()
    }
    return this.items[this.current]
  }

  previous = (item) => {
    if (item) {
      const index = this.items.findIndex((i) => i === item)
      this.current = index
    }
    if (this.current === 0) {
      return last(this.items)
    }
    return this.items[--this.current]
  }
}

const BackgroundColors = new OrderedLinkedList([
  'linear-gradient(45deg, #e77842, #f7c068)',
  'linear-gradient(45deg, #b53cff, #f952ff)',
  'linear-gradient(45deg, #23bd38, #41eba9)',
  'linear-gradient(45deg, #ffb040, #ffb040)',
  'linear-gradient(45deg, #f857a6, #ff5858)',
  'linear-gradient(45deg, #327ae7, #6bd0ff)',
])

export default BackgroundColors
