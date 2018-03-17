/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var data = [
    {image:"im01.jpg", text:"Далёкий 1959 год. Учёные расчитали, что уровень развития радиоастрономии достиг того уровня, когда мощности современных радиотелескопов достаточно для обнаружения излучения цивилизаций достигших уровня развития сопоставимого с человеческим."},
    {image:"im02.gif", text:"Также была расчитана длина волны на которой передача на большие расстояния в открытом космосе наиболее эффективна - 21 сантиметр или частота 1420 МГц. Сопоставимая по развитию инопланетная цивилизация должна прийти к аналогичным выводам."},
    {image:"im03.jpg", text:"С тех пор идея услышать 'зеленых человечков' будоражит умы учёных, вслушивающихся в дальний космос."},
    {image:"im04.jpg", text:"1971 год, финансирование поиска внеземных цивилизаций берет на себя NASA. Проект получает название SETI (Search for Extraterrestrial Intelligence)"},
    {image:"im05.jpg", text:"Сейчас это тысячи радиотелескопов профессиональных и любительских, объединенных в общую сеть."},
    {image:"im06.jpg", text:"Распределенные вычисления. Сотни петабайт информации. Но вселенная молчит."},
    {image:"im07.jpg", text:"Так считает обыватель."},
    {image:"im08.jpg", text:"Также было принято считать в узких кругах посвященных..."},
    {image:"im09.jpg", text:"До 18 марта 2012 года! В этот день один из телескопов, направленный на двойную систему Альфа Рыб получил отчётливый сигнал, длившийся несколько минут. Не было никаких сомнений, что сигнал имеет искуственную природу."},
    {image:"im10.jpg", text:"Это была сенсация мирового масштаба, но персонал лабораторий заключил соглашение сокрыть открытие до тех пор пока не будет четкого убеждения в безопасности контакта с цивилизацией на той стороне."},
    {image:"im11.jpg", text:"Колоборация учёных шифровальщиков и лингвистов совместно всё лето жаркого 2012го работала над расшифровкой сигнала."},
    {image:"im12.jpg", text:"Сообщение несло в себе только требование связаться с одной избранной человеческой особью женского пола."},
    {image:"im13.jpg", text:"Был назначен ответственный за связь, 25 го октября он вышел на контакт с той самой землянкой."},
    {image:"im14.jpg", text:"То была идеальная девушка. Лучшая из землянок!"},
    {image:"im15.jpg", text:"Между парнем и девушкой завязались отношения."},
    {image:"im16.jpg", text:"Дальнейшее развитие с инопланетянами история получила в начале 2018 го года, когда ответственный за контакт неведомым образом получил дальнейшие инструкции во сне."},
    {image:"im17.jpg", text:"Развитая цивилизация посвященных сообщала о том, что контактер и девушка избраны в качестве последний представителей земной цивилизации. 66й по счету, родившейся в млечном пути. "},
    {image:"im18.jpg", text:"Они будут её представителями и хранителями истории земной цивилизации, в галактической библиотеке."},
    {image:"im19.jpg", text:"В скором времени они будут эвакуированы с планеты 'Земля'. Им разрешено взять с собой не более 10 человек кровных родственников, кота, собаку и шиншиллу."},
    {image:"im20.jpg", text:"Затем планета Земля будет подвергнута нейтронной бомбардировке и рекультивации."},
    {image:"im21.jpg", text:"Я люблю тебя!"},
    {image:"im22.jpg", text:"С Днём Рождения!!!"},
    {image:"im23.jpg", text:"Смерть всем остальным челавекам)))))) А ты - космос!!"}
];

var current;

var ini = function () {
    current = 0;
    show(current);
};

function next(){
    if (current === (data.length-1)) return;
    current++;
    show(current);
}
function prevous(){
    if (current === 0) return;
    current--;
    show(current);
}
function show(i){
    //alert("i:" + i + ":" + data[i].image);
    var msg = document.querySelector("#msg");
    var im = document.querySelector("#im");
    msg.innerHTML = data[i].text;
    im.src = data[i].image;
}