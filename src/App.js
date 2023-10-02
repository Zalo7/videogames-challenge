import React from 'react';
import { useEffect, useState} from "react";
import axios from 'axios';
import Paginate from "./components/Paginate";
import Rating from "./components/Rating";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/Searchbar';
import Card from './components/Card';



function App() {

  const updateDeals = () => {
    setCurrentDeals(searchList?.slice(indexOfFirstDeal, indexOfLastDeal))
    setUpdateState(!updateState)
  }

const search = (title) => {
    let newList = apiData.filter(e => (e.title).toLowerCase().includes(title.toLowerCase()))
    console.log(newList)
    setSearchList(newList)
  }

    const [apiData, setApiData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dealsPerPage] = useState(6);
  const indexOfLastDeal = currentPage * dealsPerPage;
  const indexOfFirstDeal = indexOfLastDeal - dealsPerPage;
  // const currentDeals = apiData?.slice(indexOfFirstDeal, indexOfLastDeal);
  const [updateState, setUpdateState] = useState(false);
  const [currentDeals, setCurrentDeals] = useState([]);
  const [searchList, setSearchList] = useState(apiData);
  searchList && searchList.slice(indexOfFirstDeal, indexOfLastDeal)[0]?.title !== currentDeals[0]?.title  && updateDeals();
  const [cartList, setCartList] = useState(0);
   


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function cart() {
    setCartList(cartList + 1)
    alert("¡Agregaste un juego al carrito!")
  };


  useEffect(() => {
    axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15').then(response => {
      setApiData(response.data);
      setSearchList(response.data);
     console.log(response.data)
    })
  },[])

  return (
    <div class="bg-black w-full h-full">
      <Navbar cartList={cartList} />
      <SearchBar search={search}/>
      <div class="flex justify-center mt-10">
      <div class="grid grid-cols-3">
      {currentDeals && currentDeals?.map((e, id) => {
        return (<Card title={e.title} thumb={e.thumb} steamRatingPercent={e.steamRatingPercent} normalPrice={e.normalPrice} salePrice={e.salePrice} cart={cart}/>)
      })}
      </div>
      
      {
      searchList && <Paginate
            dealsPerPage={dealsPerPage}
            apiData={apiData.length}
            paginate={paginate}
          />
      }
      </div>
      <Footer/>
    </div>
    
  )
}

export default App