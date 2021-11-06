function showDetails(...details) {
  let userName;
  let userAge;
  let userStatus;
  let status;
  i = 0;
  if (details.length === 0) {
      console.log(`We have no details for you to show`)
  }
  // ------------------------------------------------------------------
  else {
      for (let i = 0; i < details.length; i++) {
          // console.log(`type of ${typeof details[i]}`)
          if (typeof details[i] === 'string') {
              // console.log(`type of ${details[i]} is string`);
               userName = details[i];
              // console.log(userName);
          }
          else if (typeof details[i] === 'number') {
              // console.log(`type of ${details[i]} is number`);
               userAge = details[i];
              // console.log(userAge);
          }
          else if (typeof details[i] === 'boolean') {
              // console.log(`type of ${details[i]} is boolean`);
               userStatus = details[i];
              // console.log(userStatus);
          }
      }
      // ------------------------------------------------------------------------
      // if (userStatus === true) {
      //      status = 'you are available to hire'
      // }
      userStatus === true ? `${status = 'you are available to hire'}` : `${status = 'you are not available to hire'}`;
      // else {
      //     status = 'you are not available to hire'
      // }
      console.log(`Hello ${userName} your age is ${userAge} and ${status}`)
  }
}
showDetails(true, 21, 'rahma');