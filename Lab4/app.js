async function displayPic(date){
    const pic = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + date);
    const display = await pic.json();
    document.querySelector('.info').innerText = display.explanation;
    document.querySelector('img').src = display.url;
}
   
function getDate(){
    const date = document.querySelector('.date').value
    displayPic(date)
}