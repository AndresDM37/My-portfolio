/**
 * Campo de formulario accesible: label + input/textarea.
 * Usado en el formulario de Contacto.
 */
const FormField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  multiline = false,
  rows = 5,
}) => {
  const fieldId = `field-${name}`;
  const shared = {
    id: fieldId,
    name,
    value,
    onChange,
    required,
    placeholder,
    className: multiline ? "field-input resize-none" : "field-input",
  };

  return (
    <div className="space-y-3">
      <label htmlFor={fieldId} className="block text-sm font-semibold text-white/80">
        {label}
      </label>
      {multiline ? (
        <textarea rows={rows} {...shared} />
      ) : (
        <input type={type} {...shared} />
      )}
    </div>
  );
};

export default FormField;
