import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./ui.css";
import Button from "./Button";

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

            <Button
              btn={{
                variant: "ghost",
                className: "show-hide-pass",
                icon: showPassword ? <EyeOff size={13} /> : <Eye size={13} />,
              }}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </>
      )}
      {error && <p className="form-error">{errorMsg}</p>}
    </div>
  );
};

export default FormField;
