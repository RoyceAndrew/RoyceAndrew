"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_FONTS = [
  "var(--font-cormorant), serif",
  "var(--font-josefin), sans-serif",
  "var(--font-marcellus), serif",
];

const isSpace = (ch: string) => ch === " ";

type FontRandomizerProps = {
  text?: string;
  fonts?: string[];
  cycleInterval?: number;
  holdInterval?: number;
  boxTransitionMs?: number;
  boxPaddingX?: string;
  className?: string;
};

export default function FontRandomizer({
  text = "hallo",
  fonts = DEFAULT_FONTS,
  cycleInterval = 90,
  holdInterval = 700,
  boxTransitionMs = 300,
  boxPaddingX = "1rem",
  className = "",
}: FontRandomizerProps) {
  const letters = Array.from(text);
  const [fontIdx, setFontIdx] = useState<number[]>(() => letters.map(() => 0));
  const [active, setActive] = useState(() => {
    const first = letters.findIndex(ch => !isSpace(ch));
    return first === -1 ? 0 : first;
  });

  const targetRef = useRef(-1);

  useEffect(() => {
    if (letters.length === 0 || fonts.length === 0) return;

    if (targetRef.current === -1) {
      targetRef.current = Math.floor(Math.random() * fonts.length);
      if (targetRef.current === 0 && fonts.length > 1) {
        targetRef.current = 1;
      }
    }

    let step = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const nextNonSpace = (i: number) => {
      let n = (i + 1) % letters.length;
      while (isSpace(letters[n]) && n !== i) {
        n = (n + 1) % letters.length;
      }
      return n;
    };

    const advance = () => {
      const target = targetRef.current;
      const next = nextNonSpace(active);
      const wrapped = next <= active;
      if (wrapped) {
        let random = Math.floor(Math.random() * fonts.length);
        if (random === target && fonts.length > 1) {
          random = (random + 1) % fonts.length;
        }
        targetRef.current = random;
      }
      setActive(next);
    };

    const cycle = () => {
      const target = targetRef.current;

      if (step >= fonts.length) {
        setFontIdx(prev =>
          prev.map((f, i) => (i === active ? target : f))
        );
        timer = setTimeout(advance, holdInterval);
      } else {
        setFontIdx(prev =>
          prev.map((f, i) => (i === active ? (f + 1) % fonts.length : f))
        );
        step++;
        timer = setTimeout(cycle, cycleInterval);
      }
    };

    timer = setTimeout(cycle, boxTransitionMs);
    return () => clearTimeout(timer);
  }, [active, letters.length, fonts, cycleInterval, holdInterval, boxTransitionMs, letters]);

  return (
    <span className={className} style={{ whiteSpace: "pre-line" }}>
      {letters.map((ch, i) => {
        const isNewline = ch === "\n";
        const isBoxed = i === active && !isNewline;
        return (
          <span
            key={i}
            className={`relative inline-block ${
              isBoxed ? "bg-white text-black" : ""
            }`}
            style={{
              fontFamily: fonts[fontIdx[i]],
              paddingLeft: isBoxed ? boxPaddingX : 0,
              paddingRight: isBoxed ? boxPaddingX : 0,
              transition: `padding ${boxTransitionMs}ms ease`,
            }}
          >
            {isSpace(ch) ? " " : ch}
          </span>
        );
      })}
    </span>
  );
}
