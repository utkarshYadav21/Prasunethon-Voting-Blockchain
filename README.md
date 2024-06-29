# Blockchain-Based Voting System

## Table of Contents
1. [Introduction](#1-introduction)
2. [Smart Contract](#2-smart-contract)
3. [Frontend (React)](#3-frontend-react)
4. [Getting Started](#4-getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
5. [Usage](#5-usage)
6. [Technologies Used](#6-technologies-used)
7. [Contributors](#7-contributors)

## 1. Introduction

Welcome to the Blockchain-Based Voting System project! This system aims to provide a secure, transparent, and tamper-proof voting platform using blockchain technology. Voters can confidently cast their ballots while ensuring the integrity and fairness of the election process.

## 2. Smart Contract

The core functionality of the voting system is implemented in a Solidity smart contract. This contract manages candidates, voters, and election details, ensuring only authorized votes are counted and preventing double-voting.

## 3. Frontend (React)

The frontend of the voting system is built using React to provide a user-friendly interface for voters and administrators to interact with the blockchain.

### Components

- **App Component:** Main entry point of the React application.
- **Profile Component:** Displays user/admin details.
- **Login Component:** Handles user authentication and account login.
- **Elections Component:** Lists active elections and allows users to vote.
- **Result Component:** Displays election results after voting ends.

## 4. Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm or yarn
- MetaMask extension in your browser

### Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/utkarshYadav21/Prasunethon-Voting-Blockchain.git
   cd Prasunethon-Voting-Blockchain

2. Install dependencies:
   
   ```bash
   cd Frontend
   npm install
   ```

   ```bash
   cd Backend
   npm install
   ```

   ```bash
   cd Contract
   npm install
   ```

**Getting Started with Backend**
## Steps

1. **Save and Secure:**
   - Save your `.env` file securely.
   - Ensure that this file is not shared publicly or included in version control.

2. **MongoDB Configuration:**
   - Obtain your MongoDB connection string and replace the placeholder in the `DATABASE` variable.
     ```dotenv
     DATABASE=mongodb+srv://your-username:your-password@your-cluster-url/your-database-name?retryWrites=true&w=majority
     ```

3. **JWT Secret:**
   - Replace the placeholders in the `JWT_SECRET_KEY` variable with your preferred JSON Web Token (JWT) secret key 
     ```dotenv
     JWT_SECRET_KEY=your-secret-key-for-json-web-token
     ```

3. **Port Number:**
   - Replace the placeholders in the `PORT` variable with your preferred port number for backend 
     ```dotenv
     JWT_SECRET_KEY=your-secret-key-for-json-web-token
     ```

4. **Run the Backend:**
   - With the configuration in place, you can now run your backend server.
   - Run command
    ```bash
    npm start
    ```
   - Backend will on 127.0.0.1:PORT

**Getting Started with Frontend**
## Steps

1. **Run the Frontend:**
   - Run command
    ```bash
    npm run dev
    ```
2. The Frontend Application Runs on **localhost:5173**

**Getting Started with Contract**
## Steps

1. **Save and Secure:**
   - Save your `.env` file securely.
   - Ensure that this file is not shared publicly or included in version control.

2. **Sepolia testnet url:**
   - Replace the placeholders in the `SEPOLIA_RPC_URL` variable with RPC url for sepolia testnet from alchemy site 
     ```dotenv
     SEPOLIA_RPC_URL=rpc-url-for-sepolia-testnet
     ```
3. **Private key:**
   - Replace the placeholders in the `PRIVATE_KEY` variable with your private key of your metamask account. 
     ```dotenv
     PRIVATE_KEY=your-private-key-of-metamask-account
     ```

4. **Deploy Contract:**
   - Run command
    ```bash
    npx hardhat run ./scripts/deploy.js --network sepolia
    ```
   - The deployed contract will give a address of the contract on which the contract was deployed
   - Take this address and paste it in the .env file of Fronend directory under `CONTRACT_ADDRESS` variable.

## 5. Usage

### Admin Tasks

- Add candidates using the admin interface.
- Authorize voters to participate in elections.

### Voter Experience

- Connect with MetaMask to cast votes securely.
- View election details and candidate information.
- Check election results after voting ends.

## 6. Technologies Used

- **Smart Contract:** Solidity
- **Frontend:** React
- **Backend:** Nodejs Expressjs
- **Blockchain Integration:** ethers.js, hardhat
- **Styling:** Tailwind CSS

## 7. Contributors
- [Anshika Arora](https://github.com/AnshikaArora207)
- [Moksh Jain](https://github.com/Moksh05)
- [Utkarsh Yadav](https://github.com/utkarshYadav21)
