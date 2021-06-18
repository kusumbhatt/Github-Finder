const github = new Github;
const ui = new UI;
// search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) =>{
    const userText = e.target.value;
    if(userText !== '') { 
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {

                }
                else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
            .catch(err=>console.log(err));
    }
    else {
        ui.clearProfile();
    }
});