import { styled } from 'styled-components';
import { AddsLabel, AddsWrapper } from './AddTodo';
import { useRecoilState } from 'recoil';
import { categoryState, nowCategory } from '../../../atom';
import { FaTrashAlt } from 'react-icons/fa';

const CategoryBox = styled.div`
    width: 75%;
    max-height: 120px;
    overflow-y: scroll;
    border: 2px solid var(--text-100);
    border-radius: 10px;
    padding: var(--padding-double-medium);
`;

const Category = styled.button`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-100);
    font-size: var(--font-size-micro);
    margin: var(--margin-small) 0;
    svg {
        margin-left: var(--margin-small);
        &:hover {
            color: var(--primary-100);
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
                                    color:
                                        nowCat === cat ? '#ff983f' : '#ffffff',
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
