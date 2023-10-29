import React from "react";
import { useAppSelector } from "../app/hooks";

const Dashbord = () => {
  const userInfo = useAppSelector((zoom) => zoom.auth.userInfo)
  console.log(userInfo);
  
  return <div>Dashbord</div>;
};

export default Dashbord;
