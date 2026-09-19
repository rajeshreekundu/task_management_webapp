import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./ui.css"

const FormField = ({
  componentClass,
  className,
  type,
  id,
  label,
  error,
  errorMsg,
  children,
  ...props
  
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`form-field ${componentClass ? componentClass : ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      {type === "textarea" ? (
        <textarea
          id={id}
          className={`input-cls  ${className ? className : ""}`}
          type={type}
          {...props}
        />
      ) : (
        <>
          <input
            id={id}
            className={`input-cls  ${className ? className : ""}`}
            type={type === "password" && showPassword ? "text" : type}
            {...props}
          />
            {children}

          {type === "password" && (
            <button
              type="button"
              className="show-hide-pass"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
            </button>
          )}
        </>
      )}
      {error && <p className="form-error">{errorMsg}</p>}
    </div>
  );
};

export default FormField;

// In console this error is show
// Button.jsx:6 Uncaught TypeError: Cannot read properties of undefined (reading 'type')
//     at Button (Button.jsx:6:17)
