//3. “person” class to hold all the details.

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }
  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setGender(gender) {
    this.gender = gender;
  }
}
const mani = new Person("Mani", 22, "male");
console.log(`Name: ${mani.getName()}`);
console.log(`Age: ${mani.getAge()}`);
console.log(`Gender: ${mani.getGender()}`);
