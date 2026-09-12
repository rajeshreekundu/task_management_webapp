import React from "react";

const Button = ({btn, disabled, loading,  ...props}) => {
  return (
    <button
      type={btn.type}
      className={`butn butn-${btn.variant} ${btn.className}`}
      disabled={disabled || loading}
      onClick={btn.onClick}
      {...props}
    >
     
      {loading ? (
        <span className="btn-loader">Loading...</span>
      ) : (
        <>
          
          {btn.image && <img src={btn.image} alt="" className="btn-image" />}
          {btn.icon && <span className="button-icon">{btn.icon}</span>}

          {btn.text}
        </>
        
      )}
    </button>
  );
};



export default Button;
