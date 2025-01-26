import {useState,useEffect} from 'react'
import "./index"
const Card = ({name, flag}) => {
  return (
    <>
    <div className='container'>
    <div className='flag'>
        <img
          src={flag}
          alt={`Flag of ${name}`}
          style={{
            width: "100px",
            height: "100px",
          }}
          />
          <h3>{name}</h3>
    </div>
    </div>
    </>
    
    
  );
};

function Countries(){
  const API_ENDPOINT="https://xcountries-backend.azurewebsites.net/all"
  const [countries, setCountries]= useState([]);
  console.log({countries});

  useEffect(()=>{
    fetch(API_ENDPOINT)
    .then((res)=> res.json())
    .then((data)=>setCountries(data))
    .catch((error)=>console.log("Error fetching data:", error));
  }, []);

  return(
    <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
      {countries.map(({abbr, flag, name})=>(
        <Card key={abbr} flag={flag} name={name}/>
      ))}
    </div>
  )
}

export default Countries
