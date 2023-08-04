'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { SearchManufacturer } from '.'
// import { useRouter } from 'next/navigation'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = ({ setManufacturer, setModel }: any) => {
  const [searchManufacturer, setSearchManufacturer] = useState('')
  const [searchModel, setSearchModel] = useState('')
  //   const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar')
    }

    // updateSearchParams(
    //   searchModel.toLowerCase(),
    //   searchManufacturer.toLowerCase()
    // )
    setManufacturer(searchManufacturer)
    setModel(searchModel)
  }

  //   const updateSearchParams = (
  //     searchModel: string,
  //     searchManufacturer: string
  //   ) => {
  //     const searchParams = new URLSearchParams(window.location.search)

  //     if (searchModel) {
  //       searchParams.set('model', searchModel)
  //     } else {
  //       searchParams.delete('model')
  //     }

  //     if (searchManufacturer) {
  //       searchParams.set('searchManufacturer', searchManufacturer)
  //     } else {
  //       searchParams.delete('searchManufacturer')
  //     }

  //     const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  //     router.push(newPathname)
  //   }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar
