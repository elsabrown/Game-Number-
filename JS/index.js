let greeting = "Привет! Как теб зовут?";
let name = prompt(greeting);

while (name == "" || name == null) {
  name = prompt(greeting);
}

alert(
  name +
    ' , я загадал число от 1 до 100. Попробуй отгадать ег за наименьшее число попыток. После каждой попытки я скажу "мало", "много" или "угадал".'
);

let number = Math.ceil(Math.random() * 100);
let guess = prompt("Какое число я загадал?");
let numberOfGuesses = 1;

while (guess != number) {
  if (guess > number) {
    guess = prompt("Много. Попробуй еще раз");
    numberOfGuesses = numberOfGuesses + 1;
  } else if (guess < number) {
    guess = prompt("Мало. Попробуй еще раз");
    numberOfGuesses = numberOfGuesses + 1;
  }
}

alert(
  "Ты угадал. Это число " +
    number +
    ". Тебе понадобилось " +
    numberOfGuesses +
    " попыток."
);

/*Логика работы if

Если пользователь не ввел имя
    Попросить ввести имя еще раз

if (пользователь не ввел имя){
    Попросить ввести имя еще раз
}

if (name == ''){
    prompt('Привет! Как теб зовут?');
}
*/
