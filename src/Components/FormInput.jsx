export default function FormInput({label, type, name, options, placeholder, value, onChange}) {
  return (
    <div>
      {type === "radio" ? (
        options.map((option, index) => (
          <label key={index}>
            <input
               type="radio" name={name} value={option} checked={option === value} onChange={onChange}
            />
            {option}
          </label>
        ))
      ) : type === "date" ? (
        <label>
          {label}
          <input
            type="date" name={name} value={value} onChange={onChange}
          />
        </label>
      ) : (
        <label>
          <input 
             type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}
          />
          {label}
        </label>
      )}
    </div>
  )
}