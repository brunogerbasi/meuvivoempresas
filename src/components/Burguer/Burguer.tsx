import React from 'react';
import { BurgerBtn } from './Burguer.style';

interface BurgerProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
    return (
        <BurgerBtn aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <div className={open ? 'open' : ''}></div>
            <div className={open ? 'open' : ''}></div>
            <div className={open ? 'open' : ''}></div>
        </BurgerBtn>
    )
}

export default Burger;