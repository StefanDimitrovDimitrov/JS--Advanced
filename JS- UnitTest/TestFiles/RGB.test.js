const { expect, assert } = require('chai')

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

// •	Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
// •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// •	Return undefined if any of the input parameters are of invalid type or not in the expected range

describe('rgbToHexColor', () => {
    it('coverts black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('coverts white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('returns undefined for string params', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.equal(undefined);
    });

    it('convert red to hex', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    })

    it('convert green to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    })

    it('convert blue to hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    })

    it('returns undefined for negative', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    })

    it('returns undefined for value > 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    })

    it('returns undefined for negative', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    })

    it('returns undefined for value > 255', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    })

    it('returns undefined for negative', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    })

    it('returns undefined for value > 255', () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    })

    // test overloading

    it('coverts (151, 104, 172) to hex', () => {
        expect(rgbToHexColor(151, 104, 172)).to.be.equal('#9768AC');
    });

    it('coverts (42, 173, 170) to hex', () => {
        expect(rgbToHexColor(42, 173, 170)).to.be.equal('#2AADAA');
    });

});

describe('rgbToHexColor', () => {
    it('coverts black to hex - assert', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000')
    });

    it('coverts white to hex - assert', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF')
    });

    it('returns undefined for string params - assert', () => {
        assert.equal(rgbToHexColor('a', 'a', 'a'), undefined)
    });

    it('convert red to hex - assert', () => {
        assert.equal(rgbToHexColor(255, 0, 0), '#FF0000')
    })

    it('convert green to hex - assert', () => {
        assert.equal(rgbToHexColor(0, 255, 0), '#00FF00')
    })

    it('convert blue to hex - assert', () => {
        assert.equal(rgbToHexColor(0, 0, 255), '#0000FF')
    });
    it('returns undefined for value > 255', () => {
        assert.equal(rgbToHexColor(0, 0, 256),undefined)
    })

    it('returns undefined for negative', () => {
        assert.equal(rgbToHexColor(0, 0, -1),undefined)

    })

    it('returns undefined for value > 255', () => {
        assert.equal(rgbToHexColor(0, 256, 0),undefined)
    })
});