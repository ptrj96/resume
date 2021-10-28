import React from 'react';
import Container from 'react-bootstrap/Container';
import Job from './Job';

const data = require('./content/JobsData.json')

function Jobs() {
    return (
        <Container>
            { data.jobs.map((job: any) => {
                return (
                    <Job  company={job.company} title={job.title} date={job.date} description={job.description} />
                )
            })}
        </Container>
    );
}

export default Jobs;