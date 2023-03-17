import { Dimensions, PixelRatio } from "react-native";

const { width:SCREEN_WIDTH, height:SCREEN_HEIGHT } = Dimensions.get('window');
const widthBaseScale = SCREEN_WIDTH / 390;
const heightBaseScale = SCREEN_HEIGHT / 844;

const Normalize = (size, based='width') => {
    const newSize = 
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
    return Math.round(
        PixelRatio.roundToNearestPixel(newSize)
    );
}

// for width pixel
const widthPixel = (size) => {
    return Normalize(size, 'width');
};

// for height pixel
const heightPixel = (size) => {
    return Normalize(size, 'height');
};

// for font pixel
const fontPixel = (size) => {
    return heightPixel(size);
};

//for margin and padding vertical pixel
const pixelSizeVertical = (size) => {
    return heightPixel(size);
};

// for margin and padding horizontal pixel
const pixelSizeHorizontal = (size) => {
    return widthPixel(size);
};

export {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeHorizontal,
    pixelSizeVertical
}

const styles = StyleSheet.create({
    
})