import { useState } from 'react';
import './App.css';

function App() {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };
    return (
        <>
            <main>
                <div className="container">
                    <div className="toggle__main">
                        {['all', 'women', 'men', 'name', 'age'].map((filter) => (
                            <div className="toggle__container" key={filter}>
                                <span className="filter__text">{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                                <label className="switch">
                                    <input type="checkbox" className="chk" checked={activeFilter === filter} onChange={() => handleFilterChange(filter)} />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
