const INITIAL_STATE = {
    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
    index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NEXT_COLOR':
            return {
                ...state,
                index: state.index + 1,
            }
            case 'PREVIOUS_COLOR':
                return {
                    ...state,
                    index: state.index - 1,
                }
                case 'RANDOM_COLOR':
                    return {
                        ...state,
                        index: (Math.random() * 5).toFixed(),
                    }
        default:
            return state
    }
}

const store = Redux.createStore(reducer)

const randomColor = () => {
    store.dispatch({type: 'RANDOM_COLOR'})
}

const nextColor = () => {
    store.dispatch({ type: 'NEXT_COLOR' })
}

const previousColor = () => {
    store.dispatch({ type: 'PREVIOUS_COLOR' })
}

console.log(store);

const randomButton = document.getElementById('random')
randomButton.addEventListener('click', randomColor)

const nextButton = document.getElementById('next')
nextButton.addEventListener('click', nextColor)

const previousButton = document.getElementById('previous')
previousButton.addEventListener('click', previousColor)

store.subscribe(() => {
    const { index,colors } = store.getState();
    document.body.style.backgroundColor = `${colors[(index + 1) % colors.length]}`;
    document.getElementById("value").innerHTML = `${colors[(index + 1) % colors.length]}`
    console.log((index + 1) % colors.length);
})