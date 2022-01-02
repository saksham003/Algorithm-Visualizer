const getWidth = (arrayLength) => {
    if (arrayLength <= 20) {
        return 65
    }
    else if (arrayLength > 20 && arrayLength <= 40) {
        return 35
    }
    else if (arrayLength > 40 && arrayLength <= 60) {
        return 22
    }
    else if (arrayLength > 60 && arrayLength <= 75) {
        return 17
    }
    else if (arrayLength > 75 && arrayLength <= 100){
        return 12
    }

}

export default getWidth