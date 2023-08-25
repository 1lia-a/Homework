export const isBalance = (users) => {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const balance = parseFloat(user.balance.replace("$", "").replace(",", ""));

    sum += balance;

    if (balance > 2000) {
      console.log(`Index of users with 2000$+: ${user.index}`);
    }
  }
  console.log(`Sum of all balances: ${sum.toFixed(2)}`);
};
