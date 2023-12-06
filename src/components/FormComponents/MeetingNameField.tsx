import React from "react";
import { EuiFieldText, EuiFormRow } from "@elastic/eui";

const MeetingNameField = ({ label, placeholder, value, setMeetingName } :{
  label : string,placeholder:string,value:string,setMeetingName: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <EuiFormRow label={label}>
      <EuiFieldText
        placeholder={placeholder}
        value={value}
        onChange={(e) => setMeetingName(e.target.value)}
      />
    </EuiFormRow>
  );
};

export default MeetingNameField;
