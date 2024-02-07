import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
// import components
import {
    AddsForm,
    AddsInput,
    AddsLabel,
    AddsSubmit,
    AddsWrapper,
} from './AddTodo';
// import state data
import { categoryState } from '../../../data/todo';

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
            <AddsLabel>Add to category</AddsLabel>
            <AddsForm onSubmit={handleSubmit(addCategory)}>
                <AddsInput
                    {...register('category', { required: true, maxLength: 50 })}
                />
                <AddsSubmit>Submit</AddsSubmit>
            </AddsForm>
        </AddsWrapper>
    );
}
