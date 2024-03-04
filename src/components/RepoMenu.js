import { useIterator } from "../hooks/useIterator";
import RepositoryReadme from "./RepositoryReadme";

function RepoMenu({ repositories, login }) {
    const [{ name }, previous, next] = useIterator(repositories);
    
    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={previous}>&lt;</button>
                <p key={name}>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <RepositoryReadme login={login} repo={name} />
        </>
    );
}

export default RepoMenu;
