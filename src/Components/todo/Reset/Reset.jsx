import { useSetRecoilState } from 'recoil';
import { styled } from 'styled-components';
import Swal from 'sweetalert2';
// import components
import { categoryState, todoState } from '../../../data/todo';

const ResetWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
`;

const ResetButton = styled.button`
    color: var(--white-100);
    padding: 0.25rem 0.5rem;
    transition: 300ms color;
    &:hover {
        color: var(--accent-200);
    }
`;

export default function Reset() {
    const setCategory = useSetRecoilState(categoryState);
    const setTodo = useSetRecoilState(todoState);

    const resetCats = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Reset all Categories',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                setCategory(['TO_DO', 'DOING', 'DONE']);
                Swal.fire('Success!', '', 'success');
            } else if (result.isDenied) {
                return;
            }
        });
    };

    const resetTasks = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Reset all Tasks',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                setTodo([]);
                Swal.fire('Success!', '', 'success');
            } else if (result.isDenied) {
                return;
            }
        });
    };

    return (
        <ResetWrapper>
            <ResetButton onClick={resetCats}>Reset Category</ResetButton>
            <ResetButton onClick={resetTasks}>Reset Task</ResetButton>
        </ResetWrapper>
    );
}
