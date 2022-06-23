import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import {RewardsTokenABI, FarmABI, RewardsToken_localhost, Farm_localhost } from '..utils/constants';
export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const farmContract = new ethers.Contract(Farm_localhost, FarmABI, signer)
    const tokenContract = new ethers.Contract(RewardsToken_localhost, RewardsTokenABI, signer)
}

export const TransactionProvider = ({ children }) => {
    return (
        <TransactionContext.Provider value={{}}>
            {children}
        </TransactionContext.Provider>
    )
}