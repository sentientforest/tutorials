import dfx_hello from 'ic:canisters/dfx_hello';

dfx_hello.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
