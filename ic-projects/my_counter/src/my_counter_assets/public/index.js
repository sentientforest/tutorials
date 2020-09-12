import my_counter from 'ic:canisters/my_counter';

my_counter.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
