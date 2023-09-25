import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { randomBg } from '../../atom';

const BgImg = styled.img`
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.85;
    z-index: -1;
`;

export default function Bg() {
    const bg = useRecoilValue(randomBg);

    return <BgImg src={bg.imagePath} alt="background image" />;
}
