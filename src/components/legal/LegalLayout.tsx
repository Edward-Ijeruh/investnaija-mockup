export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-[#f7f7f7] text-[#050505]">
      <div className="max-w-5xl mx-auto px-6 py-28 mt-6 md:mt-16">
        {/* Page heading */}
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h1>

          <div className="mt-10 space-y-6 text-sm md:text-[15px] leading-7 text-black/70">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
