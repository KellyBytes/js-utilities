const numbers = [1, 2, 3, 4, 5];

// 配列内の値の追加・削除
numbers.push(6); // [1, 2, 3, 4, 5, 6]
numbers.pop(); // [1, 2, 3, 4]
numbers.shift(); // [2, 3, 4, 5]
numbers.unshift(0); // [0, 1, 2, 3, 4, 5]

// 配列の操作
numbers.map((n) => n + '⭐'); // ['1⭐', '2⭐', '3⭐', '4⭐', '5⭐']
numbers.filter((n) => n !== 2); // [ 1, 3, 4, 5 ]
numbers.reduce((x, y) => x + y); // 15
numbers.find((n) => n === 1); // 1
numbers.forEach((n) => console.log(n)); // 1 2 3 4 5

// 真偽値取得
numbers.every((n) => n !== 100); // true
numbers.some((n) => n !== 1); //true
numbers.includes(3); //true

// 値の位置取得
numbers.indexOf(5); // 4
numbers.lastIndexOf(4); // 3
numbers.findIndex((n) => n % 2 === 0); // 1
numbers.at(-2); // 4 後ろから2番目

// その他
numbers.reverse(); // [ 5, 4, 3, 2, 1 ]
numbers.concat(9, 10); // [1, 2, 3, 4, 5, 9, 10]
numbers.join('-'); // 1-2-3-4-5

numbers.sort(); // [1, 2, 3, 4, 5]
numbers.sort((a, b) => b - a); // [ 5, 4, 3, 2, 1 ]

numbers.slice(1, 3); // [ 2, 3 ] i=1からi=3(含まず)まで取得．元の配列は不変 ([1, 2, 3, 4, 5])
numbers.splice(1, 2); // [2, 3] i=1から2個取得．元の配列は変更 ([1, 4, 5])
