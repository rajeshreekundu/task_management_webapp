import React from 'react'
import { CheckCircle, CircleAlert, TriangleAlert } from "lucide-react";

const AlertMessage = ({type, message, closing}) => {
    const msgIcons = {
        success : <CheckCircle size={20} />,
        error : <CircleAlert size={20} />,
        warning: <TriangleAlert size={20} />,
    }
  return (
    <div className={`message msg-${type} ${closing ? "message-closing" : "" }`}>
        {msgIcons[type]}
      {message}
    </div>
  )
}

export default AlertMessage
