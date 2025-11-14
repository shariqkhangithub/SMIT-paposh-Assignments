const Checkbox = ({ id, text, checked, ...props }) => {
  return (
    <div className={`relative flex items-center `}>
      <div className="flex items-center h-5 ">
        <input
          id={id}
          type="checkbox"
          className="w-4 h-4 rounded cursor-pointer"
          checked={checked}
          {...props}
        />
      </div>

      {text && (
        <label htmlFor={id} className="ml-3 text-md cursor-pointer font-medium">
          {text}
        </label>
      )}
    </div>
  );
};
export default Checkbox;
