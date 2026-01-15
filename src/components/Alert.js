import React from "react";

function Alert(props) {

  // ✅ FIX #1:
  // Function to capitalize first letter of alert type
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    // ✅ FIX #2:
    // changed props.Alert → props.alert
    props.alert && (
      <div style={{ height: "50px" }}>
        <div
          // ✅ FIX #3:
          // changed props.Alert.type → props.alert.type
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {/* ✅ FIX #4:
              changed props.Alert → props.alert */}
          <strong>{capitalize(props.alert.type)}</strong>:{" "}
          {props.alert.msg}
        </div>
      </div>
    )
  );
}

export default Alert;
