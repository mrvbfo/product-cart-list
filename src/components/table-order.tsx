import { useCartStore } from "@/store/cart";

export default function TableOrder() {
  const { cartItems, getTotalPrice } = useCartStore();
  return (
    <table className="rounded-lg">
      <tbody>
        {cartItems.map((item) => (
          <tr
            key={item.name}
            className="flex items-center justify-between mb-4 pb-4"
          >
            <td className="flex gap-4">
              <img
                className="rounded-lg"
                src={item.image.mobile}
                alt={`${item.name} thumbnail`}
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-preset-4-bold">{item.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-primary text-preset-4-bold">
                    {item.quantity}x
                  </span>
                  <span className="text-muted text-preset-4">
                    @ ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </td>
            <td className="text-preset-3">
              ${(item.price * item.quantity).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="flex items-center justify-between my-4 px-6 pb-6">
          <td>Order Total</td>
          <td className="text-preset-3">
            <strong>${getTotalPrice().toFixed(2)}</strong>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
