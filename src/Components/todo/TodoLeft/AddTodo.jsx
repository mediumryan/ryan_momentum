import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
// import state data
import { todoState } from '../../../data/todo';

export const AddsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 0.85rem;
`;

export const AddsLabel = styled.label`
    color: var(--white-200);
    margin: 1rem 0;
`;

export const AddsForm = styled.form`
    display: flex;
    align-items: center;
`;

export const AddsInput = styled.input`
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border: 2px solid transparent;
    border-radius: 4px;
    &:focus {
        outline-color: var(--accent-100);
    }
`;

export const AddsSubmit = styled.button`
    color: var(--white-200);
    padding: 0.25rem 0.5rem;
    border: 2px solid var(--black-200);
    border-radius: 4px;
    transition: 300ms all;
    &:hover {
        color: var(--accent-100);
        border-color: var(--accent-100);
    }
`;

export default function AddTodo() {
    // state
    const [todo, setTodo] = useRecoilState(todoState);
    // form
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();
    const submitValue = (data) => {
        setTodo([
            ...todo,
            { text: data.todo, id: Date.now(), checked: false, state: 'TO_DO' },
        ]);
        setValue('todo', '');
    };

    return (
        <AddsWrapper>
            <AddsLabel>Add to task</AddsLabel>
            <AddsForm onSubmit={handleSubmit(submitValue)}>
                <AddsInput
                    {...register('todo', { required: true, maxLength: 50 })}
                />
                <AddsSubmit>Submit</AddsSubmit>
            </AddsForm>
        </AddsWrapper>
    );
}
