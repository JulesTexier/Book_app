import React from 'react';

const Menu = ({handleMenu}) => {

  var array = []

  for(var i=0;i<localStorage.length; i++) {
    var item = localStorage.getItem(localStorage.key(i));
    console.log(localStorage.key(i) , item)
    array.push([localStorage.key(i), item])
  }

  console.log(array)

  return (

  <div>
    <h3> Mes notes </h3>
    <ul>
      {array.map((element, index) => (
    <li key={index}>
    <h3>{element[0]}</h3>
    <p>{element[1]}</p>
    </li>
    ))}
    </ul>
  </div>
  )
}


export default Menu