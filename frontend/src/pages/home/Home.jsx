import React, {useEffect, useState} from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommened from './Recommened'
import News from './News'
import axios from 'axios';  // Default import - Correct way

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product`)
      .then((response) => {
        setProduct(response.data.deta); // Potential typo: 'deta' should likely be 'data'
      })
      .catch((error) => {
        console.log(error); // Consider showing a user-friendly error message
      });
  }, []);

  

  return (
    <>
        <Banner/>
        <TopSellers/>
        <Recommened/>
        <News/>
    </>
  )
}

export default Home


