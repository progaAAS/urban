
const initialState = []

const listReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            let abc = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
            randomString = '';
            for (let i = 0; i < abc.length; i++) {
                randomString += abc[Math.round(Math.random() * (abc.length - 1))];
            }
            let newState = [...state, randomString]
        return newState;
        default:
             return state;
    }
}

export const addItem = () => ({
    type: "ADD_ITEM"
})

export default listReducer;