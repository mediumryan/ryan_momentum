import { styled } from 'styled-components';

export const AddsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const AddsLabel = styled.label`
    color: var(--primary-200);
    margin: var(--margin-medium) 0;
`;

export const AddsForm = styled.form`
    display: flex;
    align-items: center;
`;

export const AddsInput = styled.input`
    font-size: var(--font-size-micro);
    margin-right: var(--margin-small);
    padding: var(--padding-double-small);
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
        color: var(--primary-200);
        border-color: var(--primary-200);
    }
`;

export default function AddTodo() {
    return (
        <AddsWrapper>
            <AddsLabel>Add ToDo</AddsLabel>
            <AddsForm>
                <AddsInput />
                <AddsSubmit>Submit</AddsSubmit>
            </AddsForm>
        </AddsWrapper>
    );
}
