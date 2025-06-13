function setupOpenLetter(e)
{
    e.addEventListener("click", () => { setTimeout( () =>
        {
            e.style.transform = "translate(0, -100%)";
            e.style.opacity = "0";
        }, 100)})
}


function setupCardChanges(left_card, right_card, pictures, titles, subtitles, right_content)
{
    const l_style = left_card.style;
    // const r_style = right_card.style;
    const r_card_content = right_card.querySelector(".letter-r-card-container");


    left_card.addEventListener("click", () =>
    {
        const animation_duration = 1;

        l_style.animation = "none";

        setTimeout( () =>
        {
            l_style.transitionDuration = `${animation_duration}s`;
            l_style.transform = "rotateY(90deg)";

            r_card_content.style.transitionDuration = `${animation_duration}s`;
            r_card_content.style.opacity = 0;
        }, 100);


        pictures.current = pictures.current < pictures.src.length-1 ? pictures.current+1 : 0;
        titles.current = titles.current < titles.src.length-1 ? titles.current+1 : 0;
        subtitles.current = subtitles.current < subtitles.src.length-1 ? subtitles.current+1 : 0;
        right_content.current = right_content.current < right_content.src.length-1 ? right_content.current+1 : 0;


  

        setTimeout( () =>
        {
            left_card.getElementsByTagName("img")[0].src = pictures.src[pictures.current];
            left_card.querySelector(".person-name").innerHTML = titles.src[titles.current];
            left_card.querySelector(".person-subtitle").innerHTML = subtitles.src[subtitles.current];
            r_card_content.innerHTML = right_content.src[right_content.current]

            l_style.transitionDuration = `${animation_duration}s`;
            l_style.transform = "rotateY(0deg)";

            
            r_card_content.style.opacity = 1;
            
        }, animation_duration*1000+100);
    });
}
