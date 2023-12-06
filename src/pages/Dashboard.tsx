import React from "react";
import { useAppSelector } from "../app/hooks";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { EuiFlexGroup, EuiFlexItem, EuiCard, EuiImage } from "@elastic/eui";

import dashboard1 from "../assets/dashboard1.png";
import dashboard2 from "../assets/dashboard2.png";
import dashboard3 from "../assets/dashboard3.png";
import Header from "../components/Header";

const Dashbord = () => {
  useAuth();
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Header />
        <EuiFlexGroup
          justifyContent="center"
          alignItems="center"
          style={{ margin: "5vh 10vw" }}
        >
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="5rem" alt="icon" src={dashboard1} />}
              title={`Creating Meeting`}
              description="Create a new meeting and invite pepole"
              onClick={() => navigate("/create")}
              paddingSize="xl"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="100%" alt="icon" src={dashboard2} />}
              title={`My Meetins`}
              description="View your created meetings"
              onClick={() => navigate("/mymeetings")}
              paddingSize="xl"
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              icon={<EuiImage size="5rem" alt="icon" src={dashboard3} />}
              title={`Meetings`}
              description="View the meetings that you are invited to." 
              onClick={() => navigate("/create")}
              paddingSize="xl"
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default Dashbord;
