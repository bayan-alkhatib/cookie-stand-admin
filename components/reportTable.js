export default function ReportTable(props){

    if (props.report.length === 0){
      return (
        <h2 className="mx-auto my-8 text-xl text-center font-semibold">No Cookie Stands Available</h2>
      )
    }else{
      return(
        <table className='border rounded-md border-green-300 w-5/6 mx-auto mt-4 text-center'>

          <thead className='border border-green-300 bg-green-500'>
            <th className='px-2'>Location</th>
            {
              props.workingHours.map(item=>{
                return(
                  <th>{item} </th>
                )
              })
              }
            <th>Totals</th>
          </thead>
        
          <tbody>
          {
            props.report.map((store,idx)=>{

              if (idx%2==0){
                return(
                  <tr className='bg-green-400'>
                    <td className='border border-black px-2' >{store.location}</td>
                    {
                      store.hourlySales.map(item=>{
                        return(
                          <td className='border border-black'> {item} </td>
                        )
                      })
                    }
                    <td className='border border-black'>{store.total}</td>
                  </tr>
                )
              }else{
                return(
                  <tr className='bg-green-300'>
                    <td className='border border-black px-2' >{store.location}</td>
                    {
                      store.hourlySales.map(item=>{
                        return(
                          <td className='border border-black'> {item} </td>
                        )
                      })
                    }
                    <td className='border border-black'>{store.total}</td>
                  </tr>
                ) 
              }
            })
          }
          </tbody>

          <tfoot className='bg-green-500'>
              <td className='border border-black font-semibold px-2'>Totals</td>
              {
              props.totals.map(item=>{
                return(
                  <td className='border border-black font-semibold'>{item}</td>
                )
              })
              } 
          </tfoot>
        </table>
      ) 
  }
}