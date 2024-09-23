import React from 'react';

export function generateFormFields(fields, handleChange) {
  return fields.map((field) => {
    switch (field.type) {
      case 'string':
        return (
          <label key={field.name}>
            {field.label}
            <input
              type='text'
              name={field.name}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
            />
            <p>{field.description}</p>
          </label>
        );
      case 'select':
        return (
          <label key={field.name}>
            {field.label}
            <select
              name={field.name}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
            >
              {field.choices.map((choice) => (
                <option key={choice} value={choice}>
                  {choice}
                </option>
              ))}
            </select>
            <p>{field.description}</p>
          </label>
        );
      case 'number':
        return (
          <label key={field.name}>
            {field.label}
            <input
              type='number'
              name={field.name}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
            />
            <p>{field.description}</p>
          </label>
        );
      case 'image':
        return (
          <label key={field.name}>
            {field.label}
            <input
              type='text'
              name={field.name}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder='Enter image URL'
              required={field.required}
            />
            <p>{field.description}</p>
          </label>
        );
      case 'color':
        return (
          <label key={field.name}>
            {field.label}
            <input
              type='color'
              name={field.name}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
            />
            <p>{field.description}</p>
          </label>
        );
      case 'object':
        return (
          <div key={field.name}>
            <h5>{field.label}</h5>
            {generateFormFields(field.fields, (name, value) =>
              handleChange(`${field.name}.${name}`, value)
            )}
          </div>
        );
      default:
        return null;
    }
  });
}
