import clsx from "clsx";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export default function P({ children, className }: ParagraphProps) {
  return (
    <p
      className={clsx(
        "text-zinc-300 leading-relaxed mb-4 last:mb-0",
        className
      )}
    >
      {children}
    </p>
  );
}
