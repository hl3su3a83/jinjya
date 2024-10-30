const omikuji = [
    { luck: "大吉", message: "今天的运气非常好！", advice: "努力不懈，成果丰硕。" },
    { luck: "吉", message: "顺利发展的一天。", advice: "把握机会。" },
    { luck: "中吉", message: "事情会有好转。", advice: "耐心等待。" },
    { luck: "小吉", message: "有些小阻碍，但总体不错。", advice: "保持乐观。" },
    { luck: "凶", message: "今天需要小心行事。", advice: "避免风险，低调行事。" },
];

const drawButton = document.getElementById("drawButton");
const luckDisplay = document.getElementById("luck");
const messageDisplay = document.getElementById("message");
const adviceDisplay = document.getElementById("advice");

drawButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * omikuji.length);
    const selectedOmikuji = omikuji[randomIndex];

    luckDisplay.textContent = `运势：${selectedOmikuji.luck}`;
    messageDisplay.textContent = `签文：${selectedOmikuji.message}`;
    adviceDisplay.textContent = `建议：${selectedOmikuji.advice}`;
});