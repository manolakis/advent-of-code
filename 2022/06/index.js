import {readFile} from "../../common/readFile.js";
import {getPacketMarkerPosition, getMessageMarkerPosition} from "./algorithm.js";

export const execute = async () => {
  const data = await readFile(`./2022/06/input`);

  const packetMarker = getPacketMarkerPosition(data[0]);
  const messageMarker = getMessageMarkerPosition(data[0]);

  console.group('Day 06');
  console.log('Characters processed before the first start-of-packet marker is detected:', packetMarker);
  console.log('Characters processed before the first start-of-message marker is detected:', messageMarker);
  console.groupEnd();
};
