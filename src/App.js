import './App.css';
import firebase from './firebase';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from "./context/GlobalState";

function App() {
  React.useEffect(() => {
    const msg = firebase.messaging();
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.log("token", data)
    })
  },[])
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
