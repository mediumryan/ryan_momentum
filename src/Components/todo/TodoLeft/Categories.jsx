import { styled } from 'styled-components';
import { AddsLabel, AddsWrapper } from './AddTodo';
import { useRecoilValue } from 'recoil';
import { categories } from '../../../atom';

const CategoryBox = styled.div``;

const Category = styled.button``;

export default function Categories() {
    const category = useRecoilValue(categories);

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
