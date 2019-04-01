
class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
  // solution getName= () => ()
}

const cat = new Animal('cat');

cat.getName(); // cat

const dog = cat.getName;
dog(); // this global; undefained