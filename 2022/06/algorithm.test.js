import { expect } from 'chai';
import { getPacketMarkerPosition, getMessageMarkerPosition } from "./algorithm.js";

describe('day 06', () => {
  [
    ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 7],
    ['bvwbjplbgvbhsrlpgdmjqwftvncz', 5],
    ['nppdvjthqldpwncqszvftbrmjlhg', 6],
    ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 10],
    ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 11],
  ].forEach(([input, position]) => {
    it(`should find the packet marker in the ${position} position`, async () => {
      expect(getPacketMarkerPosition(input)).to.be.equal(position);
    });
  });

  [
    ['mjqjpqmgbljsphdztnvjfqwrcgsmlb', 19],
    ['bvwbjplbgvbhsrlpgdmjqwftvncz', 23],
    ['nppdvjthqldpwncqszvftbrmjlhg', 23],
    ['nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', 29],
    ['zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', 26],
  ].forEach(([input, position]) => {
    it(`should find the message marker in the ${position} position`, async () => {
      expect(getMessageMarkerPosition(input)).to.be.equal(position);
    });
  });
});
