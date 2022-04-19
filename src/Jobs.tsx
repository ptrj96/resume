import React from 'react';
import Container from 'react-bootstrap/Container';
import Job, { JobProps } from './Job';

type JobsProps = {
    jobs: JobProps[];
}

const data: JobsProps = require('./content/JobsData.json')

function Jobs() {
    return (
        <Container>
            { data.jobs.map((job: JobProps) => {
                return (
                    <Job  company={job.company} title={job.title} date={job.date} description={job.description} />
                )
            })}
        </Container>
    );
}

export default Jobs;