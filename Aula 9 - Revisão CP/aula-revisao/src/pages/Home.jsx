import { useState, useEffect } from "react";

export default function Home() {
  const [nodeRepos, setNodeRepos] = useState([]);
  const [pythonRepos, setPythonRepos] = useState([]);
  const [reactRepos, setReactRepos] = useState([]);
  const API = import.meta.env.VITE_GITHUB_API;

  useEffect(() => {
    fetch(`${API}node&per_page=5`)
      .then((res) => res.json())
      .then((data) => setNodeRepos(data.items));
  }, [API]);

  useEffect(() => {
    fetch(`${API}python&per_page=5`)
      .then((res) => res.json())
      .then((data) => setPythonRepos(data.items));
  }, [API]);

  useEffect(() => {
    fetch(`${API}react&per_page=5`)
      .then((res) => res.json())
      .then((data) => setReactRepos(data.items));
  }, [API]);

  const renderRepos = (repos) => (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <div key={repo.id} className="bg-purple-800 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <img
              src={repo.owner.avatar_url}
              alt={repo.owner.login}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm">{repo.owner.login}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
          <p className="text-gray-300 mb-2">{repo.description || "No description"}</p>
          <p className="text-sm text-gray-400 mb-1">Linguagem: {repo.language || 'N/A'}</p>
          <p className="text-sm text-gray-400 mb-1">Forks: {repo.forks_count}</p>
          <p className="text-sm text-gray-400 mb-2">Atualização: {new Date(repo.updated_at).toLocaleDateString()}</p>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Ver no GitHub
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Explorador de Repositórios do GitHub</h1>
      <p className="text-center text-gray-300 mb-8">Descubra e explore projetos de código aberto no GitHub.</p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Repositórios Node.js</h2>
        {renderRepos(nodeRepos)}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Repositórios Python</h2>
        {renderRepos(pythonRepos)}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Repositórios React</h2>
        {renderRepos(reactRepos)}
      </section>
    </div>
  );
}
