import React, { useState, useEffect, useCallback } from "react";
import ReactMarkdown from "react-markdown";

function RepositoryReadme({ repo, login }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [markdown, setMarkdown] = useState("");

    const loadReadme = useCallback(async (login, repo) => {
        setLoading(true);
        const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
        try {
            const response = await fetch(uri);

            // Проверка на успешный статус ответа
            if (!response.ok) {
                if (response.status === 404) {
                    setMarkdown(null); // readme не найден
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            } else {
                const { download_url } = await response.json();
                const readmeContent = await fetch(download_url).then((res) =>
                    res.text()
                );
                setMarkdown(readmeContent);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!repo || !login) return;
        loadReadme(login, repo);
    }, [repo, login, loadReadme]);

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (loading) return <p>Loading...</p>;

    if (markdown === null) return <p>Readme не найден</p>;

    return <ReactMarkdown children={markdown} />;
}

export default RepositoryReadme;