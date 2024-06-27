import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  const maxStudentsSize = [19, 20, 30];

  for (let i = 0; i < 3; i++) {
    rooms.push(new ClassRoom(maxStudentsSize[i]));
  }
  return rooms;
}
