import React, { useState } from "react";
import { Brain, Database, LineChart, Code, CheckCircle2, RefreshCw, Sparkles } from "lucide-react";

export default function CurrentlyExploring() {
  const [isTrained, setIsTrained] = useState(false);
  const [slope, setSlope] = useState(1.45);
  const [intercept, setIntercept] = useState(2.1);

  const explorationModules = [
    {
      title: "Machine Learning Fundamentals",
      icon: Brain,
      color: "text-purple-400",
      bg: "bg-purple-500/15",
      description: "Supervised & unsupervised learning, cost functions, gradient descent, train/test splitting, and evaluation metrics (MAE, MSE, R²).",
      status: "Active Study"
    },
    {
      title: "Python for Data Science",
      icon: Code,
      color: "text-cyan-400",
      bg: "bg-cyan-500/15",
      description: "Vectorized operations, functional programming, matrix operations, and high-performance data processing pipelines.",
      status: "Daily Practice"
    },
    {
      title: "Data Analysis (NumPy & Pandas)",
      icon: Database,
      color: "text-indigo-400",
      bg: "bg-indigo-500/15",
      description: "DataFrames, Series, handling missing values, exploratory data analysis (EDA), grouping, filtering, and statistical summaries.",
      status: "Hands-on Practice"
    },
    {
      title: "Data Visualization (Matplotlib)",
      icon: LineChart,
      color: "text-amber-400",
      bg: "bg-amber-500/15",
      description: "Plotting scatter graphs, distributions, correlation heatmaps, line charts, and loss curves for data interpretation.",
      status: "Hands-on Practice"
    },
    {
      title: "Model Building with Scikit-learn",
      icon: Sparkles,
      color: "text-emerald-400",
      bg: "bg-emerald-500/15",
      description: "Implementing Linear Regression, Logistic Regression, Decision Trees, feature scaling (StandardScaler), and model pipelines.",
      status: "Exploring & Training"
    }
  ];

  const handleSimulateFit = () => {
    setIsTrained(true);
    setSlope(+(1.85 + (Math.random() * 0.1 - 0.05)).toFixed(2));
    setIntercept(+(1.2 + (Math.random() * 0.1 - 0.05)).toFixed(2));
  };

  return (
    <section id="exploring" className="py-24 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>ACTIVE HORIZON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Currently <span className="text-gradient-purple">Exploring</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Expanding my software development foundations into Machine Learning. Focused on mathematical intuition, clean data pipelines, and building intelligent real-world systems.
          </p>
        </div>

        {/* 2-Column Spotlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Learning Modules List */}
          <div className="lg:col-span-7 space-y-4">
            {explorationModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-slate-700/80 hover:border-purple-500/40 transition-all group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl ${mod.bg} ${mod.color} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-white group-hover:text-purple-300 transition-colors">
                          {mod.title}
                        </h3>
                        <span className="text-[11px] font-mono text-purple-300 font-medium">
                          {mod.status}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-700 shrink-0">
                      Module 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive ML Concepts Inspector / Playground */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0d1424] rounded-2xl border border-purple-500/30 p-6 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span className="font-mono font-bold text-xs text-purple-200 uppercase tracking-wider">
                    Interactive ML Sandbox
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                  y = mx + c
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Visualizing how gradient descent fits a regression model to data points by minimizing Mean Squared Error (MSE).
              </p>

              {/* Visual mini coordinate canvas / chart representation */}
              <div className="h-44 w-full bg-[#090e1c] rounded-xl border border-slate-800 relative p-3 overflow-hidden flex flex-col justify-end">
                <div className="absolute inset-0 bg-grid-architect opacity-40 pointer-events-none" />

                {/* Simulated Scatter Data points */}
                <div className="absolute left-[15%] bottom-[20%] w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
                <div className="absolute left-[30%] bottom-[35%] w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
                <div className="absolute left-[45%] bottom-[50%] w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
                <div className="absolute left-[65%] bottom-[70%] w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
                <div className="absolute left-[80%] bottom-[85%] w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
                <div className="absolute left-[55%] bottom-[58%] w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />

                {/* Fitted regression line */}
                <div
                  className={`absolute left-4 right-4 h-0.5 bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 transition-all duration-700 ${
                    isTrained ? "rotate-[-24deg] translate-y-[-28px] opacity-100" : "rotate-[-10deg] opacity-60"
                  }`}
                />

                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                  <span>MSE Loss: <strong className={isTrained ? "text-emerald-400" : "text-amber-400"}>{isTrained ? "0.0142 (Converged)" : "0.4820 (Untrained)"}</strong></span>
                  <span>R² Score: <strong className="text-cyan-300">{isTrained ? "0.984" : "0.640"}</strong></span>
                </div>
              </div>

              {/* Parameters display & interactive button */}
              <div className="space-y-3 pt-1">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400">Slope (m): </span>
                    <span className="text-purple-300 font-bold">{slope}</span>
                  </div>
                  <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400">Intercept (c): </span>
                    <span className="text-purple-300 font-bold">{intercept}</span>
                  </div>
                </div>

                <button
                  onClick={handleSimulateFit}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-xs font-semibold shadow-lg shadow-cyan-500/25 border border-cyan-400/30 transition-all active:scale-95"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{isTrained ? "Re-Run Gradient Descent Fit" : "Run Linear Regression Fit"}</span>
                </button>
              </div>
            </div>

            {/* Authentic commitment note */}
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Genuine Learning Progression</span>
              </div>
              <p className="leading-relaxed text-slate-400">
                I approach Machine Learning with honesty and dedication—grounded in linear algebra, calculus, and verified coding implementations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
