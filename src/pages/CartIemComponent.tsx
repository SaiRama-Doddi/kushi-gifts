

import type { CartItem } from "../lib/store"
import { removeFromCart, updateCartQuantity } from "../lib/store"
import { Trash2 } from "lucide-react"
import { Link } from "react-router-dom";

interface CartItemComponentProps {
  item: CartItem
}

export function CartItemComponent({ item }: CartItemComponentProps) {
  return (
    <div className="flex gap-4 border-b border-border pb-4">
      {/* Product Image */}
      <Link to={`/product/${item.id}`} className="flex-shrink-0">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg border border-border hover:border-accent transition-colors"
        />
      </Link>

      {/* Product Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <Link to={`/product/${item.id}`} className="hover:text-accent transition-colors">
            <h3 className="font-bold text-lg">{item.name}</h3>
          </Link>
          <p className="text-sm text-muted-foreground mt-1">{item.category}</p>
        </div>

        {/* Quantity and Remove */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 border border-border rounded-lg w-fit">
            <button
              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
              className="px-3 py-1 hover:bg-muted transition-colors text-sm"
            >
              −
            </button>
            <span className="px-3 py-1 text-sm font-bold">{item.quantity}</span>
            <button
              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
              className="px-3 py-1 hover:bg-muted transition-colors text-sm"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-destructive hover:opacity-70 transition-opacity p-1"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col justify-between items-end">
        <p className="text-lg font-bold gold-text">₹{(item.price * item.quantity).toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">₹{item.price.toLocaleString()} each</p>
      </div>
    </div>
  )
}
