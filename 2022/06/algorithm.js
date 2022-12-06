const findThePositionOfDifferentCharacters = (input, sequenceSize) => {
  for (let index = 0; index < input.length - sequenceSize; index++) {
    const sequence = input.substring(index, index + sequenceSize);

    if (new Set([...sequence]).size === sequenceSize) {
      return index + sequenceSize;
    }
  }

  return 0;
};

export const getPacketMarkerPosition = input => findThePositionOfDifferentCharacters(input, 4);

export const getMessageMarkerPosition = input => findThePositionOfDifferentCharacters(input, 14);
