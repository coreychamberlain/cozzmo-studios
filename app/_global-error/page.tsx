export default function GlobalError({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-zinc-100">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-4">{error.message}</p>
      <button onClick={reset} className="mt-6 px-4 py-2 border rounded">Try again</button>
    </div>
  )
}
