export default function ReportTable(props){

    if (props.report !== null){
      return(
        <table>

          <thead>
            <th>Location</th>
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
            props.report.map(store=>{
              return(
                <tr>
                  <td>{store.location}</td>
                  {
                    store.hourlySales.map(item=>{
                      return(
                        <td> {item} </td>
                      )
                    })
                  }
                  <td>{store.total}</td>
                </tr>
              )
            })
          }
          </tbody>

          <tfoot>
              <td>Totals</td>
              {
              props.totals.map(item=>{
                return(
                  <td>{item}</td>
                )
              })
              } 
          </tfoot>
        </table>
      ) 
  }else{
    return (
      <h2 className="mx-auto my-8 text-xl text-center font-semibold">No Cookie Stands Available</h2>
    )
  }
}