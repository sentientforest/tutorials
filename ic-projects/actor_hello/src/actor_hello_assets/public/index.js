import actor_hello from 'ic:canisters/actor_hello';

actor_hello.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
