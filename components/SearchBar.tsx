"use client";

import Image from "next/image";
import {SearchMenufacturer} from "./";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchButton = ({otherclasses}:{otherclasses:string}) => (

    <button type ="submit" className={`-ml-3 z-10 ${otherclasses}`}>
    <Image src ="/magnifying-glass.svg"
    alt = "magnifying-glass"
    width = {40}
    height = {40}
    />
    </button>

)
const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManuFacturer] = useState("");
  const [model,setModel] = useState("");
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(manufacturer=='' && model==''){
    alert("please fill in the fields")
  }
  updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
}


const updateSearchParams = (model:string,manufacturer:string)=>{
  const searchParams = new URLSearchParams(window.location.search);
  if(model) {searchParams.set("model",model)}
  else {searchParams.delete("model")}

  if(manufacturer) {searchParams.set("manufacturer",manufacturer)}
  else {searchParams.delete("manufacturer")}

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`
  router.push(newPathname)
}
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className='searchbar__item'>
        <SearchMenufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherclasses="sm:hidden"/>
      </div>
<div className="searchbar__item">
  <Image src = "/model-icon.png"
  width = {25}
  height = {25}
  className = 'absolute w-[20px] h-[20px] ml-4' alt = "model" />
  <input type = "text"
  name = "model"
  value = {model}
  onChange={(e) => setModel(e.target.value)}
  placeholder="Tiguan"
  className = "searchbar__input"
  />
   <SearchButton otherclasses="sm:hidden"/>
</div>
<SearchButton otherclasses="max-sm:hidden"/>
    </form>
  )

}

export default SearchBar