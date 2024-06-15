import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className="space-y-3 mt-5">
                {order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-t border-gray-200 py-3 last-of-type:border-b"
                    >
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>

                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                        <button
                            onClick={() => removeItem(item.id)}
                            className="bg-red-600 hover:bg-red-700 transition-colors h-8 w-8 rounded-full text-white font-bold"
                        >X</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderContents;