export const marketActions = {
    addProduct
}

function addProduct(data) {
    return {
        type: 'ADD_PRODUCT',
        payload: data
    };
}