let s = 0;

for (let i = 0; i <= 100; i++) {
  s += i;
}
console.log(s);

//데이터
const Wizard = class Wizard {
  constructor({ health, mana, armor }) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
};
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

//출력
//545 210 10
//파이어볼
let plant = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];
console.log(plant["0"]);
