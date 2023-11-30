import img from '../sewing.jpg' // relative path to image 
import { useParams } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import React, {useEffect, useState} from 'react'

function Item() {
  const { id } = useParams();
  const [backendData, setBackendData] = useState([{nom: 'Chargement...', description: 'Chargement...'}])
  try{
    useEffect(() => {
      fetch('http://localhost:3001/senddatatofront').then(response => response.json()).then(data => {
        if (Array.isArray(data) && data.length > id) {
          setBackendData(data[id]);
        } else {
          // Handle the case where the requested article doesn't exist
          setBackendData({ nom: 'Article not found', description: 'Article not found' });
        }
      }
      )}, [id])
  } catch (e){
    console.log(e, 'sendataID')
  }

  console.log(id);
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <nav>
            <Link to="/">Home</Link>
      </nav>
      <div id={id} key={id} className="p-2 article w-100 d-flex flex-column">
        <h2 className='text-center'>{backendData.nom}</h2>
        <div className="card w-100">
          <img className="card-img-top" src={img} alt="img"/>
          <div className="card-body">
            <p className=''>{backendData.description}</p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Item;