'use client';

import React, { useState } from 'react';

const LOGO_MIGUEL = "https://static-cdn.jtvnw.net/jtv_user_pictures/bbba27fa-5c14-46cd-bbc9-b3ce19bcda41-profile_image-70x70.png";
const HERACROSS_SPRITE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/214.gif";

export default function MiguelElitePremium() {
  const [showHit, setShowHit] = useState(false);
  const [hitName, setHitName] = useState("");

  const triggerHit = (name: string) => {
    setHitName(name);
    setShowHit(true);
    setTimeout(() => setShowHit(false), 5000);
  };

  return (
    <div className="fixed inset-0 bg-transparent font-sans text-white pointer-events-none select-none overflow-hidden">
      
      {/* --- 1. TICKER SUPERIOR (DESIGN DE CANAL DE ELITE) --- */}
      <div className="w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b-2 border-yellow-600 h-12 flex items-center shadow-2xl relative z-50">
        <div className="bg-yellow-600 text-black px-10 h-full flex items-center font-black italic skew-x-[-20deg] -ml-6 z-20 shadow-[8px_0_25px_rgba(180,130,20,0.6)]">
          <span className="skew-x-[20deg] text-sm tracking-tighter uppercase font-black">MiguelTCG Breaks</span>
        </div>
        <div className="animate-marquee whitespace-nowrap text-[12px] font-black uppercase tracking-[0.4em] text-yellow-500/90 flex items-center">
          <span className="mx-8">!! LOJA ABERTA !!</span>
          <span className="text-white">SITE: MIGUELTCGBREAKS.PT</span>
          <span className="mx-8">!! PRODUTO SELADO !!</span>
          <span className="text-white underline decoration-yellow-600 underline-offset-4">!UP</span>
          <span className="mx-8 text-yellow-600">!! @MIGUELTCGBREAKS !!</span>
        </div>
      </div>

      {/* --- 2. PLACEMENT MINIMALISTA (TOP ESQUERDO) --- */}
      {/* Marcador subtil para a folha de encomenda sem tapar o logo da live bingo */}
      <div className="absolute left-6 top-16 w-80 h-48 border-l border-t border-yellow-600/30 opacity-60">
        <div className="absolute top-2 left-2 flex items-center gap-2">
            <span className="w-1 h-1 bg-yellow-600 rounded-full animate-pulse"></span>
            <span className="text-[9px] font-black text-yellow-600/50 uppercase tracking-[0.3em]">A TUA ENCOMENDA</span>
        </div>
      </div>

      {/* --- 3. BRANDING LADO ESQUERDO (Ajustado para não obstruir as cartas) --- */}
      <div className="absolute left-8 bottom-36 flex flex-col gap-6">
        <div className="flex items-center gap-5 bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-transparent opacity-50"></div>
          <div className="relative">
            <img src={LOGO_MIGUEL} className="w-16 h-16 rounded-xl border border-yellow-600/50 shadow-2xl" alt="Logo" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-[#0a0a0a] animate-pulse shadow-lg"></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Live</span>
                <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest italic font-black"></span>
            </div>
            <p className="text-3xl font-black italic uppercase tracking-tighter leading-none">MIGUELTCG</p>
          </div>
        </div>

        {/* Heracross Holográfico - Mais pequeno para não tapar o stack de comuns */}
        <div className="flex items-center gap-4 ml-4 group">
            <div className="relative">
                <img src={HERACROSS_SPRITE} className="w-14 h-14 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-bounce" style={{animationDuration: '3s'}} alt="Heracross" />
                <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full opacity-50"></div>
            </div>
            <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Partner: <span className="text-blue-400 italic font-black">Heracross</span></span>
            </div>
        </div>
      </div>

      {/* --- 4. PAINEL DIREITO (WEBCAM AMPLIADA & QUEUE) --- */}
      <div className="absolute right-8 top-16 flex flex-col gap-8 w-[400px]">
        
        {/* WEBCAM FRAME (MAIOR & MAIS PREMIUM) */}
        <div className="relative group">
          {/* Luzes de canto dinâmicas */}
          <div className="absolute -top-1 -left-1 w-12 h-12 border-t-4 border-l-4 border-yellow-600 rounded-tl-2xl shadow-[0_0_20px_rgba(202,138,4,0.4)]"></div>
          <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-yellow-600 rounded-br-2xl shadow-[0_0_20px_rgba(202,138,4,0.4)]"></div>
          
          <div className="relative w-full aspect-video bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-center">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <span className="text-[11px] font-black uppercase text-white/10 tracking-[1.5em] italic">Facecam Preview</span>
          </div>
          
          <div className="absolute -bottom-3 right-8 bg-yellow-600 text-black px-6 py-1 rounded-md shadow-2xl text-[11px] font-black uppercase italic tracking-widest">
            Elite Streamer
          </div>
        </div>

        {/* QUEUE DESIGN (CARBÓN & GOLD - SLIM) */}
        <div className="relative overflow-hidden bg-zinc-950/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="absolute top-0 left-0 w-[5px] h-full bg-yellow-600"></div>
          <div className="bg-yellow-600/10 px-5 py-2 border-b border-white/5 flex justify-between items-center">
            <span className="text-[11px] font-black uppercase tracking-widest text-yellow-600">Next In Line</span>
            <span className="text-[11px] font-bold text-zinc-500 uppercase italic">Queue: 39</span>
          </div>
          <div className="p-5 flex items-center justify-between">
            <p className="text-xl font-black uppercase tracking-tight truncate flex items-center gap-3">
               <span className="w-2 h-2 bg-yellow-600 rounded-full animate-ping"></span>
               Fernando Ferreira <span className="text-zinc-500 text-xs font-normal italic">(!UP)</span>
            </p>
            <span className="text-[10px] font-black text-yellow-600/40">#72535</span>
          </div>
        </div>
      </div>

      {/* --- 5. MEGA HIT (DESIGN CINEMATOGRÁFICO) --- */}
      {showHit && (
        <div className="absolute inset-0 flex items-center justify-center z-[100] animate-in fade-in zoom-in duration-500 backdrop-blur-xl bg-black/30">
           <div className="relative group">
              <div className="absolute -inset-24 bg-yellow-600/30 blur-[120px] rounded-full animate-pulse"></div>
              
              <div className="bg-zinc-950 p-1 rounded-[3rem] border-2 border-yellow-600/50 shadow-[0_0_100px_rgba(202,138,4,0.4)] relative">
                 <div className="bg-[#050505] px-24 py-16 rounded-[2.8rem] flex flex-col items-center border border-white/5">
                    <div className="flex items-center gap-12 mb-8 relative">
                       <img src={HERACROSS_SPRITE} className="w-24 h-24 -scale-x-100 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]" />
                       <div className="text-center">
                          <span className="text-yellow-600 font-black text-2xl uppercase tracking-[1em] mb-2 block animate-pulse">Elite Pull</span>
                          <h3 className="text-yellow-500 font-black text-7xl uppercase italic tracking-[0.2em] drop-shadow-2xl">MEGA HIT!</h3>
                       </div>
                       <img src={HERACROSS_SPRITE} className="w-24 h-24 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]" />
                    </div>
                    <p className="text-white text-8xl font-black uppercase tracking-tighter drop-shadow-lg text-center">{hitName}</p>
                    <div className="w-[120%] h-2 bg-gradient-to-r from-transparent via-yellow-600 to-transparent mt-12 animate-grow shadow-[0_0_30px_rgba(202,138,4,1)]"></div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* --- 6. RODAPÉ (DESIGN DE LUXO) --- */}
      <div className="absolute bottom-10 left-10 flex items-center gap-8">
        <div className="bg-zinc-950/90 border-2 border-yellow-600 text-yellow-600 px-12 py-5 rounded-lg shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
           <span className="text-4xl font-black italic uppercase tracking-tighter leading-none relative z-10">Loja Aberta</span>
           <span className="text-[11px] font-bold text-white/40 uppercase tracking-[0.5em] mt-3 relative z-10 font-black">MiguelTCGBreaks.pt</span>
        </div>
        
        <div className="flex flex-col gap-3">
            <div className="bg-black/80 backdrop-blur-xl px-5 py-2 border border-yellow-600/30 rounded-lg flex items-center gap-4 shadow-xl">
                <span className="text-yellow-600 font-black text-[11px] tracking-widest uppercase italic">Cupão:</span>
                <span className="text-white font-black text-[12px] tracking-[0.3em] uppercase">MIGUEL10</span>
            </div>
            <div className="bg-black/80 backdrop-blur-xl px-5 py-2 border border-white/10 rounded-lg flex items-center gap-4 shadow-xl group hover:border-yellow-600/50 transition-colors">
                <span className="text-yellow-600 font-black text-[11px] tracking-widest uppercase italic">Instagram:</span>
                <span className="text-white font-black text-[12px] tracking-[0.2em] uppercase">@MIGUELTCGBREAKS</span>
            </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
        @keyframes grow { from { width: 0%; } to { width: 100%; } }
        .animate-grow { animation: grow 5s linear forwards; }
      `}</style>

    </div>
  );
}