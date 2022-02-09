//set up store
const store = Redux.createStore(moodReducer)

const face = document.getElementById('face')

//listeners for buttons
document.getElementById('happy').addEventListener('click', () => {
    store.dispatch({ type: 'HAPPY', payload: '٩(◕‿◕｡)۶'})
})

document.getElementById('sad').addEventListener('click', () => {
    store.dispatch({ type: 'SAD', payload: '(ಥ﹏ಥ)'})
})

document.getElementById('angry').addEventListener('click', () => {
    store.dispatch({ type: 'ANGRY', payload: '٩(ఠ益ఠ)۶'})
})

document.getElementById('confused').addEventListener('click', () => {
    store.dispatch({ type: 'CONFUSED', payload: 'ლ(ಠ_ಠ ლ)'})
})

const displayFace = () => {
    face.innerHTML = store.getState().face
}

displayFace()
store.subscribe(displayFace)