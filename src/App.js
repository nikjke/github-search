import "./App.css";
import GitHubUser from "./components/GitHubUser";
import { useState } from "react";
import SearchForm from "./components/SearchForm";

function App() {
    const [login, setLogin] = useState("nikjke");

    const handleSearch = (login) => {
        if (login) return setLogin(login);
        setLogin("");
    };

    if (!login) return <SearchForm value={login} onSearch={handleSearch} />;
    
    return (
        <>
            <SearchForm value={login} onSearch={handleSearch} />
            <GitHubUser login={login} />
        </>
    );
}

export default App;
