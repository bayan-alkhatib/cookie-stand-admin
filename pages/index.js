import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react';



export default function Home() {

  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Define the hook

  function questionHandler(event){
    event.preventDefault();
    let replies = ['yes', 'no', 'maybe', 'cat', 'school', 'here we go'];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    const question = {
      question: event.target.question.value,
      reply: randomReply,
      id:answeredQuestions.length,
    }

    setAnsweredQuestions([...answeredQuestions, question]); // Push the new question to the previous state
    // setReply(randomReply); // set the state of the hook
  }


  function getMostRecentReply(){
    if (answeredQuestions.length == 0){
      return "No questions yet, Ask me please!!"
    }

    return answeredQuestions[answeredQuestions.length - 1].reply;
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
        <form className="border rounded-md border-green-300 flex-col w-2/3 bg-green-300 mx-auto my-8" onSubmit={questionHandler}>
          <h1 className="text-center font-semibold text-black-100 text-2xl p-3 ">Create Cookie Stand</h1>
          <div className="flex ">
            <label for='location'>Location</label>
            <input name="location" className="flex-auto p-2"/>
          </div>
          <div className="flex ">
            <div classNameame="flex-col">
              <label for="MinCPH" >Minimum Customers per Hour</label>
              <input name="MinCPH" className="flex-auto p-2"/>
            </div>
            <div className="flex-col">
              <label for='MaxCPH'>Maximum Customers per Hour</label>
              <input name="MaxCPH" className="flex-auto p-2"/>
            </div>
            <div className="flex-col">
              <label for='avgCPH'>Average Cookies per Sale</label>
              <input name="avgCPH" className="flex-auto p-2"/>
            </div>
            <button className="px-4 py-1 mx-2 bg-green-500">Create</button>
          </div>
          
        </form>

        <div className="mx-auto my-8 text-black-100 text-center"> Report Table Coming Soon ... </div>

        <section className="mx-auto my-8 text-black-100 text-center">
          ["":"", "":"", "":"", "":""]
        </section>
        
        {/* <table className="w=1/2 mx-auto my-4">
          <thead>
            <tr>
              <th className="border border-blue-600">No.</th>
              <th className="border border-blue-600">Quesiton</th>
              <th className="border border-blue-600">Response</th>
            </tr>
          </thead>
          <tbody>
            {
              answeredQuestions.map(item => {
                return(
                  <tr>
                    <td className="border border-blue-600">{item.id}</td>
                    <td className="border border-blue-600">{item.question}</td>
                    <td className="border border-blue-600">{item.reply}</td>
                  </tr>
                )
              })
            }
            
          </tbody>
        </table> */}
      </main>
    
      <footer className="flex justify-between bg-green-500 text-black-100 p-4 items-center">
         <div>&copy2021</div>
      </footer>
    </div>
  )
}
