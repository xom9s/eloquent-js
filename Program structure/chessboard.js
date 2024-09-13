let num = 8;
let divided_num = num / 2;
let hashtag = "# ";
let space = " #";
let doubleNum = num * 2;

for (let i = 0; i < num; i += 2) {
  console.log(hashtag.repeat(divided_num) + "\n" + space.repeat(divided_num));
}
