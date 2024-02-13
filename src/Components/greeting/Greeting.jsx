import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
// import state data
import { isNameState, nameState } from '../../data/greeting';

const GreetingWrapper = styled.div`
    flex-basis: 10%;
    z-index: 999;
`;

const GreetingHello = styled.h2`
    font-size: 2.5rem;
    color: var(--accent-100);
    font-weight: 700;
    margin-bottom: 1rem;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        margin-top: 2.5rem;
    }
`;

const GreetingForm = styled.form`
    width: 100%;
    display: flex;
`;

const GreetingInput = styled.input`
    width: 75%;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    border: none;
`;

const GreetingSubmit = styled.button`
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    margin-left: 0.5rem;
    color: var(--white-200);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    transition: 300ms color;
    &:hover {
        color: var(--accent-100);
    }
`;

export default function Greeting() {
    // toggle elements
    const [isName, setIsName] = useRecoilState(isNameState);
    // name
    const [name, setName] = useRecoilState(nameState);
    // input
    const { register, handleSubmit, setValue } = useForm();
    const submitName = (data) => {
        setName(data.name);
        setIsName((prev) => !prev);
        setValue('name', '');
    };

    return (
        <GreetingWrapper>
            <GreetingHello>
                {isName ? `Hello, ${name}` : 'What is your name?'}
            </GreetingHello>
            {isName ? null : (
                <GreetingForm onSubmit={handleSubmit(submitName)}>
                    <GreetingInput {...register('name')} />
                    <GreetingSubmit>Submit</GreetingSubmit>
                </GreetingForm>
            )}
        </GreetingWrapper>
    );
}
