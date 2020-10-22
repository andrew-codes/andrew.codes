class CylicOrderedLinkedList extends Array {
  constructor() {
    super()
    this.cursor = 0
  }

  concat = (items) => {
    const newList = new CylicOrderedLinkedList()
    items.forEach((item) => {
      newList.push(item)
    })
    return newList
  }

  next = () => {
    if (this.cursor === this.length) {
      this.cursor = 0
    }
    return this[this.cursor++]
  }
}

const BackgroundColors = new CylicOrderedLinkedList().concat([
  'linear-gradient(45deg, #e77842, #f7c068)',
  'linear-gradient(45deg, #b53cff, #f952ff)',
  'linear-gradient(45deg, #23bd38, #41eba9)',
  'linear-gradient(45deg, #f857a6, #ff5858)',
  'linear-gradient(45deg, #327ae7, #6bd0ff)',
])

module.exports = BackgroundColors
