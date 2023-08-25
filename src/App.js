import React, { useState } from 'react';
import NavBar from './component/NavBar';
import { Header } from './component/Header';
import Container from 'react-bootstrap/Container';
import { Category } from './component/Category';
import { ItemsList } from './component/ItemsList';
import { items } from './Data';

export const App = () => {
  const [itemdata, setitemdata] = useState(items)
  const allcategory = ['الكل', ...new Set(items.map((i) => i.category))]
  //fillterbycategory
  const fillterbycategory = (cat) => {
    if (cat === 'الكل') {
      setitemdata(items)
    } else {
      const newArr = items.filter((item) => item.category === cat)
      setitemdata(newArr)
    }
  }
  
  //filter by search form
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((i) => i.title === word)
      setitemdata(newArr)
    }
  }
  return (

    <div className='font'>
      <NavBar filterbySearch={filterbySearch} />

      <Container  >
        <Header />
        <Category fillterbycategory={fillterbycategory} allcategory={allcategory} />
        <ItemsList itemdata={itemdata} />
      </Container>

    </div>
  )
}
export default App;