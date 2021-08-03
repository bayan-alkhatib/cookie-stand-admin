export default function CreateForm(props){
    return(
      <form className="border rounded-md border-green-300 flex-col w-5/6 bg-green-300 mx-auto my-8" onSubmit={props.onCreate}>
                
        <h1 className="text-center font-semibold text-2xl p-3 ">Create Cookie Stand</h1>
  
        <div className="flex mx-3 my-4">
          <label  className="mr-2 font-semibold" for='location'>Location</label>
          <input name="location" className="flex-auto "/>
        </div>
  
        <div className="flex justify-evenly w-7/8 mx-3 my-4 mt-8">
          <div className="flex-col rounded bg-green-100 w-1/4 mr-2 text-sm font-semibold text-center p-1">
            <label for="MinCPH" >Minimum Customers per Hour</label>
            <input name="MinCPH" className="flex-auto " />
          </div>
          <div className="flex-col rounded bg-green-100 w-1/4 mr-2 text-sm font-semibold text-center p-1">
            <label for='MaxCPH'>Maximum Customers per Hour</label>
            <input name="MaxCPH" className="flex-auto "/>
          </div>
          <div className="flex-col rounded bg-green-100 w-1/4 mr-2 text-sm font-semibold text-center p-1">
            <label for='avgCPH'>Average Cookies per Sale</label>
            <input name="avgCPH" className="flex-auto "/>
          </div>
          <button className=" rounded bg-green-500 w-1/4 font-semibold ">Create</button>
        </div>
  
      </form>
    )
  }