import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

import "./index.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <FaInbox className="wd-icon" />,
    History: <BsClockHistory className="wd-icon" />,
    Studio: <MdOndemandVideo className="wd-icon" />,
    Commons: <IoExitOutline className="wd-icon" />,
    Help: <IoIosHelpCircleOutline className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 100 }}>
      <Link to={`/Kanbas/Dashboard`} className="list-group-item">
        <img className="neu-logo" src="/images/neu_logo.png"/>
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          <i className={`${link==="Account" && "account"}`}>{linkToIconMap[link]}</i>
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;