export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto px-4 my-[5.5rem]">{children}</div>;
}
