const Text = (text) => {
    return text.split(" ").slice(0,30).join("")
}

const calculateItemCounter = (products) => {
    return products.reduce((acc, cur) => acc + cur.quantity, 0);
};
const calculateTotal = (products, discount = 0) => {
    const total = products.reduce((acc, cur) => acc + (Number(cur.price) || 0) * (cur.quantity || 1), 0);
    return (total * (1 - discount / 100)).toFixed(2);
};


export  {Text , calculateItemCounter ,calculateTotal}