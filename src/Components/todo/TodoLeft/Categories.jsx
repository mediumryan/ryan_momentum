import { styled } from 'styled-components';
import { AddsLabel, AddsWrapper } from './AddTodo';
import { useRecoilValue } from 'recoil';
import { categoryState } from '../../../atom';

const CategoryBox = styled.div`
    border: 2px solid var(--text-100);
    border-radius: 10px;
    padding: var(--padding-double-medium);
`;

const Category = styled.button`
    color: var(--text-100);
    font-size: var(--font-size-micro);
    margin: 0 var(--margin-small);
    &:hover {
        color: var(--primary-100);
    }
`;

export default function Categories() {
    const category = useRecoilValue(categoryState);

    return (
        <AddsWrapper>
            <AddsLabel>Categories</AddsLabel>
            <CategoryBox>
                {category.map((cat, index) => {
                    return (
                        <Category key={index} type="button">
                            {cat}
                        </Category>
                    );
                })}
            </CategoryBox>
        </AddsWrapper>
    );
}
