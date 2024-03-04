import Fetch from "./Fetch";
import RepoMenu from './RepoMenu';

function UserRepositories({ login, selectedRepo, onSelect = (f) => f }) {
    const key = `${login}_${new Date().getTime()}`;
    
    return (
        <Fetch
            key={key}
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ data }) => (
                <RepoMenu
                    repositories={data}
                    selected={selectedRepo}
                    onSelect={onSelect}
                    login={login}
                />
            )}
        />
    );
}

export default UserRepositories;