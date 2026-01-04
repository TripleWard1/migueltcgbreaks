'use client';

import React, { useState, useEffect } from 'react';

const LOGO_MIGUEL =
  'https://static-cdn.jtvnw.net/jtv_user_pictures/bbba27fa-5c14-46cd-bbc9-b3ce19bcda41-profile_image-70x70.png';

export default function MiguelUltimateOverlay() {
  const [subs, setSubs] = useState(12);
  const [goal, setGoal] = useState(20);
  const [lastFollow, setLastFollow] = useState('PokeFan_99');

  return (
    <div className="fixed inset-0 bg-transparent text-white font-sans pointer-events-none overflow-hidden">
      {/* --- 1. RODAPÉ DE TOPO (TICKER) --- */}
      <div className="w-full bg-black/90 border-b border-yellow-500/50 h-8 flex items-center overflow-hidden">
        <div className="animate-marquee whitespace-nowrap font-bold uppercase text-[10px] tracking-[0.2em] text-zinc-300">
          !! LOJA ABERTA !! PRODUTO SELADO - !TBMJ !! MELHORES BINDERS - !UP !!
          SIGAM O INSTAGRAM @MIGUELTCGBREAKS !!
          <span className="mx-10 text-yellow-500 italic">MIGUELTCGBREAKS</span>
          !! LOJA ABERTA !! PRODUTO SELADO - !TBMJ !! MELHORES BINDERS - !UP !!
        </div>
      </div>

      {/* --- 2. ÁREA SUPERIOR ESQUERDA (SOCIAL & LIVE STATUS) --- */}
      <div className="absolute left-6 top-12 flex flex-col gap-2">
        <div className="flex items-center gap-3 bg-zinc-900/80 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
          <div className="relative">
            <img
              src={LOGO_MIGUEL}
              className="w-10 h-10 rounded-xl border border-yellow-500 shadow-lg"
              alt="Miguel Logo"
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
          </div>
          <div>
            <p className="text-[10px] font-black italic leading-none text-yellow-500">
              MIGUELTCG
            </p>
            <p className="text-[12px] font-black uppercase tracking-tighter">
              BREAKS
            </p>
          </div>
        </div>

        {/* ÚLTIMO FOLLOW / EVENTOS */}
        <div className="bg-black/60 px-4 py-1 rounded-full border border-white/5 flex items-center gap-2">
          <span className="text-[8px] font-bold text-zinc-500 uppercase italic">
            Novo Seguidor:
          </span>
          <span className="text-[10px] font-black uppercase text-white animate-pulse">
            {lastFollow}
          </span>
        </div>
      </div>

      {/* --- 3. ÁREA DIREITA (QUEUE + WEBCAM + META) --- */}
      <div className="absolute right-6 top-12 flex flex-col gap-4 w-72">
        {/* WIDGET DA QUEUE (FILA) */}
        <div className="bg-zinc-900/95 border-2 border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-yellow-500 text-black px-3 py-1 flex justify-between items-center">
            <span className="text-[9px] font-black uppercase italic">
              Fila de Abertura
            </span>
            <span className="text-[9px] font-black">#3. 72532</span>
          </div>
          <div className="p-3 bg-gradient-to-br from-zinc-900 to-black">
            <p className="text-xs font-black truncate uppercase tracking-tight">
              Ricardo M.{' '}
              <span className="text-yellow-500 text-[10px] ml-2 font-normal">
                (4 Packs)
              </span>
            </p>
          </div>
        </div>

        {/* WEBCAM FRAME (MIGUEL FACE) */}
        <div className="relative">
          <div className="w-full aspect-video border-2 border-zinc-700 bg-black/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Espaço para a Webcam no OBS */}
          </div>
          {/* Label da Webcam */}
          <div className="absolute -bottom-2 right-4 bg-zinc-800 border border-zinc-600 px-3 py-1 rounded-md text-[8px] font-black uppercase italic">
            Live Cam
          </div>
        </div>

        {/* META DE SUBS / GOAL */}
        <div className="bg-black/80 p-4 rounded-2xl border border-white/5 space-y-2">
          <div className="flex justify-between text-[9px] font-black uppercase italic text-zinc-400 px-1">
            <span>Meta de Subs</span>
            <span>
              {subs}/{goal}
            </span>
          </div>
          <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden p-[2px] border border-zinc-700">
            <div
              className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full transition-all duration-1000"
              style={{ width: `${(subs / goal) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* --- 4. ÁREA INFERIOR (CONTROLO LOJA) --- */}
      <div className="absolute bottom-10 left-10 flex items-center gap-6">
        {/* STATUS LOJA */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-yellow-500 blur opacity-25 group-hover:opacity-50 transition"></div>
          <div className="relative bg-yellow-500 text-black px-8 py-2 rounded-md transform -skew-x-12 shadow-2xl">
            <span className="text-2xl font-black italic uppercase tracking-tighter">
              Loja Aberta
            </span>
          </div>
        </div>

        {/* CÓDIGOS DE DESCONTO / INFO */}
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">
            Utiliza o Código:
          </span>
          <span className="text-lg font-black italic text-white uppercase tracking-tighter">
            MIGUEL10
          </span>
        </div>
      </div>

      {/* --- ESPAÇO CENTRAL TOTALMENTE LIVRE PARA O PLAYMAT --- */}

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
