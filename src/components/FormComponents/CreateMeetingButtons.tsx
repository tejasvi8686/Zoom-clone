import { EuiButton, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import React from "react";
import { useNavigate } from "react-router-dom";

function CreateMeetingButtons({
  createMeeting,
}: {
  createMeeting: () => void;
}) {
  const navigate = useNavigate();
  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={false}>
        <EuiButton color="danger" fill onClick={() => () => navigate("/")}>
          Cancel
        </EuiButton>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiButton type="submit" fill onClick={createMeeting}>
          Submit
        </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}

export default CreateMeetingButtons;
