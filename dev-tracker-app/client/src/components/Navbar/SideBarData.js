import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiOutlineDashboard />,
    cName: "nav-text",
  },
  {
    title: "Job List",
    path: "/List",
    icon: <AiIcons.AiOutlineUnorderedList />,
    cName: "nav-text",
  },
  {
    title: "Add New Job",
    path: "/add",
    icon: <AiIcons.AiOutlineFileAdd />,
    cName: "nav-text",
  },
  {
    title: "Reminder",
    path: "/reminder",
    icon: <FaIcons.FaCalendarAlt />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "#",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
