import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { useEffect } from 'react';
// import state data
import { timeState } from '../../data/clock';

const ClockWrapper = styled.div`
    color: var(--white-200);
    display: flex;
    flex-direction: column;
    align-items: end;
    cursor: default;
    p:first-child {
        margin-bottom: 1rem;
    }
`;

export default function Clock() {
    const [time, setTime] = useRecoilState(timeState);

    const toDay = new Date();

    const updateTime = () => {
        const newTime = setInterval(() => {
            setTime(new Date(Date.now()));
        }, 1000);
        return newTime;
    };
    useEffect(() => {
        updateTime();
    }, []);

    return (
        <ClockWrapper>
            <p>{toDay.toLocaleDateString()}</p>
            <p>{time.toLocaleTimeString()}</p>
        </ClockWrapper>
    );
}
