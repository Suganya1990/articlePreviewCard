const share = document.querySelector('.article__share');

const author = document.querySelector('.article__avatar');
const authorInfo = document.querySelector('.article__author');
const shareHover = document.querySelector('.article__share--hover')




share.onmouseover = () =>{
    author.style.display = 'none';
    authorInfo.style.display = 'none';
    shareHover.style.display = 'flex-block'

}

share.onmouseout = ()=>{
    author.style.display = 'block';
    authorInfo.style.display = 'block';
    shareHover.style.display = 'none'
}