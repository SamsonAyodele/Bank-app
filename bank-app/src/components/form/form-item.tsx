interface FormItemsProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

const FormItem = ({ id, label, type, placeholder }: FormItemsProps) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-grey-900 dark-text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="bg-grey-50 border border-grey-300 block w-full p-2.5 rounded-md"
        required
      />
    </div>
  );
};

export default FormItem;
