export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-700">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo / Name */}
        <div className="text-white font-bold text-xl">Cozzmo Studios</div>

        {/* Right: Email & copyright */}
        <div className="text-zinc-400 text-sm text-center md:text-right">
          <div>Email: <a href="mailto:hi@cozzmostudios.co.uk" className="text-primary underline">hi@cozzmostudios.co.uk</a></div>
          <div className="mt-2">&copy; {new Date().getFullYear()} Cozzmo Studios</div>
        </div>
      </div>
    </footer>
  );
}
