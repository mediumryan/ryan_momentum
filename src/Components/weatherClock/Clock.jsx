import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { timeState } from '../../atom';
import { useEffect } from 'react';

const ClockWrapper = styled.div`
    padding: var(--padding-double-medium);
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
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
            <p>{time.toLocaleTimeString('ja-JP')}</p>
        </ClockWrapper>
    );
}
