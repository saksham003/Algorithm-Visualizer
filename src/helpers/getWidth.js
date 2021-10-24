const getWidth = (arrayLength) => {
    if (arrayLength <= 20) {
        return 60
    }
    else if (arrayLength > 20 && arrayLength <= 40) {
        return 30
    }
    else if (arrayLength > 40 && arrayLength <= 60) {
        return 20
    }
    else if (arrayLength > 60 && arrayLength <= 75) {
        return 15
    }
    else if (arrayLength > 75 && arrayLength <= 100){
        return 10
    }
}

export default getWidth