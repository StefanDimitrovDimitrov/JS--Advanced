const { expect } = require('chai');
const rgbToHexColor = require('./RGB');


describe('rgbToHexColor', () => {
    it('coverts black to hex', () =>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it('coverts white to hex', () =>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it('returns undefined for string params', () =>{
        expect(rgbToHexColor('a','a','a')).to.equal('undefined');
    });

    it('convert red to hex' , () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#00FF00');
    })

    it('convert green to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    })

    it('convert blue to hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#00FF00');
    })

    it('returns undefined for negative', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    })

    it('returns undefined for value > 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    })

    // test overloading

    it('coverts (151, 104, 172) to hex', () => {
        expect(rgbToHexColor(151, 104, 172)).to.be.equal('#9768AC');
    });

    it('coverts (42, 173, 170) to hex', () => {
        expect(rgbToHexColor(42, 173, 170)).to.be.equal('#2AADAA');
    });

});