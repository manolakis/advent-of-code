const findThePositionOfDifferentCharacters = (input, sequenceSize) => {
  const marker = [...input.substring(0, sequenceSize -1)];

  for (let index = sequenceSize -1; index < input.length; index++) {
    const char = input.charAt(index);

    marker.push(char);

    if (new Set(marker).size === sequenceSize) {
      return index + 1;
    }

    marker.shift();
  }

  return 0;
};

export const getPacketMarkerPosition = input => findThePositionOfDifferentCharacters(input, 4);

export const getMessageMarkerPosition = input => findThePositionOfDifferentCharacters(input, 14);
