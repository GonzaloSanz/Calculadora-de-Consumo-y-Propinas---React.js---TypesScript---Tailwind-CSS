import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const addItem = (item: MenuItem) => {
        // Buscar item en la orden
        const itemExist = order.find(orderItem => orderItem.id == item.id);

        // Si ya existe
        if (itemExist) {
            // Incrementar en 1 la cantidad
            const ordenUpdated = order.map(orderItem => orderItem.id == item.id ? { ...orderItem, quantity: orderItem.quantity + 1} : orderItem);
            setOrder(ordenUpdated);

        } else {
            // Se añade el item a la orden, con 1 de cantidad
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        const orderUpdated = order.filter(orderItem => orderItem.id !== id);
        setOrder(orderUpdated);
    }

    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    }

    return {
        order,
        tip, 
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}

export default useOrder;