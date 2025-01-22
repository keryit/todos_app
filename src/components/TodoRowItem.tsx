/* function TodoRowItem({ rowNumber, rowDescription, rowAssigned }) {
  return (
    <tr>
      <th scope='row'>{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>
    </tr>
  )
} */

import React from "react"

export const TodoRowItem: React.FC<{
  rowNumber: number,
  rowDescription: string,
  rowAssigned: string,
  deleteTodo: Function
}> = (props) => {
  return (
    <tr onClick={() => props.deleteTodo(props.rowNumber)}>
      <th scope='row'>{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>
    </tr>
  )
}
