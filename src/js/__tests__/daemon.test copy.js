/* eslint-disable */
import Daemon from "../daemon";

test('Урон без дурмана', () => {
    const daemon = new Daemon();
    daemon.cell = 2;
    daemon.stoned = false;
    daemon.attack = daemon.stoned;
    const expected = 90;
    expect(daemon.attack).toBe(expected);
});

test('Урон c дурмана', () => {
    const daemon = new Daemon();
    daemon.cell = 2;
    daemon.stoned = true;
    daemon.attack = daemon.stoned;
    const expected = 85;
    expect(daemon.attack).toBe(expected);
});