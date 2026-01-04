'use client';

import React, { useState } from 'react';

const LOGO_MIGUEL = "https://static-cdn.jtvnw.net/jtv_user_pictures/bbba27fa-5c14-46cd-bbc9-b3ce19bcda41-profile_image-70x70.png";
const HERACROSS_SPRITE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/214.gif";

export default function MiguelEliteUltra() {
  const [showHit, setShowHit] = useState(false);
  const [hitName, setHitName] = useState("");

  const triggerHit = (name: string) => {
    setHitName(name);
    setShowHit(true);
    setTimeout(() => setShowHit(false), 5000);
  };

  return (
    /* O contentor agora tem tamanho fixo de 1920x1080 para casar com o OBS */
    /* Usamos 'relative' em vez de 'fixed inset-0' para o OBS não esticar o conteúdo */
    <div className="w-[1920px] h-[1080px] bg-transparent font-sans text-white pointer-events-none select-none relative overflow-hidden mx-auto">
      
      {/* --- 1. TICKER SUPERIOR --- */}
      <div className="w-full bg-black/85 backdrop-blur-2xl border-b border-yellow-500/40 h-10 flex items-center shadow-2xl absolute top-0 left-0 z-50">
        <div className="bg-yellow-500 text-black px-10 h-full flex items-center font-black italic skew-x-[-25deg] -ml-6 z-20 shadow-[8px_0_20px_rgba(234,179,8,0.5)]">
          <span className="skew-x-[25deg] text-xs tracking-tighter uppercase">MiguelTCG Breaks</span>
        </div>
        <div className="animate-marquee whitespace-nowrap text-[11px] font-black uppercase tracking-[0.25em] text-white/80">
          !! LOJA ABERTA !! PRODUTO SELADO - !TBMJ !! MELHORES BINDERS - !UP !! SIGAM O INSTAGRAM @MIGUELTCGBREAKS !! 
          <span className="mx-12 text-yellow-500">MIGUELTCGBREAKS</span>
          !! LOJA ABERTA !! PRODUTO SELADO - !TBMJ !!
        </div>
      </div>

      {/* --- 2. BRANDING & HERACROSS --- */}
      <div className="absolute left-8 top-20 flex items-start gap-5 z-40">
        <div className="flex items-center gap-4 bg-zinc-900/70 backdrop-blur-2xl p-3 rounded-[2rem] border border-white/10 shadow-2xl relative">
          <div className="relative">
            <img src={LOGO_MIGUEL} className="w-14 h-14 rounded-2xl border-2 border-yellow-500/50 shadow-[0_0_25px_rgba(234,179,8,0.4)]" alt="Logo" />
            <div className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-zinc-900"></span>
            </div>
          </div>
          <div className="pr-4">
            <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-black text-red-500 italic uppercase">Live</span>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Bingo</span>
            </div>
            <p className="text-2xl font-black italic uppercase tracking-tighter leading-none">MIGUELTCG</p>
          </div>
        </div>

        <div className="relative mt-2 group">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-50"></div>
            <img src={HERACROSS_SPRITE} className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]" alt="Heracross" />
        </div>
      </div>

      {/* --- 3. PAINEL DIREITO --- */}
      <div className="absolute right-8 top-20 flex flex-col gap-6 w-80 z-40">
        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] shadow-2xl overflow-hidden">
          <div className="bg-yellow-500/10 px-4 py-2 border-b border-white/10 flex justify-between items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500">Queue: 39</span>
            <span className="text-[8px] font-bold text-zinc-500 uppercase">Fila Ativa</span>
          </div>
          <div className="p-4 bg-gradient-to-br from-transparent to-black/20">
            <p className="text-sm font-black uppercase tracking-tight truncate flex items-center gap-2 text-zinc-100">
               #72535 - Fernando M. <span className="text-yellow-500/60 text-[10px] font-normal italic">(!UP)</span>
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-500/40 via-zinc-800 to-yellow-600/40 rounded-[1.6rem] blur opacity-40"></div>
          <div className="relative w-full aspect-video bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] shadow-2xl overflow-hidden flex items-center justify-center">
             <span className="text-[10px] font-black uppercase text-white/10 tracking-[0.5em]">Webcam Slot</span>
          </div>
          <div className="absolute -bottom-2 right-6 bg-yellow-500 text-black px-4 py-0.5 rounded-md text-[9px] font-black uppercase italic tracking-tighter shadow-xl">
            Stream Cam
          </div>
        </div>
      </div>

      {/* --- 4. ALERTA DE HIT --- */}
      {showHit && (
        <div className="absolute inset-0 flex items-center justify-center z-[100] animate-in fade-in zoom-in duration-300">
           <div className="bg-black/95 p-1 rounded-2xl shadow-[0_0_120px_rgba(234,179,8,0.5)] border border-yellow-500/40 backdrop-blur-3xl">
              <div className="bg-gradient-to-b from-zinc-900 to-black px-16 py-8 rounded-xl flex flex-col items-center">
                 <div className="flex items-center gap-6 mb-2">
                    <img src={HERACROSS_SPRITE} className="w-14 h-14 -scale-x-100" />
                    <span className="text-yellow-500 font-black text-4xl uppercase italic tracking-widest">MEGA HIT!</span>
                    <img src={HERACROSS_SPRITE} className="w-14 h-14" />
                 </div>
                 <p className="text-white text-5xl font-black uppercase tracking-tighter">{hitName}</p>
                 <div className="w-full h-1 bg-yellow-500 mt-6 animate-grow"></div>
              </div>
           </div>
        </div>
      )}

      {/* --- 5. RODAPÉ LOJA --- */}
      <div className="absolute bottom-10 left-10 z-40">
        <div className="relative bg-black/80 backdrop-blur-xl border border-yellow-500/50 text-yellow-500 px-10 py-4 rounded-xl shadow-2xl">
           <span className="text-3xl font-black italic uppercase tracking-tighter leading-none block">Loja Aberta</span>
           <div className="h-[2px] w-12 bg-yellow-500/40 my-1"></div>
           <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.4em]">migueltcgbreaks.pt</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
        @keyframes grow { from { width: 0%; } to { width: 100%; } }
        .animate-grow { animation: grow 5s linear forwards; }
      `}</style>

    </div>
  );
}