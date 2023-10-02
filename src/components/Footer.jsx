import React from 'react'
import logo from "../assets/msLogo.png"

const Footer = () => {
  return (
    <footer class="bg-zinc-800 mt-10 flex py-16 bottom-[100vh] w-full">
        <img class="px-28 h-20 w-26" src={logo}/>
        <div className="flex gap-2 justify-center items-center text-white text-xs font-semibold">
        <p href={"/"}>Acerca de Valve</p> |
        <p href={"/"}>Steamworks</p> |<p href={"/"}>Empleo</p> |
        <p href={"/"}>Distribucion de Steam</p> |
        <p href={"/"}>Tarjetas de regalo</p> |
        <p href={"/"}>Steam</p> |<p href={"/"}>@steam</p>
      </div>
  </footer>
  )
}

export default Footer;