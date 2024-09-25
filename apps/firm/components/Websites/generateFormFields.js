// Updated generateFormFields function
export function generateFormFields(fields, handleChange, initialValues = {}) {
  return fields.map((field) => {
    switch (field.type) {
      case 'string':
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <input
              type='text'
              name={field.name}
              value={initialValues[field.name] || ''} // Ensure value is always a string
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
            {field.description && <p>{field.description}</p>}
          </div>
        );
      case 'select':
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <select
              name={field.name}
              value={initialValues[field.name] || field.default || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
            >
              <option value=''>Select an option</option>
              {field.choices.map((choice) => (
                <option key={choice} value={choice}>
                  {choice}
                </option>
              ))}
            </select>
            {field.description && <p>{field.description}</p>}
          </div>
        );
      default:
        return null;
    }
  });
}
