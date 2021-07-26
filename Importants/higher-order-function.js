var a = function hello() {
  return function () {
    console.log('Hello world');
  }
};

a()();