//Assuming list of upcoming events. We can create similar or modify method to calculate historic times

export const upcomingStartTime = (dateTime) => {
  let today = new Date();
  let dateTimeObj = new Date(dateTime);

  const hours = parseInt(
    (Math.abs(dateTimeObj - today) / (1000 * 60 * 60)) % 24
  );
  const minutes = parseInt(
    (Math.abs(dateTimeObj.getTime() - today.getTime()) / (1000 * 60)) % 60
  );
  const seconds = parseInt(
    (Math.abs(dateTimeObj.getTime() - today.getTime()) / 1000) % 60
  );
  var difference = Math.floor((dateTimeObj - today) / 1000 / 60);
  if (difference < 0 ) {
      return 'LIVE NOW';
  }
  if (hours) {
    return `IN ${hours} HOURS`;
  }
  if (minutes) {
    return `IN ${minutes} MINUTES`;
  }
  if (seconds) {
    return `IN ${seconds} SECONDS`;
  }
};
