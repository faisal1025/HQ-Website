import Image from "next/image";
import React, { Suspense } from "react"
import { FaArrowRight } from "react-icons/fa";
import HotelList from "./components/HotelList";
import Link from "next/link";
import CitiesList from "./components/CitiesList";
import SearchComponent from "./components/SearchComponents/SearchComponent";
import ContactForm from "./components/ContactForm";
import { getAllStates } from "./services/cityApi";
import { getAllHotels } from "./services/hotelApi";
import MainLayout from "./mainLayout/layout";
import { Metadata } from "next";


export const dynamic='force-dynamic';

export const metadata: Metadata = {
  title: 'Hqrooms offers you best deals on hotel in india, Book room now | Hq Rooms',
  description: "HQ Rooms provides you best deals on hotels in india, book room online. We guaranty best deals in all over the India on hotel rooms with lowest price guaranty after comparing from the price from every where.",
  openGraph: {
    title: 'Hqrooms offers you best deals on hotel in india, Book room now | Hq Rooms',
    description: "HQ Rooms provides you best deals on hotels in india, book room online. We guaranty best deals in all over the India on hotel rooms with lowest price guaranty after comparing from the price from every where.",
  },
}

export default async function Home() {
  const cities = await getAllStates()
  const hotels = await getAllHotels()

  const jsonLd = {
    '@context': 'https://hqrooms.in',
    '@type': 'Home',
    name: 'hq rooms hotels',
    description: 'HQ Rooms is a hotel booking service provide you the best deals on hotel rooms booking with the lowest price guaranty after comparing from the price from every where',
  }

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="flex flex-col justify-center items-center home-container">
        <h1 className="text-center p-2 tracking-tight text-4xl font-bold font-sans text-black max-sm:text-2xl" >We provide best deals on hotels in India</h1>
        <h2 className="text-center p-2 text-lg font-semibold font-sans max-sm:text-base" >We’ll do the searching. You do the saving.</h2>
        <Suspense>
          <SearchComponent />
        </Suspense>
      </section>

      <section className="rounded-lg p-5 m-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl">
        <h3 className="dark:!text-white text-xl font-sans font-semibold">Take a dip at these top-rated hotels</h3>
        <div className="relative mt-14">
          <HotelList list={hotels.props.hotels} />
        </div>
        <div className="flex px-4 py-2 justify-end items-center">
          <Link href={'#'} className="flex items-center gap-1 font-sans font-bold text-blue-600">
            Explore more stays
            <i>
              <FaArrowRight />
            </i>
          </Link>
        </div>
      </section>

      <section className="rounded-lg p-5  m-5  bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl">
        <h3 className="dark:!text-white text-xl font-sans font-semibold">Popular States</h3>
        <div className={`relative mt-14`}>
          <CitiesList list={cities.props.cities}/>
        </div>
      </section>

      <section className="flex justify-around flex-wrap gap-4 p-5 m-5 items-center border-solid shadow-xl bg-transparent rounded-lg border-[1px] border-slate-800">
          <div className="flex gap-4 justify-around items-center">
            <Image src={'/assets/hot-sale.png'} content="image/gif" alt="mail" width={100} height={100} />
            <div className="flex flex-col">
              <h3 className="contact-heading dark:!text-white text-xl font-sans font-semibold max-md:text-lg">Get access to exclusive deals</h3>
              <p className="contact-subtitle dark:!text-white font-sans font-medium text-base max-md:text-sm">We will notify you only our best deals</p>
            </div>
          </div>
          <ContactForm />
      </section>

      <section className="bottom-hero flex justify-evenly min-h-96 flex-wrap gap-4 p-5 m-5 items-center rounded-lg">
          <div className="w-2/4 max-sm:w-full">
            <Image src={'/assets/world-tour.png'} alt="world-tour-img" width={0} height={0} className="w-full h-auto object-contain" layout="responsive"/>
          </div>
          <div className="w-2/5 max-sm:w-full flex justify-center">
            <div className="flex flex-col justify-center">
              <h3 className="!text-white text-xl title-text" >Your Gateway to Blissful Stays</h3>
              <p className="!text-white para-text text-base">We are there for you every time every where</p>
              <ul className="grid grid-cols-3 max-md:grid-cols-2 gap-4 my-4 list-none">
                {
                  cities.props.cities && cities.props.cities.map((city, ind) => {
                    return (
                      <li key={city.id} className="title-text cursor-pointer text-blue-500 font-sans font-semibold">
                        <Link href={`/${city.slug}`}>
                          {city.name}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
      </section>
    </MainLayout>
  );
}


