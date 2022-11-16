import React from 'react'
import '../CSS/cartShortCut.css'
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -15,
        top: 0,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '10px 10px',
    },
}));


const CartShortCut = ({ cart }) => {
    const navigate = useNavigate();

    let quantity = 0;
    for (const item of cart) {
        quantity = quantity + item.quantity;
    }

    const redirectToOrderSummary = () => {
        navigate('/order_summary')
    }
    return (
        <div className='cart-sc' onClick={redirectToOrderSummary}>
            <StyledBadge badgeContent={quantity} color="secondary">
                <ShoppingCartIcon className='s-icon' />
            </StyledBadge>
        </div>
    )
}

export default CartShortCut