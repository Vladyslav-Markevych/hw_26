// [ I ]

const books = [
  { title: "Гаррі Поттер", author: "Дж.К. Ролінг" },
  { title: "1984", author: "Джордж Орвелл" },
  { title: "Хоббіт", author: "Дж.Р.Р. Толкієн" },
];

let findBook = books.find((book) => book.author == "Джордж Орвелл");
console.log(findBook);

// [ II ]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbers = numbers.filter((num) => num % 2 == 0);
console.log(newNumbers);

// [ III ]

const prices = [100, 200, 300, 400, 500];

let newPrices = prices.map((price) => (price += price * 0.1));
console.log(newPrices);

// [ IV ]

const numbersFour = [45, 80, 32, 100, 105];
console.log(numbersFour.includes(100));

// [ V ]

const nums = [1, 2, 3, 4, 5, -6, 7];
console.log(nums.every((num) => num >= 0));

// [ VI ]

const sentencesSeven = [
  "Я люблю JavaScript",
  "Масиви це весело",
  "Програмування це круто",
];

let newSentences = sentencesSeven.map((word) => {
  let newArray = word.split(" ");
  return newArray[0];
});
console.log(newSentences);

// [ VII ]

const sentences = [
  "JavaScript цікавий",
  "Масиви це корисно",
  "Вивчайте програмування щодня",
];

let count = sentences.flat().join(" ").split(" ").length;
console.log(count);
