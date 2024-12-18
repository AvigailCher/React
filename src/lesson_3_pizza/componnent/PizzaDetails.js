import {useState,useEffect} from "react"

export default function Server()
{
    const[items,setItems]=useState([]);
    useEffect(()=>{
        const pizzapost=async()=>{
            try {
                const responsae = await fetch('http://localhost:5181/WeatherForecast')
                const data=await responsae.json();
                setItems(data);
            }
            catch (error) {
                console.error('error: ', error);
            }
        };
        pizzapost();

    },[]);
    return(
        <> {
           items.map(item=>(
            <div>
            <p> {item.Date}</p>
            <p> {item.TemperatureC}</p>
            <p> {item.TemperatureF}</p>
            <p> {item.Summary}</p>
            </div>
           )
           )}
        </>
    );
}