import React, { useState } from "react";

import Header from "../components/Header";
import { EuiFlexGroup, EuiForm } from "@elastic/eui";
import MeetingNameField from "../components/FormComponents/MeetingNameField";
import MeetingUsersField from "../components/FormComponents/MeetingUsersField";
import useAuth from "../hooks/useAuth";
import useFetchUsers from "../hooks/useFetchUsers";


const OneOnOneMeeting = () => {

  useAuth()
 const [users] = useFetchUsers()
    const [meetingName, setMeetingName] = useState("");
    const [selectedUser, setSelectedUser] = useState([]);
    
    const onUserChange = (selectedOptions: any) => {
      setSelectedUser(selectedOptions);
    };
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      <EuiFlexGroup justifyContent="center" alignItems="center">
        <EuiForm>
          <MeetingNameField
          label = "Meeting Name"
          placeholder = "Meeting Name"
          value={meetingName}
          setMeetingName= {setMeetingName}

          />
           <MeetingUsersField
            label="Invite User"
            options={users}
            onChange={onUserChange}
            selectedOptions={selectedUser}
            singleSelection={{ asPlainText: true }}
            isClearable={false}
            placeholder="Select a User"
          />
        </EuiForm>
      </EuiFlexGroup>
    </div>
  );
};

export default OneOnOneMeeting;
