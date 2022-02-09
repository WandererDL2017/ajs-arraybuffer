/* eslint-disable */
import Daemon from "../daemon";

test('Урон без дурмана', () => {
    const daemon = new Daemon();
    daemon.attack = 2;
    const expected = 90;
    expect(daemon.attack).toBe(expected);
});

test('Урон c дурмана', () => {
    const daemon = new Daemon();
    daemon.stoned = 2;
    const expected = 85;
    expect(daemon.stoned).toBe(expected);
});