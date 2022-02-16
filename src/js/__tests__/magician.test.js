/* eslint-disable */
import Magician from "../magician";

test('Урон без дурмана', () => {
    const magician = new Magician();
    magician.cell = 2;
    magician.stoned = false;
    magician.attack = magician.stoned;
    const expected = 90;
    expect(magician.attack).toBe(expected);
});

test('Урон c дурмана', () => {
    const magician = new Magician();
    magician.cell = 2;
    magician.stoned = true;
    magician.attack = magician.stoned;
    const expected = 85;
    expect(magician.attack).toBe(expected);
});