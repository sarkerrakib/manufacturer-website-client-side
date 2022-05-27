import React from 'react';

const Stats = ({stats}) => {
    return (
        <div className="stats shadow">

            <div className="stat text-center">
                <div className="stat-title text-lg">{stats.title}</div>
                <div className="stat-value">{stats.value}</div>
                <div className="stat-desc">{stats.desc}</div>
            </div>

        </div>
    );
};

export default Stats;