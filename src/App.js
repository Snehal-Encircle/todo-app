import React, { useState, useEffect } from 'react';
import AddIteam from './My component/AddIteam';
import Desk from './My component/Desk';

function App() {
  let initDes;
  if (localStorage.getItem('desk') === null) {
    initDes = [];
  } else {
    initDes = JSON.parse(localStorage.getItem('desk'));
  }

  const onDelete = (des) => {
    console.log('I am onDelete of des', des);
    setDesk(
      desk.filter((e) => {
        return e !== des;
      })
    );
    localStorage.setItem('desk', JSON.stringify(desk));
  };
  const addIteam = (title, desc) => {
    console.log('Add this iteam on Desk', title, desc);
    let sno;
    if (desk.length === 0) {
      sno = 0;
    } else {
      sno = desk[desk.length - 1].sno + 1;
    }
    const myIteam = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setDesk([...desk, myIteam]);
    console.log(myIteam);
  };

  const [desk, setDesk] = useState(initDes);
  useEffect(() => {
    localStorage.setItem('desk', JSON.stringify(desk));
  }, [desk]);

  return (
    <>
      <AddIteam addIteam={addIteam} />
      <Desk desk={desk} onDelete={onDelete} />
    </>
  );
}

export default App;
