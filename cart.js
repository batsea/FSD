class Item {
    constructor(name, price, quantity = 1) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    total() {
        return this.price * this.quantity;
    }
}

class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }

    addItem(item) {
        this.items.push(item);
        this.save();
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        this.save();
    }

    updateQuantity(name, quantity) {
        const item = this.items.find(item => item.name === name);
        if (item) item.quantity = quantity;
        this.save();
    }

    total() {
        return this.items.reduce((sum, item) => sum + item.total(), 0);
    }

    applyDiscount(code) {
        return code === "DISCOUNT10" ? this.total() * 0.9 : this.total();
    }

    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    display() {
        console.log(this.items.map(item => `${item.name} - $${item.price} x ${item.quantity}`).join('\n'));
        console.log(`Total: $${this.total()}`);
    }
}

const cart = new Cart();
cart.addItem(new Item("Laptop", 1000, 1));
cart.addItem(new Item("Phone", 500, 2));
cart.display();

const discountCode = "DISCOUNT10";
console.log(`Total after discount: $${cart.applyDiscount(discountCode)}`);
