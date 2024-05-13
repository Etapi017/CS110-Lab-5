// Sidebar.js
import React, { useState } from 'react';
import styles from './Sidebar.module.css';

function Sidebar() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (parseInt(value) > 15) {
            alert("number is higher than 15");
        }
    };

    return (
        <div className={styles.sidebar}>
            <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search by number..."
            />
            <h2>Filter</h2>
            <div className={styles.filterSection}>
                <p>Sort By:</p>
                <input type="radio" id="most-viewed" name="sort" value="mostViewed" checked />
                <label htmlFor="most-viewed" className={styles.filterLabel}>Most Viewed</label><br />
                <input type="radio" id="most-shared" name="sort" value="mostShared" />
                <label htmlFor="most-shared" className={styles.filterLabel}>Most Shared</label><br />
                <input type="radio" id="most-emailed" name="sort" value="mostEmailed" />
                <label htmlFor="most-emailed" className={styles.filterLabel}>Most Emailed</label>
            </div>
            <div className={styles.filterSection}>
                <p>Time Frame:</p>
                <input type="radio" id="day" name="time" value="1" checked />
                <label htmlFor="day" className={styles.filterLabel}>Day</label><br />
                <input type="radio" id="week" name="time" value="7" />
                <label htmlFor="week" className={styles.filterLabel}>Week</label><br />
                <input type="radio" id="month" name="time" value="30" />
                <label htmlFor="month" className={styles.filterLabel}>Month</label>

            </div>
        </div>
    );
}

export default Sidebar;
