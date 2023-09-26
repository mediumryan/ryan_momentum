import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { timeState } from '../../atom';
import { useEffect } from 'react';

const ClockWrapper = styled.div`
    font-size: var(--font-size-medium);
    cursor: default;
`;

export default function Clock() {
    const [time, setTime] = useRecoilState(timeState);

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
            <p>{time.toLocaleTimeString('ko-KR')}</p>
        </ClockWrapper>
    );
}
