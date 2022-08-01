import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return <div>OOPS ! The given URL : {location.pathname} is not found</div>;
};

export default NotFound;
