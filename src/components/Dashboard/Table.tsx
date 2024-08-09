"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import TableAction from "./TableActions";
import toast from "react-hot-toast";
import Loader from "@/app/components/Loader";

interface TableProps {
  columns: string[];
  rows: any[];
  manageRoutes: {
    label: string;
    type?: string;
    fxn?: Function;
    href?: string;
    icon?: React.ReactNode;
    name: string;
  }[];
}

const Table: React.FC<TableProps> = ({ columns, rows, manageRoutes }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const managefxn = async (label: string, href: string, id: string) => {
    if (label.toLowerCase() === "edit") {
      router.push(`${href}/${id}`);
      return;
    }
    if (label.toLowerCase() === "delete") {
      setLoading(true);
      try {
        const deleted = await axios.delete(`${href}/${id}`);
        toast.success("Deleted!");
        router.refresh();
      } catch (error) {
        console.log("Delete failed:", error);
        toast.error("Delete failed!");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading && <Loader />}
      <table className="relative">
        <thead>
          <tr style={{ borderBottom: "1px solid #333" }}>
            {columns.map((column) => (
              <th key={column} className="text-md uppercase">
                {column}
              </th>
            ))}
            <th className="text-md uppercase">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, x) => (
            <tr key={x} style={{ borderBottom: "1px solid #ccc" }}>
              {columns.map((field, i) => {
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
                    id={row.id}
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

export default Table;
