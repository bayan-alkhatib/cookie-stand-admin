import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react';



export default function Home() {

  const [store, setStore] = useState([]);

  function storehandeler(event){

    event.preventDefault();

    let store= {
      location: event.target.location.value,
      minCus:event.target.MinCPH.value,
      maxCus:event.target.MaxCPH.value,
      avgCookies:event.target.avgCPH.value
    }

    setStore(store); 
  }

  return (
    <div className="bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="flex justify-between bg-green-500 text-black-100 p-4 items-center">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
      </header>

      <main className="">

        <form className="border rounded-md border-green-300 flex-col w-2/3 bg-green-300 mx-auto my-8" onSubmit={storehandeler}>
          
          <h1 className="text-center font-semibold text-black-100 text-2xl p-3 ">Create Cookie Stand</h1>

          <div className="flex mx-3 my-4">
            <label  className="mr-2" for='location'>Location</label>
            <input name="location" className="flex-auto bg-gray-100 "/>
          </div>

          <div className="flex justify-center mx-3 my-4 mt-8">
            <div classNameame="flex-col ">
              <label for="MinCPH" >Minimum Customers per Hour</label>
              <input name="MinCPH" />
            </div>
            <div className="flex-col">
              <label for='MaxCPH'>Maximum Customers per Hour</label>
              <input name="MaxCPH" />
            </div>
            <div className="flex-col ">
              <label for='avgCPH'>Average Cookies per Sale</label>
              <input name="avgCPH"/>
            </div>
            <button className=" bg-green-500 w-1/4">Create</button>
          </div>
      
        </form>

        <div className="mx-auto my-8 text-black-100 text-center"> Report Table Coming Soon ... </div>

        <section className="mx-auto my-8 text-black-100 text-center">
         {JSON.stringify(store)}
        </section>
      </main>
    
      <footer className="flex justify-between bg-green-500 text-black-100 p-4 items-center">
         <div> &copy;2021</div>
      </footer>
    </div>
  )
}
