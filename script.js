const fs = require("fs");
const data = require("./_metadata.json");
// console.log(data);

for (let i = 0; i < data.length; ++i) {
  fs.writeFileSync(
    `./metadata/${i + 1}.json`,
    JSON.stringify(data[i]),
    "utf-8"
  );
}
