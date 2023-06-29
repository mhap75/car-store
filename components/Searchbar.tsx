"use client";

import { SearchManufacturer } from "./";
import { FormEvent, useState } from "react";
import button from "@/components/common/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchbarProps } from "@/types";

const Searchbar = ({ setManufacturer, setModel }: SearchbarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "")
      return alert("Please select a manufacturer or a model");

    if (searchManufacturer === "All") {
      setManufacturer("");
    } else {
      setModel(searchModel.toLowerCase());
      setManufacturer(searchManufacturer.toLowerCase());
    }
  };

  // const updateSearchParams = (model: string, manufacturer: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);
  //
  //   if (model) {
  //     searchParams.set("model", model);
  //   } else {
  //     searchParams.delete("model");
  //   }
  //
  //   if (manufacturer) {
  //     searchParams.set("manufacturer", manufacturer);
  //   } else {
  //     searchParams.delete("manufacturer");
  //   }
  //
  //   const newPathName = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;
  //
  //   router.push(newPathName);
  // };

  const SearchButton = ({ style }: { style: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${style}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="search"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton style="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={({ target }) => setSearchModel(target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton style="sm:hidden" />
      </div>
      <SearchButton style="max-sm:hidden" />
    </form>
  );
};

export default Searchbar;
