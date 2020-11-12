const share = document.querySelector('.article__share');

const author = document.querySelector('.article__avatar');
const authorInfo = document.querySelector('.article__author');
const shareHover = document.querySelector('.article__share--hover')
var w ;


function getSize(){ w = document.documentElement.clientWidth; console.log(w)}



share.onmouseover = () =>{
    
    
 if (w < 1028)   {
    author.style.display = 'none';
    authorInfo.style.display = 'none';
    shareHover.style.display = 'flex';
    share.style.background = "hsl(214, 17%, 51%)"
    share.style.fill = "white"

 }
 else{
    author.style.display = 'block';
    authorInfo.style.display = 'block';
    shareHover.style.display = 'flex'
   
   
 }

}

share.onmouseout = ()=>{
    if (w < 1028)   {
        author.style.display = 'block';
        authorInfo.style.display = 'block';
        shareHover.style.display = 'none'
    }
    else{
        author.style.display = 'block';
        authorInfo.style.display = 'block';
        shareHover.style.display = 'none';
        share.style.background = "hsl(214, 17%, 51%)"
        share.style.fill = "white"
    
    }
}