import React from 'react';
const data = require('./content/JobsData.json')

function Jobs() {
    return (
        <ul>
            { data.jobs.map((job: any) => {
                return (
                    <li>
                        { Job(job.company, job.title, job.date, job.description) }
                    </li>
                )
            })}
        </ul>
    );
}

function Job(company: string, title: string, date: string, description: Array<string>) {
    return (
        <div>
            <p> { company } </p>
            <p> { title } </p>
            <p> { date } </p>
            <ul>
                {description.map((x) => {
                    return (
                        <li>
                            { x }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Jobs;