import axios from "axios";

const BASE_URL = "https://api.github.com";
const OWNER = "angular";
const REPO = "angular-cli";

export const fetchIssues = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/repos/${OWNER}/${REPO}/issues`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching issues:", error);
        throw error;
    }
};
