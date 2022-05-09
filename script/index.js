// Палиндром можно получить как результат операций над другими числами.
// Возьмём любое натуральное число и сложим его с обращённым числом, то есть записанным теми же цифрами,
// но в обратном порядке. Проделаем то же действие с получившейся суммой и будем повторять его до тех пор,
// пока не образуется палиндром. Иногда достаточно сделать всего один шаг (например, 312 + 213 = 525), но,
// как правило, требуется не менее двух. Скажем, число 96 порождает палиндром 4884 только на четвёртом шаге....
// В результате я хочу, чтоб вы написали функцию, которая будет возвращать объект где будет свойство result - и это будет
// палиндром и свойство steps - это число вызовов до нахождения палиндрома

let Number = 96;
let step = 0;

function palindrome(number){

    let ReversedNum = 0;

    const getReversedNum = (number) => {
        while (number) {
            ReversedNum = ReversedNum * 10 + number % 10;
            number = Math.floor(number / 10);
        }

        return ReversedNum;
    }
    getReversedNum(number);


    if(Number === ReversedNum){
        return{
            number,
            step
        }
    }

    Number = number + ReversedNum;
    step += 1;

    return palindrome(Number);

}

console.log(palindrome(Number));
