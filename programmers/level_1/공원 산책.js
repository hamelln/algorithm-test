function solution(park, routes) {
  const calcRouteToPoint = (route) => {
    const [direction, distanceString] = route.split(" ");
    const distance = Number(distanceString);
    switch (direction) {
      case "N":
        return [-distance, 0];
      case "S":
        return [distance, 0];
      case "E":
        return [0, distance];
      case "W":
        return [0, -distance];
      default:
        return;
    }
  };

  const movePoint = (currentPoint, directionPoint) => {
    const y = currentPoint[0] + directionPoint[0];
    const x = currentPoint[1] + directionPoint[1];
    return [y, x];
  };

  const isOutArea = (currentPoint, directionPoint) => {
    const [y, x] = movePoint(currentPoint, directionPoint);
    return y >= LIMIT_OF_Y || x >= LIMIT_OF_X || y < 0 || x < 0;
  };

  const hasBlockedRoad = (currentPoint, directionPoint) => {
    const [dy, dx] = directionPoint;
    const count = Math.abs(dy) + Math.abs(dx);
    const oncePoint = [dy / count, dx / count];
    let y = currentPoint[0];
    let x = currentPoint[1];
    for (let i = 0; i < count; i++) {
      y += oncePoint[0];
      x += oncePoint[1];
      if (park[y][x] === "X") {
        return true;
      }
    }
    return false;
  };

  const LIMIT_OF_X = park[0].length;
  const LIMIT_OF_Y = park.length;
  const directionPoints = routes.map(calcRouteToPoint);
  const startY = park.findIndex((str) => str.includes("S"));
  const startX = park[startY].indexOf("S");

  const result = directionPoints.reduce(
    (currentPoint, directionPoint) => {
      if (isOutArea(currentPoint, directionPoint)) {
        return currentPoint;
      }
      if (hasBlockedRoad(currentPoint, directionPoint)) {
        return currentPoint;
      }
      currentPoint = movePoint(currentPoint, directionPoint);
      return currentPoint;
    },
    [startY, startX]
  );

  return result;
}
