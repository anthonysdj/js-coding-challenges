/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const node = (val, next) => {
    return { val: val, next: next }
}

const createLinkedList = (arrayList, head = null) => {
    if (arrayList.length < 1) return head
    const newNode = node(arrayList.concat().shift(), head)
    return createLinkedList(arrayList.slice(1), newNode)
}

const linkedListToArray = (linkedList, values = []) => {
    if (!linkedList) return values.reverse()
    const newValues = [...values, linkedList.val]
    return linkedListToArray(linkedList.next, newValues)
}

const addTwoNumbers = function (l1, l2) {
    const list1 = linkedListToArray(l1).join("")
    const list2 = linkedListToArray(l2).join("")
    const out = adder(list1, list2);
    const finalOut = out.toLocaleString()
    return createLinkedList(Array.from(finalOut).filter(num => !isNaN(num)));
}

const adder = (input1, input2, total = null, carry = 0) => {
    if (!input1) return carry ? carry.toString() + total : total

    const newInput1 = input1.split("")
    const newInput2 = input2 ? input2.split("") : 0

    const addend1 = parseInt(newInput1.concat().pop())
    const addend2 = input2 ? parseInt(newInput2.concat().pop()) : 0
    const sum = carry + addend1 + addend2
    const newCarry = sum > 9 ? parseInt(sum.toString().charAt(0)) : 0
    const newSum = sum > 9 ? sum.toString().charAt(1) : sum
    const newTotal = total ? newSum.toString() + total : newSum.toString()

    const newInput1_removedLast = newInput1.slice(0,newInput1.length-1).join("")
    const newInput2_removedLast = input2 ? newInput2.slice(0,newInput2.length-1).join("") : 0

    const newInputMax = BigInt(newInput1_removedLast) > BigInt(newInput2_removedLast) ? newInput1_removedLast : newInput2_removedLast
    const newInputMin = BigInt(newInput1_removedLast) < BigInt(newInput2_removedLast) ? newInput1_removedLast : newInput2_removedLast

    return adder(newInputMax, newInputMin, newTotal, newCarry)
}

const ll3 = createLinkedList([2,4,3])
const ll4 = createLinkedList([5,6,4])

const ll1 = createLinkedList([2,4,9])
const ll2 = createLinkedList([5,6,4,9])

const ll5 = createLinkedList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
const ll6 = createLinkedList([4,6,5])

const ll7 = createLinkedList([9,9,9,9,9,9,9])
const ll8 = createLinkedList([9,9,9,9])

const ans2 = addTwoNumbers(ll3, ll4)
