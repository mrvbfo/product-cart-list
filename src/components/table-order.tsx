export default function TableOrder() {
  return (
    <table className="rounded-lg">
      <tbody>
        <tr className="flex items-center justify-between mb-4 pb-4">
          <td className="flex gap-4">
            <img
              className="rounded-lg"
              src="/images/image-tiramisu-thumbnail.jpg"
              alt="tiramisu thumbnail"
              width={48}
              height={48}
            />
            <div>
              <h3 className="text-preset-4-bold">Classic Tiramisu</h3>
              <div className="flex items-center gap-2">
                <span className="text-primary text-preset-4-bold">1x</span>
                <span className="text-muted text-preset-4">@ $5.50</span>
              </div>
            </div>
          </td>
          <td className="text-preset-3">$5.50</td>
        </tr>
        <tr className="flex items-center justify-between mb-4 pb-4">
          <td className="flex gap-4">
            <img
              className="rounded-lg"
              src="/images/image-tiramisu-thumbnail.jpg"
              alt="tiramisu thumbnail"
              width={48}
              height={48}
            />
            <div>
              <h3 className="text-preset-4-bold">Classic Tiramisu</h3>
              <div className="flex items-center gap-2">
                <span className="text-primary text-preset-4-bold">1x</span>
                <span className="text-muted text-preset-4">@ $5.50</span>
              </div>
            </div>
          </td>
          <td className="text-preset-3">$5.50</td>
        </tr>
        <tr className="flex items-center justify-between mb-4 pb-4">
          <td className="flex gap-4">
            <img
              className="rounded-lg"
              src="/images/image-tiramisu-thumbnail.jpg"
              alt="tiramisu thumbnail"
              width={48}
              height={48}
            />
            <div>
              <h3 className="text-preset-4-bold">Classic Tiramisu</h3>
              <div className="flex items-center gap-2">
                <span className="text-primary text-preset-4-bold">1x</span>
                <span className="text-muted text-preset-4">@ $5.50</span>
              </div>
            </div>
          </td>
          <td className="text-preset-3">$5.50</td>
        </tr>
      </tbody>
    </table>
  );
}
