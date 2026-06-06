const FormField = ({ type, id, label, newCls, ...props }) => {
  return (
    <div className="form-field">
      {label && <label htmlFor={id}>{label}</label>}
      {type === "textarea" ? (
        <textarea
          id={id}
          className={`input-cls  ${newCls ? newCls : ""}`}
          type={type}
          {...props}
        />
      ) : (
        <input
          id={id}
          className={`input-cls  ${newCls ? newCls : ""}`}
          type={type}
          {...props}
        />
      )}
    </div>
  );
};

export default FormField;
