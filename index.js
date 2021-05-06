/*const b = 7;

function parent(a) {
  console.log(this);
  return function () {
    console.log(this);
    return a + b;
  }
}


const fun1 = parent(7);
console.log(fun1(1));

function parent(...arg) {
  let result = 0;
  const sum = function () {
    arg.forEach((count) => {
      result += count;
    });
    return result;
  };
  return sum();
}

console.log(parent(1, 2, 3));

const obj = {
  baner: 'hello',
  link: 'google.com'
};

function createCash(obj) {
  if (obj.cashe) {
    return obj.cashe;
  }
  obj.cashe = obj.keys(obj).join();
}

console.log(createCash(obj));
console.log(createCash(obj));


const obj = {
  baner: 'hello',
  link: 'google.com'
};
obj.metod = function () {
  let result = 0;
  Object.keys(this).forEach((key) => {
    if (typeof this[key] !== 'function') {
      result++;
    }
  });
  return result;
};
console.log(obj.metod());


const obj = {
  baner: 'Hi',
  link: 'Google'
};
console.log('test' + obj);
/*obj.toString = function () {
  return this.baner + this.link;
}
console.log('test' + obj);

console.log(7 + obj);
obj.valueOf = function () {
  return Object.keys(this).length;
}
console.log(7 + obj);

const car = {
  gear: 0,
  changeGear: function (isUp) {
    if (isUp) {
      this.gear++;
    } else {
      this.gear--;
    }
  },
  getGearInfo: function () {
    let result;
    switch (this.gear) {
      case -1:
        result = 'back';
        break;
      case -0:
        result = 'neytral';
        break;
      case 1:
        result = 'slow';
        break;
      case 2:
        result = 'medium';
        break;
      case 3:
        result = 'fast';
        break;
      case 4:
        result = 'very fast';
        break;
    }
    return result;
  },
  speed: 0,
  valueOf: function (a) {
    return this.speed;
  }
};

car.speed = 6 + car.valueOf();
console.log(car.speed);
if (car.speed >= 5) {
  alert('warning');
}
const obj = {
  name: '123',
  email: 'rrerer@.com',
  age: '124',
  adress: {
    street: 'PUB',
    houseNumber: 12
  }
};
const {
  adress: {
    street,
    apportament = 15,
    housNamber = 6
  },
} = obj;
console.log(street);
console.log(apportament);

function test(...arg) {
  console.log(arg);
}
test(2, 54, 6, 'asfast');
*/
const user1 = {
  name: 'Alex',
  lastName: 'test',
  age: 15
};
const user2 = {
  name: 'Ivan',
  lastName: 'coub'
}
console.log(Object.assign({}, user1, user2));
console.log(user1);
console.log(user2);