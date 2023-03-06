import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../states/index';

const Shop = () => {
    const dispatch = useDispatch();
    const {withdraw, deposit} = bindActionCreators(actionCreators, dispatch);

    return (
        <>
            <h2>Deposit/Withdraw Money</h2>
            <div className="d-flex my-2"> 
                <button className="btn btn-primary mx-2" onClick={()=>withdraw(100)}>-</button>
                <div className="mx-2">Update Balance</div>
                <button className="btn btn-primary mx-2" onClick={()=>deposit(100)}>+</button>
            </div>
        </>
    );
};

export default Shop;
