import React from "react";
import { DashboardBody } from "./Dashboard";
import Dashboardbar from "../Common/Dashboardbar";

function Incidents() {
  return (
    <>

      <Dashboardbar
        firsttxt={"Home - Incidents"}
        secondtxt={"Incidents"}
        btntxt={"+ New Incident"}
      />
      <DashboardBody />
    </>
  );
}


export default Incidents;
