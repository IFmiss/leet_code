/**
 * 链表数据结构
 */

interface INode<T> {
  val: T,
  next?: INode<T>
}

class Node<T> {
  val: T = null
  next: INode<T>
  constructor(value: T) {
    this.val = value
    this.next = null
  }
}

export default class LinkedList<T> {
  head: INode<any> = null
  constructor() {
    this.head = new Node<string>('head')
  }

  find = (item: T) => {
    let currentNode = this.head
    while (currentNode && currentNode.val != item) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  insert = (value: T, item: T) => {
    const newNode = new Node<T>(value)
    const currentNode = this.find(item)
    console.log(currentNode)
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  display = () => {
    let currentNode = this.head
    while(currentNode.next !== null) {
      console.log('currentNode.val: ', currentNode.val)
      currentNode = currentNode.next
    }
    console.log('currentNode.val: ', currentNode.val)
  }
}