import React, { useState, useRef, useEffect } from "react";
import { Check, Copy, CornerDownLeft, FolderGit2 } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import BorderGlow from "../common/BorderGlow";

export default function HeroTerminal({ onShowToast }) {
  const [activeTab, setActiveTab] = useState("cpp");
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState([
    { type: "system", text: "⚡ Environment initialized • Prathamesh Kale [IIIT Nagpur]" },
    { type: "system", text: "Type 'help' or click quick commands below to explore." }
  ]);
  const terminalEndRef = useRef(null);

  const tabs = [
    { id: "cpp", name: "about.cpp", lang: "C++", color: "text-indigo-400", dot: "bg-indigo-400" },
    { id: "python", name: "learning_ml.py", lang: "Python", color: "text-sky-400", dot: "bg-sky-400" },
    { id: "json", name: "stats.json", lang: "JSON", color: "text-emerald-400", dot: "bg-emerald-400" },
    { id: "cli", name: "terminal", lang: "Bash", color: "text-violet-400", dot: "bg-violet-400" }
  ];

  const quickCommands = ["help", "skills", "projects", "stats", "education", "hire"];

  useEffect(() => {
    if (activeTab === "cli" && terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [commandHistory, activeTab]);

  const rawCodeSnippets = {
    cpp: `#include <iostream>
#include <vector>
#include <string>

class Developer {
public:
    std::string name = "Prathamesh Kale";
    std::string college = "IIIT Nagpur";
    std::string degree = "B.Tech CSE (2024-2028)";
    double cgpa = 7.87;

    std::vector<std::string> coreStack = {
        "C++", "DSA", "JavaScript", "React.js", "Tailwind CSS"
    };

    void solveProblem() {
        std::cout << "Solving, building, and optimizing!\\n";
    }
};

int main() {
    Developer prathamesh;
    prathamesh.solveProblem();
    return 0;
}`,
    python: `# Machine Learning Journey & Active Exploration
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split

class MLExplorer:
    def __init__(self):
        self.focus_areas = [
            "Data Wrangling & Analysis",
            "NumPy & Pandas Pipelines",
            "Matplotlib & Seaborn Visualizations",
            "Scikit-learn Algorithms"
        ]
        self.mindset = "Curious & Growth-Oriented"
        
    def learn_and_iterate(self):
        print("Transforming math concepts into working models.")

explorer = MLExplorer()
explorer.learn_and_iterate()`,
    json: `{
  "developer": "Prathamesh Kale",
  "institute": "IIIT Nagpur",
  "degree": "B.Tech Computer Science & Engineering",
  "cgpa": 7.87,
  "hsc_percentage": 89.33,
  "ssc_percentage": 97.00,
  "leetcode_solved": "200+",
  "codechef_rating": 1538,
  "codechef_stars": 2,
  "hackathon_rank": "Top 7 Finalist",
  "status": "Ready to build impactful tech"
}`
  };

  const handleCommandSubmit = (cmdToRun) => {
    const cmd = (cmdToRun || inputVal).trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...commandHistory, { type: "input", text: `$ ${cmd}` }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Available commands:\n• skills      - Technical languages & frameworks\n• projects    - Featured engineering projects\n• stats       - Competitive programming metrics\n• education   - Academic credentials & institute\n• contact     - Email, LinkedIn, and handles\n• github      - Open GitHub in a new tab\n• clear       - Reset the terminal output\n• hire / sudo - Fast track collaboration inquiry"
        });
        break;
      case "skills":
        newHistory.push({
          type: "output",
          text: "🔧 Core Tech Stack:\n  - Languages: C++, C, Python, JavaScript\n  - Web Tech : React.js, Tailwind CSS, HTML5/CSS3, PHP\n  - Database : MongoDB, Atlas Mongoose\n  - Exploring: Machine Learning (NumPy, Pandas, Scikit-learn)"
        });
        break;
      case "projects":
        newHistory.push({
          type: "output",
          text: "🚀 Featured Projects:\n  1. Cricket Score Simulator (C++ & React Engine)\n  2. SAMS – Smart Attendance Management System\n  3. Crescendo – Cultural & Music Club Web Portal\n  4. Habit Tracker (Native Android Studio & XML)\n  5. IIIT Nagpur Portal Clone"
        });
        break;
      case "stats":
        newHistory.push({
          type: "output",
          text: "📊 Coding Metrics:\n  - LeetCode Solved: 200+ problems\n  - CodeChef Rating: 1538 (2★ Rated)\n  - IIITN Hackathon: Top 7 (Top 3 Shortlisted)"
        });
        break;
      case "education":
        newHistory.push({
          type: "output",
          text: "🎓 Education:\n  - IIIT Nagpur: B.Tech CSE (Completed 2nd Year) [CGPA: 7.87]\n  - HSC (Spring Dales): 89.33%\n  - SSC (Bhaskaracharya): 97.00%"
        });
        break;
      case "contact":
        newHistory.push({
          type: "output",
          text: `📬 Contact Information:\n  - Email   : ${personalInfo.socials.email}\n  - LinkedIn: ${personalInfo.socials.linkedin}\n  - GitHub  : ${personalInfo.socials.github}`
        });
        break;
      case "github":
        newHistory.push({
          type: "output",
          text: `Opening GitHub: ${personalInfo.socials.github}`
        });
        window.open(personalInfo.socials.github, "_blank");
        break;
      case "clear":
        setCommandHistory([]);
        setInputVal("");
        return;
      case "sudo hire":
      case "hire":
      case "sudo":
        newHistory.push({
          type: "highlight",
          text: `✨ Let's build something great! Reach out at ${personalInfo.socials.email} or use the contact form below!`
        });
        break;
      default:
        newHistory.push({
          type: "error",
          text: `zsh: command not found: '${cmd}'. Type 'help' for available commands.`
        });
    }

    setCommandHistory(newHistory);
    setInputVal("");
  };

  const handleCopyCode = () => {
    const textToCopy = rawCodeSnippets[activeTab] || "";
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    if (onShowToast) onShowToast("Code copied to clipboard!", "info");
    setTimeout(() => setCopied(false), 2000);
  };

  // Syntax highlighted lines rendering
  const renderCppCode = () => (
    <div className="space-y-0.5">
      <div><span className="text-violet-400 font-semibold">#include</span> <span className="text-emerald-400">&lt;iostream&gt;</span></div>
      <div><span className="text-violet-400 font-semibold">#include</span> <span className="text-emerald-400">&lt;vector&gt;</span></div>
      <div><span className="text-violet-400 font-semibold">#include</span> <span className="text-emerald-400">&lt;string&gt;</span></div>
      <div className="h-2" />
      <div><span className="text-violet-400 font-semibold">class</span> <span className="text-amber-300 font-bold">Developer</span> {"{"}</div>
      <div><span className="text-violet-400 font-semibold">public:</span></div>
      <div className="pl-4"><span className="text-sky-400">std::string</span> name = <span className="text-emerald-300">"Prathamesh Kale"</span>;</div>
      <div className="pl-4"><span className="text-sky-400">std::string</span> college = <span className="text-emerald-300">"IIIT Nagpur"</span>;</div>
      <div className="pl-4"><span className="text-sky-400">std::string</span> degree = <span className="text-emerald-300">"B.Tech CSE (2024-2028)"</span>;</div>
      <div className="pl-4"><span className="text-sky-400">double</span> cgpa = <span className="text-amber-300">7.87</span>;</div>
      <div className="h-2" />
      <div className="pl-4"><span className="text-sky-400">std::vector</span>&lt;<span className="text-sky-400">std::string</span>&gt; coreStack = {"{"}</div>
      <div className="pl-8 text-emerald-300">"C++", "DSA", "JavaScript", "React.js", "Tailwind CSS"</div>
      <div className="pl-4">{"};"}</div>
      <div className="h-2" />
      <div className="pl-4"><span className="text-sky-400">void</span> <span className="text-indigo-400 font-semibold">solveProblem</span>() {"{"}</div>
      <div className="pl-8"><span className="text-sky-400">std::cout</span> &lt;&lt; <span className="text-emerald-300">"Solving, building, and optimizing!\\n"</span>;</div>
      <div className="pl-4">{"}"}</div>
      <div>{"};"}</div>
      <div className="h-2" />
      <div><span className="text-sky-400">int</span> <span className="text-indigo-400 font-semibold">main</span>() {"{"}</div>
      <div className="pl-4"><span className="text-amber-300 font-bold">Developer</span> prathamesh;</div>
      <div className="pl-4">prathamesh.<span className="text-indigo-400 font-semibold">solveProblem</span>();</div>
      <div className="pl-4"><span className="text-violet-400 font-semibold">return</span> <span className="text-amber-300">0</span>;</div>
      <div>{"}"}</div>
    </div>
  );

  const renderPythonCode = () => (
    <div className="space-y-0.5">
      <div className="text-zinc-500 italic"># Machine Learning Roadmap (Active Exploration)</div>
      <div><span className="text-violet-400 font-semibold">import</span> <span className="text-sky-300">numpy</span> <span className="text-violet-400 font-semibold">as</span> <span className="text-zinc-200">np</span></div>
      <div><span className="text-violet-400 font-semibold">import</span> <span className="text-sky-300">pandas</span> <span className="text-violet-400 font-semibold">as</span> <span className="text-zinc-200">pd</span></div>
      <div><span className="text-violet-400 font-semibold">from</span> <span className="text-sky-300">sklearn.model_selection</span> <span className="text-violet-400 font-semibold">import</span> <span className="text-zinc-200">train_test_split</span></div>
      <div className="h-2" />
      <div><span className="text-violet-400 font-semibold">class</span> <span className="text-amber-300 font-bold">MLExplorer</span>:</div>
      <div className="pl-4"><span className="text-violet-400 font-semibold">def</span> <span className="text-indigo-400 font-semibold">__init__</span>(<span className="text-rose-400 italic">self</span>):</div>
      <div className="pl-8"><span className="text-rose-400 italic">self</span>.focus_areas = [</div>
      <div className="pl-12 text-emerald-300">"Data Analysis & Wrangling",</div>
      <div className="pl-12 text-emerald-300">"NumPy & Pandas Pipelines",</div>
      <div className="pl-12 text-emerald-300">"Matplotlib Visualizations",</div>
      <div className="pl-12 text-emerald-300">"Scikit-learn Algorithms"</div>
      <div className="pl-8">]</div>
      <div className="pl-8"><span className="text-rose-400 italic">self</span>.mindset = <span className="text-emerald-300">"Curious & Growth-Oriented"</span></div>
      <div className="h-2" />
      <div className="pl-4"><span className="text-violet-400 font-semibold">def</span> <span className="text-indigo-400 font-semibold">learn_and_iterate</span>(<span className="text-rose-400 italic">self</span>):</div>
      <div className="pl-8"><span className="text-sky-400">print</span>(<span className="text-emerald-300">"Transforming mathematical concepts into working models."</span>)</div>
      <div className="h-2" />
      <div>explorer = <span className="text-amber-300 font-bold">MLExplorer</span>()</div>
      <div>explorer.<span className="text-indigo-400 font-semibold">learn_and_iterate</span>()</div>
    </div>
  );

  const renderJsonCode = () => (
    <div className="space-y-0.5">
      <div>{"{"}</div>
      <div className="pl-4"><span className="text-sky-300">"developer"</span>: <span className="text-emerald-300">"Prathamesh Kale"</span>,</div>
      <div className="pl-4"><span className="text-sky-300">"institute"</span>: <span className="text-emerald-300">"IIIT Nagpur"</span>,</div>
      <div className="pl-4"><span className="text-sky-300">"degree"</span>: <span className="text-emerald-300">"B.Tech CSE (2024-2028)"</span>,</div>
      <div className="pl-4"><span className="text-sky-300">"cgpa"</span>: <span className="text-amber-300">7.87</span>,</div>
      <div className="pl-4"><span className="text-sky-300">"hsc_percentage"</span>: <span className="text-amber-300">89.33</span>,</div>
      <div className="pl-4"><span className="text-sky-300">"ssc_percentage"</span>: <span className="text-amber-300">97.00</span>,</div>
      <div className="pl-4"><span className="text-sky-300">"leetcode_solved"</span>: <span className="text-emerald-300">"200+"</span>,</div>
      <div className="pl-4"><span className="text-sky-300">"codechef_rating"</span>: <span className="text-amber-300">1538</span>,</div>
      <div className="pl-4"><span className="text-sky-300">"codechef_stars"</span>: <span className="text-amber-300">2</span>,</div>
      <div className="pl-4"><span className="text-sky-300">"hackathon_rank"</span>: <span className="text-emerald-300">"Top 7 Finalist"</span>,</div>
      <div className="pl-4"><span className="text-sky-300">"status"</span>: <span className="text-emerald-300">"Ready to build impactful tech"</span></div>
      <div>{"}"}</div>
    </div>
  );

  return (
    <BorderGlow
      borderRadius={20}
      glowRadius={36}
      glowColor="200 80 60"
      colors={["#06b6d4", "#6366f1", "#a855f7", "#38bdf8"]}
      backgroundColor="#0d1424"
      className="w-full max-w-full shadow-2xl shadow-black/80 overflow-hidden border border-cyan-500/25"
    >
      {/* 1. Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0a0f1d] border-b border-white/[0.08] select-none">
        {/* Left macOS style dots */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] inline-block shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] inline-block shadow-sm" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[11px] font-mono text-zinc-300">
            <FolderGit2 className="w-3 h-3 text-cyan-400" />
            <span className="text-white font-semibold">prathamesh</span>
            <span className="text-zinc-400">@iiitn</span>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-1.5">
          {activeTab !== "cli" && (
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-zinc-400 hover:text-white hover:bg-white/[0.06] rounded-md border border-transparent hover:border-white/10 transition-colors"
              title="Copy code"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
          {activeTab === "cli" && (
            <button
              onClick={() => handleCommandSubmit("clear")}
              className="px-2.5 py-1 text-[11px] font-mono text-zinc-400 hover:text-rose-300 hover:bg-white/[0.06] rounded-md transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* 2. File Tabs Navigation Strip */}
      <div className="flex items-center gap-1 px-2 pt-1.5 pb-0 bg-[#0a0f1d]/90 border-b border-white/[0.08] overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-all border-t border-x relative shrink-0 ${
                isActive
                  ? "bg-[#0d1424] text-white border-white/15 font-semibold shadow-inner"
                  : "text-zinc-400 hover:text-zinc-200 border-transparent hover:bg-white/[0.04]"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${tab.dot} ${isActive ? "opacity-100 ring-2 ring-indigo-500/30" : "opacity-60"}`} />
              <span className={isActive ? tab.color : ""}>{tab.name}</span>
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* 3. Editor & Terminal Body */}
      <div className="p-4 font-mono text-xs sm:text-[13px] leading-relaxed bg-[#0d1424] min-h-[300px] max-h-[340px] overflow-y-auto">
        {activeTab === "cli" ? (
          <div className="space-y-2.5">
            {commandHistory.map((item, idx) => (
              <div key={idx} className="whitespace-pre-wrap font-mono text-xs sm:text-[13px]">
                {item.type === "system" && <span className="text-indigo-400/90 font-medium">{item.text}</span>}
                {item.type === "input" && (
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="text-indigo-400">➜</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === "output" && <div className="text-zinc-300 pl-4 py-1 border-l border-white/10 bg-white/[0.02] rounded-r">{item.text}</div>}
                {item.type === "highlight" && <div className="text-amber-300 font-semibold pl-4 py-1 border-l-2 border-amber-400 bg-amber-500/10 rounded-r">{item.text}</div>}
                {item.type === "error" && <span className="text-rose-400 pl-4">{item.text}</span>}
              </div>
            ))}

            {/* Prompt input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommandSubmit();
              }}
              className="flex items-center gap-2 pt-2 border-t border-white/[0.08]"
            >
              <span className="text-indigo-400 font-bold">➜</span>
              <span className="text-emerald-400 font-bold">~</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help' or click commands below..."
                className="w-full bg-transparent text-zinc-100 placeholder:text-zinc-600 focus:outline-none font-mono text-xs sm:text-[13px]"
                autoFocus
              />
              <button
                type="submit"
                className="p-1 text-zinc-500 hover:text-indigo-400 hover:bg-white/[0.05] rounded transition-colors"
                title="Execute command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Quick Command Suggestions Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-white/[0.05]">
              <span className="text-[10px] text-zinc-500 font-sans uppercase tracking-wider mr-1">Quick Run:</span>
              {quickCommands.map((qcmd) => (
                <button
                  key={qcmd}
                  type="button"
                  onClick={() => handleCommandSubmit(qcmd)}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] hover:bg-indigo-950/70 text-zinc-400 hover:text-indigo-300 border border-white/[0.07] hover:border-indigo-500/40 transition-colors"
                >
                  {qcmd}
                </button>
              ))}
            </div>

            <div ref={terminalEndRef} />
          </div>
        ) : (
          <div className="flex gap-3 text-zinc-300 font-mono text-xs sm:text-[13px]">
            <div className="flex-1 overflow-x-auto scrollbar-thin">
              {activeTab === "cpp" && renderCppCode()}
              {activeTab === "python" && renderPythonCode()}
              {activeTab === "json" && renderJsonCode()}
            </div>
          </div>
        )}
      </div>

      {/* 4. Bottom Status Bar */}
      <div className="px-3.5 py-1.5 bg-[#080a0f] border-t border-white/[0.07] flex items-center justify-between text-[11px] font-mono text-zinc-400 select-none">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center gap-1.5 text-indigo-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            UTF-8
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-300">{tabs.find((t) => t.id === activeTab)?.lang}</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-500">
          <span className="text-indigo-400/80">git:(main)</span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-emerald-400/90 hidden sm:inline">⚡ Ready</span>
        </div>
      </div>
    </BorderGlow>
  );
}
