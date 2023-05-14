import { RxDashboard } from "react-icons/rx";
import { MdCreate } from "react-icons/md";
import { FiUser,FiLogIn,FiLogOut } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { BsSearch} from "react-icons/bs";
import {IoMdNotifications} from "react-icons/Io";

export const datas = [
  {
    id: 1,
    icon: <RxDashboard />,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: <MdCreate />,
    text: "Create",
  },
  {
    id: 3,
    icon:<IoMdNotifications/>,
    text:"Notification"
  },
  {
    id: 4,
    icon: <FiUser />,
    text: "Person",
  },
  {
    id: 5,
    icon: <AiOutlineMessage />,
    text: "Messages",
  },
  {
    id: 6,
    icon: <BsSearch />,
    text: "Search",
  },
  {
    id: 7,
    icon: <FiLogIn />,
    text: "Login",
  },
  {
    id: 8,
    icon: <FiLogOut />,
    text: "Logout",
  },

];
