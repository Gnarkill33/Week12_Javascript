const userName = document.querySelector('.userName');
const userPic = document.querySelector('.userPic');
const userComment = document.querySelector('.userComment');
const chat = document.querySelector('.chat');
const postCommentButton = document.querySelector('.postCommentButton');



const checkSpam = () => {

// Передать имя
    const chatUserName = userName.value;
    const chatUserPic = userPic.value;
    const chatUserComment = userComment.value;
    const chatUserNameChanged = chatUserName[0].toUpperCase() + chatUserName.slice(1).toLowerCase();

// Вставить картинку
    const img = document.createElement('img');
    img.src = chatUserPic;
    const container = document.querySelector('.container');
    container.append(img);


// Спам фильтр
    const comment1 = 'buy ViAgRA now';
    const newComment1 = comment1.replace(/ViAgRA/i, "***");
    const comment2 = 'free xxx';
    const newComment2 = comment2.replace ('xxx', "***");
    const comment3 = 'innocent rabbit';
    const newComment3 = comment3.replace ('xxx', "***");

    chat.textContent = `${chatUserNameChanged}\n${newComment2}`;
}

postCommentButton.addEventListener('click', checkSpam);