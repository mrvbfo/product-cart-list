import { Card, CardHeader, CardTitle } from "./ui/card";

export default function Cart({ children }: { children: React.ReactNode }) {
  return (
    <section id="cart">
      <Card className="rounded-lg border-none shadow-none max-w-[400px] max-lg:max-w-none">
        <CardHeader>
          <CardTitle>
            <h2 className="text-primary text-preset-2">Card Title (0)</h2>
          </CardTitle>
        </CardHeader>
        {children}
      </Card>
    </section>
  );
}
