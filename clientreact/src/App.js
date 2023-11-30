import React, {useEffect, useState} from 'react'
import img from './sewing.jpg' // relative path to image 
import tshirtTest from './tshirtTest.jpg' // relative path to image
//import Form from "./components/Form";
//import FormStatus from "./components/FormStatus";

import { Outlet} from "react-router-dom";
function App() {

  const [backendData, setBackendData] = useState([{nom: 'Chargement...', description: 'Chargement...'}])
  //const [itemId, setItemId] = useState(0)
  //?hide and show the description bellow the photo
  //?const [isVisible, setIsVisible] = useState(false);
  //?<p className={isVisible ? 'card-text' : 'card-text text-truncate'} onClick={handleClick}>{article.description}</p>
  //?const handleClick = () => isVisible === true ? setIsVisible(false) : setIsVisible(true);


  const openItemPage = (id) => {
    window.location.href = `/Item/${id}`;

    console.log(id);
  }

  useEffect(() => {
    try{
      fetch('http://localhost:3001/senddatatofront').then(response => response.json()).then((data)=>setBackendData(data))
    } catch (error){
      console.log(error, 'error senddatatofront')
    }
  }, [])
  console.log(backendData)
  console.log("HOME PAGE")
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {(typeof backendData === 'object') ? backendData.map((article, index) => {
        return (
          <div id={index} key={index} className="p-2 article w-25 d-flex flex-column" >
            <h2 className='text-center'>{article.nom}</h2>
            <div className="card">
              <div id={`bwabwa${index}`} className="carousel slide" data-bs-ride="false">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="false">
                    <img className="d-block w-100" src={img} alt="img" onClick={() => openItemPage(index)} />
                  </div>
                  <div className="carousel-item" data-bs-interval="false">
                    <img className="d-block w-100" src={tshirtTest} alt="img" onClick={() => openItemPage(index)} />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#bwabwa${index}`} data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#bwabwa${index}`} data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body" onClick={() => openItemPage(index)}>
                <p className=''>{article.description}</p>
              </div>
            </div>
          </div>
        )
      }) : <p>{backendData}</p> }
      <Outlet />
    </div>
  )
}

export default App