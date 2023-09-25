import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { isNameState, nameState } from '../../atom';
import { useForm } from 'react-hook-form';

const GreetingWrapper = styled.div`
    margin: calc(var(--margin-very-large) * 2) 0 var(--margin-large) 0;
`;

const GreetingHello = styled.h2`
    font-size: var(--font-size-large);
    margin-bottom: var(--margin-large);
    color: var(--primary-100);
    font-weight: 800;
`;

const GreetingForm = styled.form`
    width: 100%;
`;

const GreetingInput = styled.input`
    width: 75%;
    font-size: var(--font-size-medium);
    padding: var(--padding-double-small);
    border-radius: 4px;
    border: none;
`;

const GreetingSubmit = styled.button`
    font-size: var(--font-size-medium);
    padding: var(--padding-double-small);
    margin-left: var(--margin-medium);
    color: var(--text-100);
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
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
                    <GreetingInput {...register('name', { required: true })} />
                    <GreetingSubmit>Submit</GreetingSubmit>
                </GreetingForm>
            )}
        </GreetingWrapper>
    );
}
