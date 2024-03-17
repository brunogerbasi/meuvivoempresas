import { useHeaderContext } from '../../hooks/useHeaderContext';
import { BurgerBtn } from './Burguer.style';

const Burger = () => {
    const { open, toggleMenu } = useHeaderContext();

    return (
        <BurgerBtn aria-label="Button Menu"  onClick={toggleMenu}>
            <div className={open ? 'open' : ''}></div>
            <div className={open ? 'open' : ''}></div>
            <div className={open ? 'open' : ''}></div>
        </BurgerBtn>
    )
}

export default Burger;