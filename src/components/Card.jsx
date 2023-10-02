import React from 'react';
import Rating from "./Rating";

export default function Card({thumb, steamRatingPercent, normalPrice, salePrice, title, cart}) {

    function show() {
        alert("You clicked on the button, so it triggered the alert box");
      }
return (
    <div class="flex justify-center p-5 hover:border-pink-600 hover:border-x hover:border-y " style={{width:"60%", margin:"auto", height:"350px"}}>
 <div class="mt-10 mb-10">
     <div class="justify-center">
     <img  src={thumb}/>
     <h3 class="font-bold text-white ">{title}</h3>
     <h3 class="text-white mt-5 ">Steam Review</h3>
     <div>
     <Rating steamRating = {steamRatingPercent}/>
     </div> 
     <div onClick={cart}
     class="mt-5 w-32 h-10 rounded bg-gradient-to-r from-orange-400 via-pink-600 to-purple-800 text-white font-bold cursor-pointer hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-pink-600">
        <span class="line-through font-semibold ml-2">{normalPrice}</span>
        <span class="ml-2 font-extrabold text-lg leading-10">{"$"+ salePrice}</span>
     </div>
     </div>
     </div>
 </div>
 )
}