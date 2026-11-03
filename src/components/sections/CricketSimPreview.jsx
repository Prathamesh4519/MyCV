import React, { useState } from "react";
import { Play, RotateCcw, Trophy, Activity, FastForward } from "lucide-react";

export default function CricketSimPreview() {
  const [matchState, setMatchState] = useState({
    teamA: "India",
    teamB: "Australia",
    runs: 84,
    wickets: 2,
    balls: 48,
    target: 175,
    recentBalls: ["1", "4", "•", "6", "W", "2"],
    currentStriker: "P. Kale (Batting: 42* off 24b)",
    nonStriker: "V. Kohli (Batting: 31* off 18b)",
    bowler: "P. Cummins (2.0-0-16-1)",
    lastEvent: "Match in progress. Target: 175 in 20 overs.",
    isCompleted: false,
    winner: null
  });

  const [isSimulatingOver, setIsSimulatingOver] = useState(false);

  const outcomes = [
    { type: "0", label: "•", runs: 0, wicket: false, desc: "Good length delivery, pushed defensively to cover. No run." },
    { type: "1", label: "1", runs: 1, wicket: false, desc: "Tucked away into the gap at mid-wicket for a quick single." },
    { type: "2", label: "2", runs: 2, wicket: false, desc: "Driven through extra cover, good running between wickets for a brace." },
    { type: "4", label: "4", runs: 4, wicket: false, desc: "CRACK! Slashed past point with exquisite timing for FOUR!" },
    { type: "6", label: "6", runs: 6, wicket: false, desc: "MASSIVE! Launched high into the night sky and over long-on for SIX!" },
    { type: "W", label: "W", runs: 0, wicket: true, desc: "OUT! Edged and taken behind! A crucial breakthrough for the bowling side." }
  ];

  const getWeightedOutcome = () => {
    const rand = Math.random() * 100;
    if (rand < 30) return outcomes[0];
    if (rand < 62) return outcomes[1];
    if (rand < 75) return outcomes[2];
    if (rand < 87) return outcomes[3];
    if (rand < 94) return outcomes[4];
    return outcomes[5];
  };

  const simulateBall = () => {
    if (matchState.isCompleted) return;

    const outcome = getWeightedOutcome();
    const newRuns = matchState.runs + outcome.runs;
    const newWickets = matchState.wickets + (outcome.wicket ? 1 : 0);
    const newBalls = matchState.balls + 1;

    const newRecent = [...matchState.recentBalls.slice(-5), outcome.label];

    let completed = false;
    let winner = null;

    if (newRuns >= matchState.target) {
      completed = true;
      winner = `${matchState.teamA} won by ${10 - newWickets} wickets!`;
    } else if (newWickets >= 10 || newBalls >= 120) {
      completed = true;
      winner = `${matchState.teamB} won the match!`;
    }

    setMatchState({
      ...matchState,
      runs: newRuns,
      wickets: newWickets,
      balls: newBalls,
      recentBalls: newRecent,
      lastEvent: outcome.desc,
      isCompleted: completed,
      winner: winner
    });
  };

  const simulateOver = async () => {
    if (matchState.isCompleted || isSimulatingOver) return;
    setIsSimulatingOver(true);

    for (let i = 0; i < 6; i++) {
      await new Promise((res) => setTimeout(res, 200));
      simulateBall();
    }
    setIsSimulatingOver(false);
  };

  const resetMatch = () => {
    setMatchState({
      teamA: "India",
      teamB: "Australia",
      runs: 0,
      wickets: 0,
      balls: 0,
      target: 168,
      recentBalls: [],
      currentStriker: "P. Kale (0* off 0b)",
      nonStriker: "V. Kohli (0* off 0b)",
      bowler: "P. Cummins (0.0-0-0-0)",
      lastEvent: "Innings started. Target: 168 runs from 20 overs.",
      isCompleted: false,
      winner: null
    });
  };

  const overs = `${Math.floor(matchState.balls / 6)}.${matchState.balls % 6}`;
  const currentRR = matchState.balls > 0 ? ((matchState.runs / matchState.balls) * 6).toFixed(2) : "0.00";
  const ballsRemaining = Math.max(0, 120 - matchState.balls);
  const runsNeeded = Math.max(0, matchState.target - matchState.runs);
  const requiredRR = ballsRemaining > 0 ? ((runsNeeded / ballsRemaining) * 6).toFixed(2) : "0.00";

  return (
    <div className="w-full bg-[#0d1424] rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl text-slate-100 font-sans">
      {/* Header bar */}
      <div className="bg-[#090e1c] border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-cyan-200 uppercase tracking-wider">
            C++ Engine Simulation Live Preview
          </span>
        </div>
        <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded-md border border-cyan-800/60">
          Target: {matchState.target}
        </span>
      </div>

      {/* Main Scoreboard Display */}
      <div className="p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/[0.06]">
          <div>
            <div className="text-xs font-mono text-zinc-400">
              {matchState.teamA} (2nd Innings) vs {matchState.teamB}
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white mt-1 flex items-baseline gap-2">
              <span>{matchState.runs}/{matchState.wickets}</span>
              <span className="text-sm font-sans font-medium text-zinc-400">
                ({overs} / 20.0 ov)
              </span>
            </div>
          </div>

          <div className="flex sm:flex-col sm:items-end justify-between text-xs font-mono gap-1 text-zinc-300">
            <div>CRR: <span className="text-sky-400 font-bold">{currentRR}</span></div>
            {!matchState.isCompleted && (
              <div>Req RR: <span className="text-amber-400 font-bold">{requiredRR}</span></div>
            )}
            <div className="text-emerald-400 font-medium">
              Need {runsNeeded} runs in {ballsRemaining} balls
            </div>
          </div>
        </div>

        {/* Current Over Balls visualization */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-400">Recent Balls:</span>
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {matchState.recentBalls.length === 0 ? (
              <span className="text-xs font-mono text-zinc-500">Over beginning...</span>
            ) : (
              matchState.recentBalls.map((b, idx) => (
                <span
                  key={idx}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold shadow-sm ${
                    b === "W"
                      ? "bg-rose-600 text-white"
                      : b === "6"
                      ? "bg-violet-600 text-white"
                      : b === "4"
                      ? "bg-indigo-600 text-white"
                      : b === "•"
                      ? "bg-white/[0.06] text-zinc-400 border border-white/10"
                      : "bg-emerald-600 text-white"
                  }`}
                >
                  {b}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Dynamic commentary / event ticker */}
        <div className="p-3 bg-white/[0.02] rounded-xl border border-white/[0.06] text-xs font-mono">
          <div className="text-zinc-500 text-[11px] uppercase tracking-wider mb-0.5">Live Event Commentary:</div>
          <p className="text-zinc-200">
            {matchState.isCompleted ? (
              <strong className="text-emerald-400 text-sm font-bold flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-400" />
                {matchState.winner}
              </strong>
            ) : (
              matchState.lastEvent
            )}
          </p>
        </div>

        {/* Interactive action controls */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            onClick={simulateBall}
            disabled={matchState.isCompleted || isSimulatingOver}
            className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-indigo-500/25 border border-indigo-400/30 transition-all active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Simulate Ball</span>
          </button>

          <button
            onClick={simulateOver}
            disabled={matchState.isCompleted || isSimulatingOver}
            className="flex items-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] disabled:opacity-50 text-zinc-200 border border-white/10 text-xs font-semibold transition-all active:scale-95"
          >
            <FastForward className="w-3.5 h-3.5" />
            <span>Simulate Over</span>
          </button>

          <button
            onClick={resetMatch}
            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border border-white/10 text-xs transition-colors"
            title="Reset Match Simulation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
