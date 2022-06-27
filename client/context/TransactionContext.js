import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import {RewardsTokenABI, FarmABI, RewardsToken_localhost, Farm_localhost } from '../utils/constants';

export const TransactionContext = React.createContext();

export const getEthereumContract = async (contract) => {
    const web3 = new Web3Modal()
    const connection = await web3.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const farmContract = new ethers.Contract(Farm_localhost, FarmABI, signer)
    const tokenContract = new ethers.Contract(RewardsToken_localhost, RewardsTokenABI, signer)

    const mapContract = {
        "farm": farmContract,
        "token": tokenContract
    }
    const transactionContract = mapContract[contract];
    console.log('provider info: ',{
        provider, 
        signer,
        contract,
        transactionContract
    })
    return transactionContract;
}

export const TransactionProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState(null)
   
    const checkIfWalletConnected = async () => {
        try {
            if(!window.ethereum) return alert("Please install metamask")
            console.log("check window ethereum: ", window.ethereum)
            const accounts = await window.ethereum.request({ method: 'eth_accounts' })
    
            if (accounts.length) {
                setConnectedAccount(accounts[0]);
            } else {
                console.log('No accounts found')
            }
            console.log("Log accounts: ", accounts)
        } catch (error) {
            console.log(error)
        }
    }

    // const checkIfWalletChanged = async () => {
    //     ethereum.on('accountsChanged', function (accounts) {
    //         getAccount();
    //     })
    // }
    
    useEffect(() =>{
        checkIfWalletConnected()
    },[connectedAccount])
    
    const connectWallet = async () => {
        try {
            if(!window.ethereum) return alert("Please install metamask")
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            setConnectedAccount(accounts[0])
        } catch (error) {
            console.log(error)
            throw new Error('No ethereum object.')
        }
    }
    return (
      <TransactionContext.Provider value={{ connectWallet, connectedAccount, getEthereumContract }}>
          {children}
      </TransactionContext.Provider>
  )
}