import React from 'react';
import {
    AddsForm,
    AddsInput,
    AddsLabel,
    AddsSubmit,
    AddsWrapper,
    InputAlert,
} from './AddTodo';
import { useRecoilState } from 'recoil';
import { categoryState } from '../../../data/todos';
import { useForm } from 'react-hook-form';

export default function AddCategories() {
    // form
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    // category
    const [category, setCategory] = useRecoilState(categoryState);
    const addCategory = (data) => {
        if (category.includes(data.category)) {
            alert(`${data.category} category is already exist.`);
            return;
        }
        setCategory([...category, data.category]);
        setValue('category', '');
    };

    return (
        <AddsWrapper>
            <AddsLabel>Add Category</AddsLabel>
            <AddsForm onSubmit={handleSubmit(addCategory)}>
                <AddsInput
                    {...register('category', { required: true, maxLength: 10 })}
                />
                <AddsSubmit>Submit</AddsSubmit>
            </AddsForm>
            {errors.category && errors.category.type === 'maxLength' && (
                <InputAlert>
                    Please enter the category within 10 characters.
                </InputAlert>
            )}
        </AddsWrapper>
    );
}
