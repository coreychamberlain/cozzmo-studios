import clsx from "clsx";

type H3Props = {
  children: React.ReactNode;
  className?: string;
};

export default function H3({ children, className }: H3Props) {
  return (
    <h3
      className={clsx(
        "text-xl md:text-2xl font-medium text-white mb-3",
        className
      )}
    >
      {children}
    </h3>
  );
}
