import React, { useState, useEffect } from "react";
import { Star, GitFork, ExternalLink, FolderGit2, ArrowUpRight, Code2, Sparkles, BookOpen } from "lucide-react";
import { GithubIcon } from "../common/Icons";
import { personalInfo } from "../../data/portfolioData";
import { moreGithubProjects } from "../../data/projectsData";

export default function GitHubSection() {
  const [repos, setRepos] = useState(moreGithubProjects);
  const [profileData, setProfileData] = useState({
    public_repos: 14,
    followers: 18,
    following: 24,
    login: personalInfo.socials.githubUsername
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        const userRes = await fetch(`https://api.github.com/users/${personalInfo.socials.githubUsername}`);
        if (userRes.ok) {
          const uData = await userRes.json();
          setProfileData({
            public_repos: uData.public_repos || 14,
            followers: uData.followers || 18,
            following: uData.following || 24,
            login: uData.login || personalInfo.socials.githubUsername
          });
        }

        const reposRes = await fetch(`https://api.github.com/users/${personalInfo.socials.githubUsername}/repos?sort=updated&per_page=12`);
        if (reposRes.ok) {
          const rData = await reposRes.json();
          if (Array.isArray(rData) && rData.length > 0) {
            const formatted = rData.map((r) => ({
              name: r.name,
              description: r.description || "Public repository and software implementation on GitHub.",
              language: r.language || "C++ / Web",
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url
            }));
            setRepos(formatted);
          }
        }
      } catch (err) {
        console.log("Using verified repository data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPEN SOURCE & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Building in <span className="text-gradient-cyan">Public</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            All code repositories, full-stack systems, algorithmic solutions, and prototypes available directly on GitHub.
          </p>
        </div>

        {/* GitHub Overview Header Card (Clean & Direct) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 p-[1.5px] shadow-lg shadow-cyan-500/25 shrink-0">
                <div className="w-full h-full bg-[#0d1424] rounded-[14px] flex items-center justify-center">
                  <GithubIcon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white flex items-center gap-2">
                  @{personalInfo.socials.githubUsername}
                  <span className="text-xs font-mono font-normal text-cyan-400">/ Prathamesh Kale</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  B.Tech CSE @ IIIT Nagpur • C++, React, TypeScript, Python & Algorithms
                </p>
              </div>
            </div>

            {/* GitHub Stats Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                <div className="text-sm font-bold font-mono text-cyan-300">{profileData.public_repos}</div>
                <div className="text-[10px] uppercase font-mono text-slate-400">Repositories</div>
              </div>

              <div className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                <div className="text-sm font-bold font-mono text-purple-300">{profileData.followers}</div>
                <div className="text-[10px] uppercase font-mono text-slate-400">Followers</div>
              </div>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Repositories Grid with Direct Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-6 rounded-2xl border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <FolderGit2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h4 className="font-bold font-mono text-sm text-white group-hover:text-cyan-300 transition-colors truncate">
                      {repo.name}
                    </h4>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block shadow-sm shadow-cyan-400/50" />
                  {repo.language}
                </span>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-300 group-hover:text-amber-300 transition-colors">
                    <Star className="w-3.5 h-3.5" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
