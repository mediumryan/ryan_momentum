import { styled } from 'styled-components';
import { useRecoilState } from 'recoil';
// import components
import { AddsLabel, AddsWrapper } from './AddTodo';
// import state data
import { categoryState, nowCategory } from '../../../data/todo';
// import icons
import { FaTrashAlt } from 'react-icons/fa';

const CategoryBox = styled.div`
    width: 60%;
    max-height: 240px;
    padding: 1rem;
    overflow-y: scroll;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        max-height: 100px;
    }
`;

const Category = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
    svg {
        transition: 300ms color;
        &:hover {
            color: var(--white-200);
        }
    }
`;

export default function Categories() {
    const [category, setCategory] = useRecoilState(categoryState);
    const [nowCat, setNowCat] = useRecoilState(nowCategory);
    // deleteCategory
    const deleteCategory = (cat) => {
        const newCat = category.filter((i) => i !== cat);
        setCategory(newCat);
    };
    // change now category
    const changeNowCat = (cat) => {
        setNowCat(cat);
    };

    return (
        <AddsWrapper>
            <AddsLabel>Categories</AddsLabel>
            <CategoryBox>
                {category.map((cat, index) => {
                    return (
                        <Category key={index}>
                            <span
                                onClick={() => {
                                    changeNowCat(cat);
                                }}
                                style={{
                                    color: nowCat === cat ? '#ff983f' : '#fff',
                                }}
                            >
                                {cat}
                            </span>
                            <FaTrashAlt
                                onClick={() => {
                                    deleteCategory(cat);
                                }}
                            />
                        </Category>
                    );
                })}
            </CategoryBox>
        </AddsWrapper>
    );
}
