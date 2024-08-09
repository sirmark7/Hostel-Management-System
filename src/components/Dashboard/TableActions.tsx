"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiDotsVerticalRounded } from "react-icons/bi";

export interface TableActionProps {
  actions: {
    label: string;
    type?: string;
    fxn?: Function;
    href?: string;
    icon?: React.ReactNode;
    name: string;
  }[];
  actionFxn: (label: string, href: string, id: string) => void;
  id: string;
}

const TableAction: React.FC<TableActionProps> = ({
  actions,
  actionFxn,
  id,
}) => {
  const [open, setOpen] = useState(false);

  const openActions = () => {
    setOpen(true);
  };
  const closeActions = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={openActions}
        onBlur={() => {
          setTimeout(() => {
            closeActions();
          }, 300);
        }}
        className="cursor-pointer relative flex items-center justify-center"
        style={{
          backgroundColor: "#fff",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
        }}
      >
        <BiDotsVerticalRounded
          style={{
            fontSize: "1.6em",
            color: "#8F3409",
          }}
        />
        {open && (
          <motion.ul
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-slate-100 rounded-lg absolute bottom-[100%] right-0 z-50 overflow-hidden"
          >
            {actions.map((action) => (
              <li key={action.label}>
                {action.type === "link" && action.href ? (
                  <Link
                    className="flex items-center gap-2 hover:bg-slate-200 w-full p-2 hover:text-[#8F3409] text-left text-sm"
                    href={action.href}
                  >
                    <span>{action.icon}</span> <span>{action.name}</span>
                  </Link>
                ) : (
                  <span
                    className="flex items-center gap-2 hover:bg-slate-200 w-full p-2 hover:text-[#8F3409] text-left text-sm"
                    onClick={() =>
                      actionFxn(action.label, action.href || "", id)
                    }
                  >
                    <span>{action.icon}</span> <span>{action.name}</span>
                  </span>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </button>
    </>
  );
};

export default TableAction;
