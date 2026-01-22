import clsx from "clsx";

type H1Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={clsx(
        "text-4xl md:text-5xl font-bold text-white mb-6 leading-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
