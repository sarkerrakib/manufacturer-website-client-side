import React from 'react';

const Stats = ({stats}) => {
    return (
        <div class="stats shadow">

            <div class="stat text-center">
                <div class="stat-title text-lg">{stats.title}</div>
                <div class="stat-value">{stats.value}</div>
                <div class="stat-desc">{stats.desc}</div>
            </div>

        </div>
    );
};

export default Stats;