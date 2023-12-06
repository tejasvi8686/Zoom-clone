import React, { useState } from "react";
import Header from "../components/Header";
import { EuiFlexGroup, EuiForm, EuiSpacer } from "@elastic/eui";
import MeetingNameField from "../components/FormComponents/MeetingNameField";
import MeetingUsersField from "../components/FormComponents/MeetingUsersField";
import useAuth from "../hooks/useAuth";
import useFetchUsers from "../hooks/useFetchUsers";
import moment from "moment";
import MeetingDateField from "../components/FormComponents/MeetingDataField";
import CreateMeetingButtons from "../components/FormComponents/CreateMeetingButtons";
import { FieldErrorType } from "../utils/Types";

const OneOnOneMeeting = () => {
  useAuth();
  const [users] = useFetchUsers();
  const [meetingName, setMeetingName] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);
  const [startDate, setStartDate] = useState(moment());
  const [showErrors, setShowErrors] = useState<{
    meetingName: FieldErrorType;
    meetingUser: FieldErrorType;
  }>({
    meetingName: {
      show: false,
      message: [],
    },
    meetingUser: {
      show: false,
      message: [],
    },
  });
  const onUserChange = (selectedOptions: any) => {
    setSelectedUser(selectedOptions);
  };
  const validateForm = () => {
    let errors = false;
    if (!meetingName.length) {
      showErrors.meetingName.show = true;
      showErrors.meetingName.message = ["Please Enter Meeting Name"];
      errors = true;
    } else {
      showErrors.meetingName.show = false;
      showErrors.meetingName.message = [];
    }

    setShowErrors(showErrors);
    return errors;
  };

  const createMeeting = () => {
    if (!validateForm()) {
    }
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
            label="Meeting name"
            isInvalid={showErrors.meetingName.show}
            error={showErrors.meetingName.message}
            placeholder="Meeting name"
            value={meetingName}
            setMeetingName={setMeetingName}
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
          <MeetingDateField selected={startDate} setStartDate={setStartDate} />
          <EuiSpacer />

          <CreateMeetingButtons createMeeting={createMeeting} />
        </EuiForm>
      </EuiFlexGroup>
    </div>
  );
};

export default OneOnOneMeeting;
