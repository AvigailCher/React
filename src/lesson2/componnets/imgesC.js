import img_1 from '../assest/img_1.jpg'
import img_2 from '../assest/img_2.jpg'
import img_3 from '../assest/img_3.jpg'
import img_4 from '../assest/img_4.jpg'
import img_5 from '../assest/img_5.jpg'
import { useState } from 'react'
export default function ImgGallery()
{
    const[img,setImg]= useState([img_1,img_2,img_3,img_4,img_5]);
    const[index,setIndex] = useState(0);
    return(
    <>
       <button id="left" onClick={ setIndex(index--)}> ← </button>
       <img src={img[index]}></img>
       <button id="right" onClick={setIndex(index++)} > → </button>
    </>
    );
}