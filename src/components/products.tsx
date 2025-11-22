export default function Products({ children }: { children: React.ReactNode }) {
  return (
    <section id="desserts">
      <h1 className="text-preset-1 mb-8">Desserts</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {children}
      </div>
    </section>
  );
}
