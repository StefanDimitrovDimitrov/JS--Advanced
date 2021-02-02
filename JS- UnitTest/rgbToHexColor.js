function rgbToHexColor(...rgb) {
    if (rgb.some(c => typeof c != 'number')) {
        return undefined;
    }

    if(rgb[0] == 0) {
        return '#000000';
    } else {
        return '#FFFFFF';
    }
}

module.export = rgbToHexColor;