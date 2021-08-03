import Head from 'next/head'


import { useState } from 'react';

import Header from '../components/header.js';
import CreateForm from '../components/createform.js';
import ReportTable from '../components/reportTable.js';
import Footer from '../components/footer.js'


export default function CookieStandAdmin() {

  const[report, setallstores] = useState([])

  const[workingHours,setworkingHours]=useState(['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])
  const[totals,setbranchestotals]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])


  function onCreate(event){

    event.preventDefault();

    let minCus_h=parseInt(event.target.MinCPH.value)
    let maxCus_h=parseInt(event.target.MaxCPH.value)
    let avgCookies_c=parseInt(event.target.avgCPH.value)
    
    let sum=0
   
    
    const store= {
      location: event.target.location.value,
      hourlySales:workingHours.map(()=>Math.ceil(avgCookies_c*(Math.ceil(Math.random()*(maxCus_h-minCus_h)+minCus_h)))),
    }

  for (let i=0; i< store.hourlySales.length; i++){
    sum=sum+store.hourlySales[i]
    store.total=sum
  }
 
  setallstores([...report,store])
  
  // let totalArray=[]
  // for(let j=0; j<workingHours.length;j++){
  //   let total_sum=0
  //   for(let x=0; x<report.length; x++){
  //     total_sum+=report[x].hourlySales[j]
  //   }
  //   totalArray.push(total_sum)
  //  }

   // let sumOfTotal = 0
  // totalArray.forEach(element => {
  //   sumOfTotal+=element;
  // });

  // totalArray.push(sumOfTotal)

  total_sum=report.map((item,idx)=>{
     return item + report.hourlySales[idx]
  })
   
 setbranchestotals([...totals,total_sum])

}

  
  return (
    <div className="bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header Compnent */}
      <Header />

      <main className="">
        {/* <h2> report{report[0].hourlySales}</h2> */}
          {/* Form Function */}
          < CreateForm onCreate={onCreate}  />
        
          {/* Report Table */}
          <ReportTable report={report} workingHours={workingHours}  totals={totals}/>

          {/* Footer Component */}
          <Footer report={report}/>

      </main>
    </div>
  )
}



















