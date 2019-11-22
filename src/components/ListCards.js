import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";


 

export default function ListCards(){
    const [nasa, setNasa] = useState([]);

    useEffect(() =>{
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=CKbvpwifQ4Bf131tEGPhJS8WmfOv8TrEPh3YlKYg")
            .then(response => {
                console.log(response.data);
                setNasa(response.data);
        })
            .catch(error => {
                console.log(error);
            });
    }, []);

console.log(nasa);

    return (
        <div className="space">
            {
                <NasaCard
                 date = {nasa.date}
                 hdurl = {nasa.hdurl}
                 content= {nasa.explanation}
               
                />

            }           
        </div>
    );
 }