import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // getproducts
    const productsData = await fetch("products.json");
    const products = await productsData.json();
    // console.log(products)
    // get cart
    const savedCart = getStoredCart();
    const initialCart = [];
    for (const id in savedCart) {
        const addedCart = products.find(product => product.id === id);
        if (addedCart) {
            const quantity = savedCart[id];
            addedCart.quantity = quantity;
            initialCart.push(addedCart);
        }
    }
    return { products, initialCart };
}