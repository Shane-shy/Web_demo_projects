const customName = document.getElementById("customName");
const story = document.getElementsByTagName("p")[0];
const btn = document.getElementsByTagName("button")[0];//不是通过ID获取的元素，结果都是HTMLCollection，需要像数组一样去选择



let storyText = '今天气温 35 摄氏度，:insertx:出门散步。当走到:inserty:门前时，突然就:insertz:。人们都惊呆了，李雷全程目睹但并没有慌，因为:insertx:是一个 140 公斤的胖子，天气又辣么热。';
let insertX = ['怪兽威利', '大老爹', '圣诞老人'];
let insertY = ['肯德基', '迪士尼乐园', '白宫'];
let insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一只鼻涕虫爬走了'];

function randomize(array) {
    return array[Math.floor(Math.random() * array.length)];
}

btn.addEventListener("click", result);

function result() {
    let x = randomize(insertX);
    let y = randomize(insertY);
    let z = randomize(insertZ);

    let newStory = storyText.replaceAll(":insertx:", x);
    newStory = newStory.replace(":inserty:", y);
    newStory = newStory.replace(":insertz:", z);
    if (customName !== null) {
        newStory = newStory.replace("李雷", customName.value);
    }
    if (document.getElementById("a_metric").checked) {// 选择美制
        newStory = newStory.replace(" 35 摄氏度", " 95 华氏度").replace("140 公斤", "309 磅")
    }
    story.textContent = newStory;
    story.style.visibility = "visible";
}
