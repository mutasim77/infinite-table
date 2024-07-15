import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from '@tanstack/react-form';
import { addTableData } from '../services/api';
import { TableData, FormFields } from '../types';
import { validateField } from '../utils/validation';

const initialFields: FormFields = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    university: ''
}

export default function Form({ onClose }: { onClose: () => void }) {
    const queryClient = useQueryClient();
    const mutation = useMutation<TableData, Error, FormFields>({
        mutationFn: addTableData
    });

    const form = useForm({
        defaultValues: initialFields,
        onSubmit: async (values) => {
            await mutation.mutateAsync(values.value);
            queryClient.invalidateQueries({ queryKey: ['tableData'] });
            form.reset();
            onClose();
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        void form.handleSubmit(); //? Use 'void' to explicitly ignore the return value (promise) of handleSubmit.
    }

    const fieldNames = Object.keys(initialFields) as (keyof FormFields)[];

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {fieldNames.map((fieldName) => (
                <div key={fieldName}>
                    {form.Field({
                        name: fieldName,
                        validators: {
                            onChange: ({ value }) => validateField(fieldName, value),
                            onChangeAsyncDebounceMs: 500,
                        },
                        children: (field) => (
                            <>
                                <label htmlFor={fieldName} className="block text-sm font-medium text-gray-300">
                                    {fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}  {/* fieldName ===> Field Name */}
                                </label>
                                <input
                                    name={field.name}
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    onBlur={field.handleBlur}
                                    type={fieldName === 'email' ? 'email' : 'text'}
                                    id={fieldName}
                                    className="block w-full px-4 py-3 rounded-md bg-background border border-neutral border-opacity-30 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-30 text-neutral placeholder-neutral placeholder-opacity-50 transition duration-150 ease-in-out"
                                    placeholder={`Enter your ${fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                                />
                                {field.state.meta.isTouched ? (
                                    <p className="mt-2 text-sm text-red-600">{field.state.meta.errors}</p>
                                ) : null}
                            </>
                        ),
                    })}
                </div>
            ))}
            <div className="flex justify-between">
                <button
                    type="submit"
                    disabled={mutation.isPending || form.state.isSubmitting}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-background bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                    {mutation.isPending ? 'Submitting...' : 'Submit'}
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}