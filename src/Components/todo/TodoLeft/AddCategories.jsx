import React from 'react';
import {
    AddsForm,
    AddsInput,
    AddsLabel,
    AddsSubmit,
    AddsWrapper,
} from './AddTodo';

export default function AddCategories() {
    return (
        <AddsWrapper>
            <AddsLabel>Add Category</AddsLabel>
            <AddsForm>
                <AddsInput />
                <AddsSubmit>Submit</AddsSubmit>
            </AddsForm>
        </AddsWrapper>
    );
}
