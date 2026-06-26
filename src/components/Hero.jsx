import { useEffect, useState } from "react";

export default function Hero() {
    const [pulse, setPulse] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setPulse((v) => !v);
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden pt-36 pb-24 bg-[var(--nocturnal)]">
            <div className="absolute inset-0">

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage:
                            "radial-gradient(var(--forsythia) 1px, transparent 1px)",
                        backgroundSize: "46px 46px",
                    }}
                />

                {/* Glow */}
                <div className="absolute right-1/4 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-[var(--forsythia)]/20 blur-[180px]" />

            </div>
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}

                    <div>

                        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--forsythia)]/30 bg-white/10 backdrop-blur-md px-4 py-2 text-sm text-[var(--forsythia)] shadow-sm">
                            <span
                                className={`h-2 w-2 rounded-full bg-green-500 transition-all ${pulse ? "opacity-100 scale-100" : "opacity-50 scale-75"
                                    }`}
                            />
                            AI Pipeline Platform
                        </span>

                        <h1 className="mt-8 text-5xl lg:text-6xl font-black tracking-tight text-white font-mono leading-tight">
                            Build Intelligent
                            <br />
                            <span className="text-[var(--forsythia)]">
                                Data Pipelines
                            </span>
                            <br />
                            In Minutes.
                        </h1>

                        <p className="mt-8 text-lg text-slate-300 max-w-xl leading-8">
                            NeuralFlow helps modern teams ingest, enrich and ship data through
                            beautiful AI-powered workflows with enterprise-grade reliability.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="rounded-xl bg-[var(--forsythia)] px-7 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[var(--deep-saffron)]">
                                Start Free
                            </button>

                            <button className="rounded-xl border border-white/20 bg-transparent px-7 py-4 font-semibold text-white transition duration-300 hover:bg-white/10">
                                Live Demo
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 mt-14">

                            <div>
                                <p className="text-3xl font-bold text-[var(--forsythia)]">
                                    10M+
                                </p>
                                <p className="text-sm text-slate-300">Tasks Processed</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-[var(--forsythia)]">
                                    99.9%
                                </p>
                                <p className="text-sm text-slate-300">Uptime</p>
                            </div>

                            <div>
                                <p className="text-3xl font-bold text-[var(--forsythia)]">
                                    3×
                                </p>
                                <p className="text-sm text-slate-300">Faster Delivery</p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                            <div className="h-[500px] w-[500px] rounded-full bg-[var(--forsythia)]/15 blur-[140px]" />

                        </div>
                        <div
                            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
                            style={{
                                boxShadow:
                                    "0 0 80px rgba(255,200,1,.12), 0 30px 80px rgba(0,0,0,.45)"
                            }}
                        >

                            {/* Top Bar */}

                            <div className="flex justify-between items-center mb-8">

                                <div className="flex gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-200">
                                    <span
                                        className={`h-2 w-2 rounded-full bg-green-500 ${pulse ? "animate-pulse" : ""
                                            }`}
                                    ></span>
                                    <span className="text-slate-200">
                                        Live Pipeline
                                    </span>
                                </div>

                            </div>

                            {/* Pipeline */}

                            <div className="flex items-center justify-between">

                                <PipelineBox
                                    title="INGEST"
                                    subtitle="API • CSV • DB"
                                    color="bg-[#234653]"
                                />

                                <div className="flex-1 h-1.5 bg-gradient-to-r from-[var(--mystic-mint)] via-[var(--forsythia)] to-[var(--deep-saffron)] mx-4 rounded-full shadow-lg" />

                                <PipelineBox
                                    title="ENRICH"
                                    subtitle="AI Models"
                                    color="bg-[var(--forsythia)]"
                                />

                                <div className="flex-1 h-1 bg-gradient-to-r from-[var(--forsythia)] via-[var(--deep-saffron)] to-[var(--nocturnal)] mx-4 rounded-full" />

                                <PipelineBox
                                    title="SHIP"
                                    subtitle="Warehouse"
                                    color="bg-[#2E5B69]"
                                />

                            </div>

                            {/* Analytics */}

                            <div className="mt-10 grid grid-cols-3 gap-4">

                                <Card value="2.3M" label="Events" />
                                <Card value="128ms" label="Latency" />
                                <Card value="99.9%" label="Health" />

                            </div>

                            {/* Activity */}

                            <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-5">

                                <div className="flex justify-between mb-4">
                                    <span className="font-semibold text-white">Pipeline Activity</span>
                                    <span className="text-green-400 font-medium">Healthy</span>
                                </div>

                                <div className="space-y-3">

                                    <Bar width="90%" />

                                    <Bar width="70%" />

                                    <Bar width="95%" />

                                    <Bar width="60%" />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

function PipelineBox({ title, subtitle, color }) {
  const isYellow = color === "bg-[var(--forsythia)]";

  return (
    <div
      className={`rounded-2xl ${color} p-5 min-w-[120px] text-center shadow border border-white/10`}
    >
      <div
        className={`font-bold font-mono ${
          isYellow ? "text-[var(--oceanic-noir)]" : "text-white"
        }`}
      >
        {title}
      </div>

      <div
  className={`text-xs mt-2 ${
    isYellow ? "text-black font-medium" : "text-slate-300"
  }`}
>
  {subtitle}
</div>
    </div>
  );
}

function Card({ value, label }) {
    return (
        <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
            <div className="font-bold text-xl text-white">
                {value}
            </div>

            <div className="text-xs text-slate-300 mt-1">
                {label}
            </div>
        </div>
    );
}

function Bar({ width }) {
    return (
        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--forsythia)] to-[var(--deep-saffron)] transition-all duration-700"
                style={{ width }}
            />
        </div>
    );
}