import HomePage from './pages/homepage/homepage.component';

import Header from './components/header/header.component';

import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <div className='page-container'>
                <HomePage />
            </div>
        </div>
    );
}

export default App;
