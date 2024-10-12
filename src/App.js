import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import TransactionItem from './Components/Transaction/TransactionItem';
import TransactionSummary from './Components/Transaction/TransactionSummary';
import TransactionList from './Components/Transaction/TransactionList';
import Footer from './Components/Footer/Foooter';
import TransactionMain from './Components/Transaction/Transactionmain';
function App() {
  return (
    <div>
    <Header />
    <TransactionMain/>
    <Footer />
    </div>
      );
}

export default App;