import explore_hello from 'ic:canisters/explore_hello';

explore_hello.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
