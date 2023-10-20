import Users from "../models/Users.js";
import Categories from "../models/Categories.js";
import Tasks from "../models/Tasks.js";


async function main() {
  await Users.sync({ alter: true });
  await Categories.sync({ alter: true });
  await Tasks.sync({ alter: true });

    process.exit(0);
}

main()
