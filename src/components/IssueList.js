import React from "react";

const IssueList = ({ issues }) => {
    return (
        <ul>
            {issues.map((issue) => (
                <li key={issue.id}>{issue.title}</li>
            ))}
        </ul>
    );
};

export default IssueList;
