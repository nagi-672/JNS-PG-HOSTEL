const upArrow = document.getElementById("upArrow");
window.onscroll = function()
{
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        upArrow.style.display = "block";
    } else {
        upArrow.style.display = "none";
    }
};
 
upArrow.onclick = function ()
{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};