/**
 * [My homework]{@link https://jsdoc.app/tags-inline-link.html}
 */


/**
 *Age user
 * @type {string}
 */
let age = prompt("Ваш год рождения",1981);
alert(age)

/**
 *Name user
 * @type {string}
 */

let name = prompt("Ваше имя?", "Андрей");
alert(name);

/**
 * Who is number ?)))))
 * @type {boolean}
 */
let isBoss = confirm("Александр Никитин?");
alert( isBoss );

/**
 *
 * @param y
 * @returns {string}
 */
let yo = (y) => /\d*1\d$/.test(y) || /[05-9]$/.test(y) ? 'лет' : ( /1$/.test(y) ? 'год' : 'года');
let years = parseInt(prompt('Сколько Вам лет?'));
alert(`Вам ${years} ${yo(years)}`);

/**
 * Площадь квадрата
 * @type {number}
 */
let a = 2, b = 2, c = 2, d = 2;
s = a * b
console.log(s)


