
import { useLocation ,Link,useNavigate} from "react-router-dom";
import Button from "../../Button";
import { useContext } from "react";
import { AuthContext } from "../../store/AppContext";


const AdminNavbar = () => {
  const pathname = useLocation().pathname;
  const route =useNavigate()
  const {setIsLogged}=useContext(AuthContext)
const handleLogOut=()=>{
  localStorage.clear()
  setIsLogged(false)
  route('/')
}
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex flex-grow gap-3 items-center">
        <li className="mr-10">
          <Link to={"/admin"} className="flex items-center gap-2">
            <img src="/logo.svg" alt="logo" height="40" width="48" />
            <span className="font-semibold text-2xl"></span>
          </Link>
        </li>
        <li>
          <Link
            to={"/admin"}
            className={`transition-all flex items-center justify-center ${
              pathname === "/admin" ? "font-bold" : "font-medium"
            } hover:font-bold`}
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to={"/admin/rooms"}
            className={`transition-all flex items-center justify-center ${
              pathname.includes("/admin/rooms") ? "font-bold" : "font-medium"
            } hover:font-bold`}
          >
            Rooms
          </Link>
        </li>

        <li>
          <Link
            to={"/admin/bookings"}
            className={`transition-all flex items-center justify-center ${
              pathname.includes("/admin/bookings")
                ? "font-bold"
                : "font-medium"
            } hover:font-bold`}
          >
            Bookings
          </Link>
        </li>

        <li>
          <Link
            to={"/admin/users"}
            className={`transition-all flex items-center justify-center ${
              pathname.includes("/admin/users") ? "font-bold" : "font-medium"
            } hover:font-bold`}
          >
            Users
          </Link>
        </li>
      </ul>

      <Button styles='' text='Log out' onClick={handleLogOut} type='button' />
    </nav>
  );
};

export default AdminNavbar;
