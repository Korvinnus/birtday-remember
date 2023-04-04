import React from 'react'
import Person from './Person';

const List = ({banana}) => {
  return (
    <section>
        {banana.map((person) => {
            return <Person key={person.id} {...person}/>;
        })}
    </section>
  )
}

export default List

