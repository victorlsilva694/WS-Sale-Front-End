import { authContext } from "../../stores/AuthStore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import SideBar from "./NavBar";
import SessionOne from "./SessionOne";
import SessionTwo from "./SessionTwo";
import SessionThree from "../DashBoard/SessionThreeDashBoard";
import SessionFourr from "../DashBoard/SessionFour";
import { SessionFour } from "../Home/SessionFour";

const DashBoard = () => {
  const store = useContext(authContext);
  useEffect(() => {
    store.handleProducts();
  }, [store]);

  return (
    <>
      <SideBar />
      <SessionOne />
      <br />
      <br />
      <br />
      <SessionTwo />
      <br />
      <br />
      <br />
      <br />
      <SessionFourr />

      <br />
      <br />
      <SessionThree />
      <SessionFour />
    </>
  );
};

export default observer(DashBoard);
// {
//   /* {store.products.map((values, index) => {
//         return(
//           <h1>{values.nameProduct}</h1>
//         )
//       })} */
// }
