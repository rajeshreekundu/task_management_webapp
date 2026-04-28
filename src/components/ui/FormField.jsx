const FormField = ({ type, id, label }) => {
  return (
    <div className="form-field">
      {label ? <label htmlFor={id}>Name</label> : ""}
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
