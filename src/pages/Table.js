import { useLocation } from "react-router-dom"

const Table = ()=>{
const location = useLocation()

return(
        <>
       <table>
  <thead>
    <tr>
      <th>control</th>
      <th className="content"> {location.state?.title}</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>

  <tr>
      <td style={{display:"flex" ,justifyContent:"start"}}>   
        <div className="form-btn-danger">delete</div>
        <div className="form-btn-success">edit</div>
      </td>
    <td className="content">Data 2</td>
    <td>Data 3</td>
  </tr>
  <tr>
    <td style={{display:"flex"}}>  
        <div className="form-btn-danger">delete</div>
        <div className="form-btn-success">edit</div>
      </td>
    <td>Data 5</td>
    <td>Data 6</td>
  </tr>
  </tbody>
</table>

   
        </>
    )
}
export default Table