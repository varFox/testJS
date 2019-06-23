let num = 266219,
    sum = 1;
num = num.toString();
for (let i = 0; i < num.length; i++) sum *= +num[i];
console.log(sum);
console.log((sum ** 3 + '').slice(0, 2));