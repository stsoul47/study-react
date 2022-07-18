import { Navigate, useLocation } from "react-router-dom";

const RouteGuard = (props) => {
  const { children } = props;

  // const isLoggedIn = localStorage.getItem('logged_user') !== null;
  const isLoggedIn = localStorage.getItem('logged_user') === null;

  const location = useLocation();

  return isLoggedIn ? (
    <>{ children }</> ) : (
      <Navigate 
      replace={true}
      to="/login"
      state = {{
        from: `${location.pathname}${location.search}`
      }}
      />
    );
}
export default RouteGuard;