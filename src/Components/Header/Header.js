import React from 'react';
import { CiWallet } from "react-icons/ci";
import "./Header.css";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center  m-2 p-3 rounded mt-3 mb-5" id='Header'>
      <h1 className="text-warning " id='iconlar'><CiWallet  size={45} color='' />Expense Tracker</h1>
      <div className='d-flex justify-content-between align-items-center '>
        <button className="btn btn-success">Inflow</button>
        <button className="btn btn-danger mx-2">Outflow</button>
        <button className="btn btn-warning">Logout</button>
      </div>
    </header>
  );
};

export default Header;
