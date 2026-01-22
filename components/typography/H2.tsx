import clsx from "clsx";

type H2Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H2({ children, className }: H2Props) {
  return (
    <h2
      className={clsx(
        "text-2xl md:text-3xl font-semibold text-white mb-4",
        className
      )}
    >
      {children}
    </h2>
  );
}
