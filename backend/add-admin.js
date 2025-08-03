import bcrypt from "bcrypt";

const run = async () => {
  try {
    const username = "imti";
    const password = "artisan";

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("\n");
    console.log(`"username": "${username}"`);
    console.log(`"password": "${hashedPassword}"`);
    console.log("\n");
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    process.exit();
  }
};

run();
