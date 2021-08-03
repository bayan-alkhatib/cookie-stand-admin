export default function Footer(props){
    return(
      <footer className="flex justify-between bg-green-500 p-4 items-center mt-4">
      <h2> {props.report.length} Locations World Wide </h2>
    </footer>
    ) 
  }