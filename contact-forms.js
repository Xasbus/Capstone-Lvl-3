// function handleEmail(event) {
//   event.preventDefault();
//   const form = event.target;
//   const passwordInput = form[0];
//   const value = passwordInput.value;
//   output(` <br>Submitting your concerns. . . `);
//   const promise = new Promise(getServerResponse1);
//   promise.then(parseResponse);
// }

// function handlePhone(event) {
//   event.preventDefault();
//   const phoneForm = event.target;
//   const phoneInput = phoneForm[0];
//   const phoneValue = phoneInput.value;
//   output(` <br>Your info is being processed. . .<br>`);
//   const promise = new Promise(getServerResponse2);
//   promise.then(parseResponse);
// }

// function handleDate(event) {
//   event.preventDefault();
//   const dateForm = event.target;
//   const dateInput = dateForm[0];
//   const dateValue = dateInput.value;
//   output(` <br>Sumbitting appointment. . .  <br>`);
//   const promise = new Promise(getServerResponse3);
//   promise.then(parseResponse);
// }

// function getServerResponse1(resolve) {
//   setTimeout(activateResolve, 5000);

//   function activateResolve() {
//     const response = {
//       message: "Successfully received. Will get back to you ASAP. ",
//     };
//     const resolveValue = JSON.stringify(response);
//     resolve(resolveValue);
//   }
// }

// function getServerResponse2(resolve) {
//   setTimeout(activateResolve, 5000);

//   function activateResolve() {
//     const response = {
//       message: "Phone number recorded. Please choose time and date. . .  ",
//     };
//     const resolveValue = JSON.stringify(response);
//     resolve(resolveValue);
//   }
// }

// function getServerResponse3(resolve) {
//   setTimeout(activateResolve, 5000);

//   function activateResolve() {
//     const response = {
//       message: "Successfully received. See you there! ",
//     };
//     const resolveValue = JSON.stringify(response);
//     resolve(resolveValue);
//   }
// }

// function parseResponse(resolveValue) {
//   const response = JSON.parse(resolveValue);
//   const message = response.message;
//   output(message);
// }
