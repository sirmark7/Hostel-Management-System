// import { useContext} from "react";
import {  useOutletContext } from "react-router-dom";
import TableAction from "./TableActions";
// import toast from "react-hot-toast";
// import { LoaderContext } from "../store/AppContext";
import { PropTypes } from "prop-types";
// import useRequestResorce from "../store/useRequestresource";



const Table= ({ columns, rows, manageRoutes }) => {
  // const {setIsLoading} = useContext(LoaderContext);
  const {handleModal,handleDelete}=useOutletContext()
  // const router = useNavigate();
  console.log(rows);
  

  const managefxn = async (label, href, item) => {
    if (label.toLowerCase() === "edit") {
      handleModal(true,href,item);
      return;
    }
    if (label.toLowerCase() === "delete") {
      handleDelete(href,item._id)
    }
  };

  return (
    <>
      <table className="relative w-full">
        <thead>
          <tr style={{ borderBottom: "1px solid #333" }} className="w-full">
            {columns?.map((column) => (
              <th key={column} className="text-md uppercase">
                {column}
              </th>
            ))}
            <th className="text-md uppercase">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, x) => (
            <tr key={x} style={{ borderBottom: "1px solid #ccc" }}>
              {columns?.map((field, i) => {
                if (field === "id") {
                  return (
                    <td key={`${field}${i}`} className="text-center py-1">
                      {x + 1}
                    </td>
                  );
                }
                return (
                  <td key={`${field}${i}`} className="text-center py-1">
                    {row[field]}
                  </td>
                );
              })}
              <td className="flex items-center justify-center text-center text-2xl py-1">
                <span className="relative cursor-pointer">
                  <TableAction
                    actions={manageRoutes}
                    actionFxn={managefxn}
                    id={row}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
  Table.propTypes={
 columns:PropTypes.array, 
 rows:PropTypes.array, 
 manageRoutes:PropTypes.array 
}
export default Table;
