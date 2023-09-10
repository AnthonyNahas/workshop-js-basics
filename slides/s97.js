// S97 Reference values - pass by value
function setActive(obj) {
  obj.active = true;
}

const state = {
  active: false
};

setActive(state);

console.log(state);
