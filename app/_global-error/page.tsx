import P from "@/components/typography/Paragraph";
import H1 from "@/components/typography/H1";
export default function GlobalError({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-zinc-100">
      <H1>Something went wrong</H1>
      <P className="mt-4">Sorry, an unexpected error has occurred.</P>
      <button onClick={reset} className="mt-6 px-4 py-2 border rounded">Try again</button>
    </div>
  )
}
