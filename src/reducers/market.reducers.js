let initialState = {
    products: [
        {name: 'produto1'},
        {name: 'produto2'},
        {name: 'produto3'}
    ],
    promotions: [
        {
            name: 'Dia das Mães',
            
        
        }
    ]

    
};


export default function market(state = initialState , action) {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: state.products.concat(state.products, action.payload)
            }
        default:
            return state
    }

};


