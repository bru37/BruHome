import React from "react";

const IssueDetail = ({ issue }) => {
    return (
        <div>
            <h2>{issue.title}</h2>
            <p>{issue.body}</p>
        </div>
    );
};

export default IssueDetail;
