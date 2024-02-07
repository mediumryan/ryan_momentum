import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { timeState } from '../../data/clock';
import { useEffect } from 'react';

const ClockWrapper = styled.div`
    font-size: var(--font-size-medium);
    display: flex;
    flex-direction: column;
    align-items: center;
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
            <p>{time.toLocaleTimeString('ko-KR')}</p>
        </ClockWrapper>
    );
}
