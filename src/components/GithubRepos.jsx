import { useEffect, useState } from "react";
import axios from "axios";

export default function GithubRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/USERNAME/repos")
      .then(res => setRepos(res.data.slice(0, 6)));
  }, []);

  return (
    <section className="section">
      <h2>GitHub Repositories</h2>

      <div className="grid">
        {repos.map(repo => (
          <div key={repo.id} className="card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank">View Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}
