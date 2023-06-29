"use client";

import { CarCard, Filter, Hero, Searchbar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  // ToDo When the scroll bug with Next.js is fixed, we need to transform this page into server side rendering.
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2023,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });

  // Search states
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // Filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2023);

  // Pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setIsLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2023,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      setAllCars(result);
    } catch (err) {
      console.log("Error [Fetching inventory data]", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">Our inventory</h2>
          <p>Find the car that best suits you</p>
        </div>

        <div className="home__filters">
          <Searchbar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <Filter setFilter={setFuel} title="Fuel" options={fuels} />
            <Filter
              setFilter={setYear}
              title="Year"
              options={yearsOfProduction}
            />
          </div>
        </div>
        {allCars?.length < 1 ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops! No cars found.
            </h2>
            {/*<p>{allCars?.message}</p>*/}
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, i) => (
                <CarCard key={i} car={car} />
              ))}
            </div>

            {isLoading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="Loading..."
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars?.length}
              setLimit={setLimit}
            />
          </section>
        )}
      </div>
    </main>
  );
}
