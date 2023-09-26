import React from 'react';
import {
    AddsForm,
    AddsInput,
    AddsLabel,
    AddsSubmit,
    AddsWrapper,
} from './AddTodo';
import { useRecoilState } from 'recoil';
import { categoryState } from '../../../atom';
import { useForm } from 'react-hook-form';

export default function AddCategories() {
    // form
    const { register, handleSubmit, setValue } = useForm();
    // category
    const [category, setCategory] = useRecoilState(categoryState);
    const addCategory = (data) => {
        setCategory([...category, data.category]);
        setValue('category', '');
    };

    return (
        <AddsWrapper>
            <AddsLabel>Add Category</AddsLabel>
            <AddsForm onSubmit={handleSubmit(addCategory)}>
                <AddsInput {...register('category', { required: true })} />
                <AddsSubmit>Submit</AddsSubmit>
            </AddsForm>
        </AddsWrapper>
    );
}
