import Fetch from "./Fetch";
import UserDetails from './UserDetails';

function GitHubUser({ login }) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetails}
        />
    );
}

export default GitHubUser;
