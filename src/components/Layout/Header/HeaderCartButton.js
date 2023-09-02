import CartIcon from '../../Cart/CartIcon';
import Classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return (<button className = {Classes.button} OnClick = {props.onClick}>
            <span className = {Classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span classNmae = {Classes.badge}>
                3
            </span>
        </button>
    );
};
export default HeaderCartButton;