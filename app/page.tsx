'use client';

import React, { useState } from 'react';

const LOGO_MIGUEL = "https://static-cdn.jtvnw.net/jtv_user_pictures/bbba27fa-5c14-46cd-bbc9-b3ce19bcda41-profile_image-70x70.png";
const HERACROSS_SPRITE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/214.gif";

export default function MiguelMinimalistRefined() {
  const [showHit, setShowHit] = useState(false);
  const [hitName, setHitName] = useState("");

  const triggerHit = (name: string) => {
    setHitName(name);
    setShowHit(true);
    setTimeout(() => setShowHit(false), 5000);
  };

  return (
    <div className="w-[1920px] h-[1080px] bg-transparent font-sans text-white pointer-events-none select-none relative overflow-hidden mx-auto">
      
      {/* --- 1. TICKER SUPERIOR (Refinado) --- */}
      <div className="w-full bg-black/95 h-9 flex items-center absolute top-0 left-0 z-50 border-b-2 border-yellow-600/30 shadow-2xl">
        <div className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-black px-8 h-full flex items-center font-black italic shadow-[5px_0_15px_rgba(0,0,0,0.5)]">
          <span className="text-xs tracking-[0.3em] uppercase">MIGUELTCG</span>
        </div>
        <div className="animate-marquee whitespace-nowrap text-[11px] font-black uppercase tracking-[0.6em] text-zinc-300/90 flex items-center">
          <span className="mx-4">!! LOJA ABERTA !!</span>
          <span className="text-yellow-600">!TBMJ</span>
          <span className="mx-4">!!</span>
          <span className="text-yellow-600">!UP</span>
          <span className="mx-4">!! @MIGUELTCGBREAKS !! WWW.MIGUELTCGBREAKS.PT !!</span>
        </div>
      </div>

      {/* --- 2. ÁREA DO PAPEL (Criativo & Minimalista) --- */}
      <div className="absolute left-0 top-[25%] h-[350px] w-[2px] bg-gradient-to-b from-transparent via-yellow-600 to-transparent">
        <div className="absolute top-0 left-0 w-12 h-[2px] bg-yellow-600 shadow-[0_0_10px_rgba(202,138,4,0.5)]"></div>
        <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-yellow-600 shadow-[0_0_10px_rgba(202,138,4,0.5)]"></div>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90">
            <span className="text-[10px] font-black tracking-[1.2em] text-yellow-600/20 uppercase whitespace-nowrap">Order ID Placement</span>
        </div>
      </div>

      {/* --- 3. BRANDING (Topo Direita - Mais Premium) --- */}
      <div className="absolute right-12 top-20 flex items-center gap-5">
        <div className="text-right border-r-2 border-yellow-600/40 pr-5">
            <p className="text-[11px] font-black text-yellow-600 tracking-[0.4em] uppercase mb-1">Live Official</p>
            <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none drop-shadow-lg">MIGUELTCG</h1>
        </div>
        <div className="relative group">
            <div className="absolute -inset-1 bg-yellow-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <img src={LOGO_MIGUEL} className="w-20 h-20 rounded-full border-2 border-yellow-600/60 p-1.5 bg-zinc-950 shadow-2xl relative" alt="Logo" />
            <div className="absolute top-1 right-1 w-5 h-5 bg-red-600 rounded-full border-4 border-zinc-950 animate-pulse"></div>
        </div>
      </div>

      {/* --- 4. FILA E WEBCAM (Layout Clean) --- */}
      <div className="absolute right-12 bottom-16 flex flex-col gap-10 w-80">
        {/* Queue */}
        <div className="relative pl-6 py-1">
            <div className="absolute left-0 top-0 w-1 h-full bg-yellow-600"></div>
            <p className="text-[10px] font-black text-yellow-600/60 uppercase tracking-[0.3em] mb-1">Coming Up Next</p>
            <p className="text-2xl font-black uppercase tracking-tight italic text-white drop-shadow-md">#3. Ricardo Monteiro</p>
        </div>

        {/* Webcam Frame */}
        <div className="relative">
            {/* Cantos Estilizados */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-yellow-600/70"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-yellow-600/70"></div>
            
            <div className="w-full aspect-video bg-zinc-950/80 border border-white/10 rounded-sm backdrop-blur-md overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                 <span className="text-[10px] font-black uppercase tracking-[1.5em] text-white/5 italic">Visual Stream</span>
            </div>
            <div className="absolute -bottom-2 left-6 bg-yellow-600 text-black px-3 py-0.5 text-[9px] font-black uppercase italic">
              Cam 01
            </div>
        </div>
      </div>

      {/* --- 5. HERACROSS (Assinatura Subtil) --- */}
      <div className="absolute bottom-16 left-16 group">
         <img src={HERACROSS_SPRITE} className="w-24 h-24 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110" />
      </div>

      {/* --- 6. MEGA HIT (Design de Impacto) --- */}
      {showHit && (
        <div className="absolute inset-0 flex items-center justify-center z-[100] animate-in fade-in zoom-in duration-500 backdrop-blur-xl">
           <div className="relative">
              <div className="absolute -inset-20 bg-yellow-600/10 blur-[100px] rounded-full animate-pulse"></div>
              <div className="text-center relative">
                <span className="text-yellow-600 font-black text-xs uppercase tracking-[1.5em] mb-6 block drop-shadow-2xl">Elite Pull Detected</span>
                <h2 className="text-9xl font-black uppercase italic tracking-tighter text-white drop-shadow-[0_10px_50px_rgba(0,0,0,0.5)] border-y-4 border-yellow-600/20 py-4">{hitName}</h2>
                <div className="w-64 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mt-10 animate-grow"></div>
              </div>
           </div>
        </div>
      )}

      {/* --- 7. FOOTER REFINADO --- */}
      <div className="absolute bottom-6 w-full flex justify-center gap-16 border-t border-white/5 pt-4 bg-gradient-to-t from-black/20 to-transparent">
          <div className="flex items-center gap-4 group">
              <span className="w-2 h-2 bg-yellow-600 rotate-45"></span>
              <span className="text-[11px] font-black text-white/40 tracking-[0.2em] uppercase group-hover:text-yellow-600 transition-colors">WWW.MIGUELTCGBREAKS.PT</span>
          </div>
          <div className="flex items-center gap-4 group">
              <span className="w-2 h-2 bg-yellow-600 rotate-45"></span>
              <span className="text-[11px] font-black text-white/40 tracking-[0.2em] uppercase group-hover:text-yellow-600 transition-colors">@MIGUELTCGBREAKS</span>
          </div>
      </div>

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 45s linear infinite; }
        @keyframes grow { from { width: 0%; } to { width: 100%; } }
        .animate-grow { animation: grow 5s linear forwards; }
      `}</style>

    </div>
  );
}