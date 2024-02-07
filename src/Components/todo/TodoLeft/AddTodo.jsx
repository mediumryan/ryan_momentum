import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { todoState } from '../../../data/todos';
import { useForm } from 'react-hook-form';

export const AddsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const AddsLabel = styled.label`
    color: var(--primary-200);
    margin: var(--margin-medium) 0;
    font-size: var(--font-size-small);
`;

export const AddsForm = styled.form`
    display: flex;
    align-items: center;
`;

export const AddsInput = styled.input`
    font-size: var(--font-size-micro);
    margin-right: var(--margin-small);
    padding: var(--padding-double-small);
    border: none;
    border-radius: 10px;
`;

export const AddsSubmit = styled.button`
    font-size: var(--font-size-micro);
    color: var(--text-200);
    padding: var(--padding-double-small);
    border: 2px solid var(--text-200);
    border-radius: 10px;
    transition: 300ms all;
    &:hover {
        color: var(--primary-100);
        border-color: var(--primary-100);
    }
`;

export const InputAlert = styled.p`
    color: var(--accent-100);
    font-size: var(--font-size-micro);
    margin-top: var(--margin-small);
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
            <AddsLabel>Add ToDo</AddsLabel>
            <AddsForm onSubmit={handleSubmit(submitValue)}>
                <AddsInput
                    {...register('todo', { required: true, maxLength: 15 })}
                />
                <AddsSubmit>Submit</AddsSubmit>
            </AddsForm>
            {errors.todo && errors.todo.type === 'maxLength' && (
                <InputAlert>
                    Please enter the todo within 15 characters.
                </InputAlert>
            )}
        </AddsWrapper>
    );
}
