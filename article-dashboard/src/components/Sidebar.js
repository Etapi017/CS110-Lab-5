import React from 'react';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Filter</h2>
            <div className="filter-section">
                <p>Sort By:</p>
                <input type="radio" id="most-viewed" name="sort" value="mostViewed" checked />
                <label htmlFor="most-viewed">Most Viewed</label><br />
                <input type="radio" id="most-shared" name="sort" value="mostShared" />
                <label htmlFor="most-shared">Most Shared</label><br />
                <input type="radio" id="most-emailed" name="sort" value="mostEmailed" />
                <label htmlFor="most-emailed">Most Emailed</label>
            </div>
            <div className="filter-section">
                <p>Time Frame:</p>
                <input type="radio" id="day" name="time" value="1" checked />
                <label htmlFor="day">Day</label><br />
                <input type="radio" id="week" name="time" value="7" />
                <label htmlFor="week">Week</label><br />
                <input type="radio" id="month" name="time" value="30" />
                <label htmlFor="month">Month</label>
            </div>
        </div>
    );
}

export default Sidebar;
