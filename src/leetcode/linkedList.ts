/**
 * 链表数据结构
 */

export class Node<T> {
  val: T | null = null
  next: Node<T> | null
  constructor(value: T) {
    this.val = value
    this.next = null
  }
}

export default class LinkedList<T> {
  head: Node<T> | null = null
  constructor() {
    this.head = new Node<any>('header')
  }

  find = (item: T) => {
    let currentNode = this.head
    while (currentNode && currentNode.val != item) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  insert = (value: T, item: T) => {
    // console.log('value', value)
    const newNode = new Node<T>(value)
    const currentNode = this.find(item)
    console.log(currentNode)
    newNode.next = currentNode?.next || null
    currentNode && (currentNode.next = newNode)
  }
}

export function linkToArray<T> (link: Node<T> | null) {
  let arr: Array<T> = []
  const toArray = (item: Node<T> | null) => {
    if (item == null) {
      return
    }

    if (item.val !== null) {
      arr.push(item.val)
      toArray(item.next)
    }
  }
  toArray(link || null)
  return arr
}
