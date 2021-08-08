const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//refs
const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

//need-to-use functions
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBodyColor = function () {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
};

//init function
const startBtnAction = function (e) {
  //start interval and remove event listener from start btn
  const intervalID = setInterval(changeBodyColor, 1000);
  btnStart.removeEventListener('click', startBtnAction);

  //start listen to stop btn ///
  const stopBtnAction = function (e) {
    //...and if 'click' happened -> delete interval and listen to the start btn
    clearInterval(intervalID);
    btnStart.addEventListener('click', startBtnAction);
    btnStop.removeEventListener('click', stopBtnAction);
  };

  btnStop.addEventListener('click', stopBtnAction);
};

btnStart.addEventListener('click', startBtnAction);
