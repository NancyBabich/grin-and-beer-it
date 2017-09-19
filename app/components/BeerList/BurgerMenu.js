import React from 'react';
import styled from 'styled-components';

import Colors from '../../consts/colors';

const BurgerMenu = () => 
    <BurgerMenuContainer>
        <BurgerIcon>
            <BurgerBar />
            <BurgerBar />
            <BurgerBar />
        </BurgerIcon>
    </BurgerMenuContainer>

export default BurgerMenu;

const BurgerBar = styled.div`
    width: 50px;
    height: 5px;
    background-color: ${Colors.themeColor};
`;

const BurgerIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &:hover {
        cursor: pointer;
    }
`;

const BurgerMenuContainer = styled.div`
    display: inline-block;
    float: right;
    height: 100%;
    padding: 5px;
`;