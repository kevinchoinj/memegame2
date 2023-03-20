export const create_UUID = () => {
  let dt = new Date().getTime();
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = Math.floor((dt + Math.random()*16) % 16);
      dt = Math.floor(dt/16);
      if (c === "x") {
        return r.toString(16);
      } else {
        if (r < 8) {
          return (r + 8).toString(16);
        } else {
          return r.toString(16);
        }
      }
  });
  return uuid;
};
