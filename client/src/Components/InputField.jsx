import { ErrorMessage, useField } from "formik";

const InputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div className='my-2'>
                <label htmlFor={field.name} className='capitalize font-medium'>{label}</label>
                <input type="text" {...field} {...props} className={`w-full px-4 py-2 rounded-md bg-white_300 dark:bg-black_300   outline-orange-500 ${meta.touched && meta.error && "border border-red-500"}`} />
                <ErrorMessage component={'div'} name={field.name} className="text-red-600" />
            </div>
        </>
    )
}
export default InputField