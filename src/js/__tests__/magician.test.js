/* eslint-disable */
import Magician from "../magician";

test('Урон без дурмана', () => {
    const magician = new Magician();
    magician.attack = 2;
    const expected = 90;
    expect(magician.attack).toBe(expected);
});

test('Урон c дурмана', () => {
    const magician = new Magician();
    magician.stoned = 2;
    const expected = 85;
    expect(magician.stoned).toBe(expected);
});