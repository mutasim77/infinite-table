import { FormFields } from '../types';

type ValidationErrors = Partial<Record<keyof FormFields, string>>;

const nameRegex = /^.{2,}$/; //? if the string has at least 2 characters.
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //? if the string is a valid email format

export function validateFormFields(fields: FormFields): ValidationErrors {
    const errors: ValidationErrors = {};

    //! First Name validation
    if (!fields.firstName.trim()) {
        errors.firstName = 'First name is required';
    } else if (!nameRegex.test(fields.firstName)) {
        errors.firstName = 'First name must be at least 2 characters long';
    }

    //! Last Name validation
    if (!fields.lastName.trim()) {
        errors.lastName = 'Last name is required';
    } else if (!nameRegex.test(fields.lastName)) {
        errors.lastName = 'Last name must be at least 2 characters long';
    }

    //! Email validation
    if (!fields.email.trim()) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(fields.email)) {
        errors.email = 'Invalid email address';
    }

    //! Address validation
    if (!fields.address.trim()) {
        errors.address = 'Address is required';
    } else if (fields.address.length < 10) {
        errors.address = 'Address must be at least 10 characters long';
    }

    //! University validation
    if (!fields.university.trim()) {
        errors.university = 'University is required';
    } else if (fields.university.length < 3) {
        errors.university = 'University name must be at least 3 characters long';
    }

    return errors;
}

export function validateField(fieldName: keyof FormFields, value: string): string | undefined {
    const dummyFields = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        university: ''
    };
    const fieldToValidate = { ...dummyFields, [fieldName]: value };
    const errors = validateFormFields(fieldToValidate as FormFields);
    return errors[fieldName];
}