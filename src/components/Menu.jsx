import React, { useEffect, useState } from 'react'
import { ShopInfo } from '../Info' //1
import Menuitem from './Menuitem'
import axios from "axios"

function Menu(props) {
  const [products, setproducts] = useState([])
  const [filteredproduct, setfilteredproduct] = useState([])


  useEffect(() => {
    const getproduct = async () => {
      try {
        if (props.category === "AllClothes" || props.category === "CLOTHING" || props.category === "ViewAll") {
          const res = await axios.get(`http://localhost:5000/api/products/`);
          setproducts(res.data)

        }
        else {
          const res = await axios.get(`http://localhost:5000/api/products?category=${props.category}`);
          setproducts(res.data)



        }


      } catch (err) {

      }

    }
    getproduct()

  }, [props.category])

  useEffect(() => {
    props.category &&
      setfilteredproduct(
        products.filter((item) =>
          Object.entries(props.filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, props.category, props.filter]);

  useEffect(() => {
    if (props.sort === "newest") {
      setfilteredproduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (props.sort === "asc") {
      setfilteredproduct((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilteredproduct((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [props.sort]);



  return (
    <div className='MenuContainer'>
      <div className='MenuContainerText'>
        <h3 className='MenuTitle heading-tert'>{props.MenuTitle}</h3>
        <div className="select SortBydiv">
          <select onChange={(e) => {
            props.Setsortby(e.target.value)
          }} required className="standard-select SortBy">

            <option value="newest" className='placeholderS' defaultValue="" disabled selected hidden>Sort by Newest</option>
            <option value="desc" >Sort by Price(desc)</option>
            <option value="asc" >Sort by Price(asc)</option>
            <option value="newest" >Sort by Newest</option>




          </select>
        </div>

      </div>
      <div className='MenuItemsCont'>
        {ShopInfo.map((item, index) => {
          return <Menuitem state="1" key={index} getImg={props.getImg} data={item} ></Menuitem>


        })}
      </div>


    </div >
  )
}
// filteredproduct

export default Menu