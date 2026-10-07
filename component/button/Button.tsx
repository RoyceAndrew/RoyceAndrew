"use client";

type ButtonProps = {
  title: string;
  href: string;
  target?: "_blank" | undefined;
  onClick?: () => void;
  download?: boolean;
};

export default function Button({ title, href, target, onClick, download }: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      onClick={onClick}
      download={download}
      className="group relative isolate inline-block overflow-hidden px-1"
    >
      {title}
      <span className="pointer-events-none absolute inset-0 origin-left scale-x-0 bg-white mix-blend-difference transition-transform duration-500 group-hover:scale-x-100" />
    </a>
  );
}