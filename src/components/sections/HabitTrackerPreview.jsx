import React, { useState } from "react";
import { CheckCircle2, Circle, Flame, Plus, Sparkles, TrendingUp, Smartphone, Wifi, Battery, Signal, Code2 } from "lucide-react";

export default function HabitTrackerPreview() {
  const [habits, setHabits] = useState([
    { id: 1, name: "Solve 2 LeetCode Problems (C++)", category: "DSA", streak: 28, completedToday: true },
    { id: 2, name: "Study ML Fundamentals (Python)", category: "ML", streak: 12, completedToday: true },
    { id: 3, name: "Android App Dev (XML Layouts)", category: "Android", streak: 19, completedToday: false },
    { id: 4, name: "Workout & Physical Fitness", category: "Health", streak: 15, completedToday: false }
  ]);

  const [newHabitName, setNewHabitName] = useState("");
  const [showXmlBadge, setShowXmlBadge] = useState(false);

  const toggleHabit = (id) => {
    setHabits(
      habits.map((h) => {
        if (h.id === id) {
          const isNowCompleted = !h.completedToday;
          return {
            ...h,
            completedToday: isNowCompleted,
            streak: isNowCompleted ? h.streak + 1 : Math.max(0, h.streak - 1)
          };
        }
        return h;
      })
    );
  };

  const handleAddHabit = (e) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;
    const newH = {
      id: Date.now(),
      name: newHabitName.trim(),
      category: "Custom",
      streak: 1,
      completedToday: true
    };
    setHabits([...habits, newH]);
    setNewHabitName("");
  };

  const completedCount = habits.filter((h) => h.completedToday).length;
  const progressPercent = habits.length > 0 ? Math.round((completedCount / habits.length) * 100) : 0;

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-emerald-500/30 overflow-hidden shadow-2xl text-slate-100 font-sans">
      {/* Android Device Status Bar */}
      <div className="bg-slate-950 px-4 py-1.5 flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-900">
        <div className="flex items-center gap-1.5 font-semibold text-slate-300">
          <span>09:41</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3 h-3 text-slate-400" />
          <Wifi className="w-3 h-3 text-slate-400" />
          <Battery className="w-3.5 h-3.5 text-emerald-400" />
        </div>
      </div>

      {/* Android App Bar (Material 3 Style) */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-cyan-950/80 border-b border-emerald-800/40 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>HabitFlow Android</span>
              <span className="px-1.5 py-0.2 text-[9px] font-mono bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
                Android Studio
              </span>
            </div>
            <div className="text-[10px] font-mono text-slate-400">activity_main.xml &bull; Room DB</div>
          </div>
        </div>

        <button
          onClick={() => setShowXmlBadge(!showXmlBadge)}
          className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 px-2 py-1 rounded border border-cyan-700/50 flex items-center gap-1 transition-colors"
          title="Toggle XML Layout inspect"
        >
          <Code2 className="w-3 h-3 text-cyan-400" />
          <span>{showXmlBadge ? "Hide XML" : "XML Layout"}</span>
        </button>
      </div>

      {/* Optional XML Inspector Banner */}
      {showXmlBadge && (
        <div className="bg-slate-900/95 border-b border-cyan-500/30 p-2.5 text-[11px] font-mono text-cyan-300 space-y-1">
          <div className="text-slate-400">&lt;!-- Android XML Architecture --&gt;</div>
          <div className="text-emerald-400">&lt;androidx.recyclerview.widget.RecyclerView android:id="@+id/habitsRecycler" /&gt;</div>
          <div className="text-purple-400">&lt;com.google.android.material.card.MaterialCardView android:elevation="4dp" /&gt;</div>
        </div>
      )}

      {/* Daily Progress Card */}
      <div className="p-4 space-y-3.5">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/40 p-3.5 rounded-xl border border-emerald-500/25 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Daily Consistency Tracker</span>
            </span>
            <span className="font-mono text-emerald-400 font-bold">{progressPercent}% ({completedCount}/{habits.length})</span>
          </div>
          {/* Progress bar line */}
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Habits RecyclerView Checklist */}
        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
          {habits.map((habit) => (
            <div
              key={habit.id}
              onClick={() => toggleHabit(habit.id)}
              className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-all border ${habit.completedToday
                  ? "bg-emerald-950/30 border-emerald-500/40 text-slate-200"
                  : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {habit.completedToday ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 animate-in zoom-in duration-150" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-500 shrink-0" />
                )}
                <span className={`text-xs font-medium truncate ${habit.completedToday ? "line-through text-slate-400" : ""}`}>
                  {habit.name}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0 ml-2">
                <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-slate-800 text-emerald-300 border border-emerald-500/20 hidden sm:inline-block">
                  {habit.category}
                </span>
                <span className="flex items-center gap-0.5 text-xs font-mono font-bold text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/50">
                  <Flame className="w-3 h-3 fill-current" />
                  {habit.streak}d
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Add Habit (Native Android Input + FAB Action) */}
        <form onSubmit={handleAddHabit} className="flex items-center gap-2 pt-1">
          <input
            type="text"
            value={newHabitName}
            onChange={(e) => setNewHabitName(e.target.value)}
            placeholder="Add new routine in Android Studio..."
            className="flex-1 bg-slate-900/90 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1 shadow-md shadow-emerald-950/40 transition-all hover:scale-105 active:scale-95"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </form>
      </div>
    </div>
  );
}
