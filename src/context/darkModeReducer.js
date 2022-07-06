const DarkModeReducer = (state, action) => {
    
    let dark = false;
    switch (action.type) {
        case "LIGHT":
            dark = false;
            break;
        case "DARK":
            dark = true;
            break;
        case "TOGGLE":
            dark = !state.darkMode
            break;
        default:
        break;
    }

    localStorage.setItem('darkMode', JSON.stringify(dark));

    return {
        darkMode : dark
    }
};

export default DarkModeReducer;