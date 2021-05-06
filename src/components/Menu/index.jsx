import React from 'react';

const Menu = ({handleMenu}) => {

  var array = []

  for(var i=0;i<localStorage.length; i++) {
    var item = localStorage.getItem(localStorage.key(i));
    console.log(localStorage.key(i) , item)
    array.push([localStorage.key(i), item])
  }

  function sayHello() {
    if (window.confirm("Souhaitez-vous supprimer les notes?")) {
      localStorage.clear();
      document.location.reload();
    } else {
      alert("annulation");
    }
  }


  return (

  <div>
    <h3> Mes notes </h3>
    <button className="delete" onClick={sayHello}>Supprimer</button>
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