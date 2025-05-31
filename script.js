














const token = "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"
const username = 'MarcelloTar'
async function fetchRepos(){
   const url = `https://api.github.com/users/${username}/repos`;

   try {
      const response =  await fetch(url, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });

      if (!response.ok){
         alert(`Error: ${response.status}`);
         throw new Error(`Error: ${response.status}`);
      }

      const repos = await response.json();

      console.log(repos);
      let i = 1;
      repos.forEach(repo => {
         if (repo.description && repo.topics.includes('done')) {
            console.log(repo);
            
            let data = new Date(repo.updated_at);
            const container_with_projects = document.querySelector('.work_conteiner');
            // const box_project = document.createElement('div');
            // box_project.classList.add('box_project');
            let imgUrl = fetchReadme(repo.owner.login, repo.name)
            console.log(imgUrl);
            
            container_with_projects.innerHTML += `
                <div class="container">
                 <img src="img/project.png" alt="Аватар" class="image">
                    <div class="overlay">
                        <p class="work_description">${repo.description}</p>
                        <p class="work_header">${repo.name}</p>
                    </div>
                </div>
            `;
            // container_with_projects.appendChild(box_project);
         }
      })

   } catch(error) {
      console.error("Error:", error);
      
   };
}
fetchRepos();




function fetchReadme(owner, repo){
   const url = `https://api.github.com/repos/${owner}/${repo}/readme`

   fetch(url, {
      headers: {
         Authorization: `Bearer ${token}`
      }
   })
   .then(response => response.json())
   .then(data => {
      if(data.content == null){
         return
      }
      const decode = atob(data.content);
      // console.log(decode);
      const mdImages = [...decode.matchAll(/!\[.*?\]\((.*?)\)/g)].map(m => m[1]);
      console.log(mdImages);

      let relative_path = mdImages[0];
      if(mdImages.length > 0){
         relative_path = relative_path.slice(1);
         console.log(relative_path);
      }
      

       
      const imgUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${relative_path}`
      console.log(imgUrl);
    //   return 'hello world'
    //   getImg(imgUrl);
      
   })

   // console.log(url);
   
}

function getImg(url){
//    let box = document.querySelector('.repo-item');
//    box.innerHTML += `<img src="${url}">`;
    // let srcImg = url;
    // return srcImg
    // let newImg = document.createElement('img');
    // newImg.src = url
    // newImg.classList.add('image')
    // let overlay = document.querySelector('.overlay');
    // let overlayParent = overlay.parentNode;
    // overlayParent.insertBefore(newImg, overlay)
    console.log(url);
    
}



//  async function fetchUser() {
//    const url = `https://api.github.com/users/${username}`;

//    try {
//       const response = await fetch(url, {
//          headers: {
//             Authorization: `Bearer ${token}`
//          }
//       });

//       if (!response.ok) {
//          throw new Error(`Error: ${response.status}`);
//       }

//       const user = await response.json();
//       console.log(user);
      
      
//       const userInfoDiv = document.getElementById("user-info");


//       userInfoDiv.innerHTML = `
//          <h2>${user.name || "No name"}</h2>
//          <p><strong>Username:</strong>${user.login}</p>
//          <p><strong>Bio:</strong>${user.bio}</p>
//          <img src="${user.avatar_url}" alt="" style="width: 100px; border-radius: 50%;">
//       `;

//    } catch (error) {
//       console.error("Error:", error);
      
//    };
// }

// fetchUser();
















const educationQualification = document.querySelector('#educationQualification');
const shortCourse = document.querySelector('#shortCourse');
const detailsBtn = document.querySelector('#details');
const buttons = document.querySelectorAll('.section2_about_right_button button')
const select = document.querySelector('select');

function activeInfo(text, num = null) {
    const aboutInfo = document.querySelector('.section2_about_right_info');
    aboutInfo.innerHTML = '';
    aboutInfo.innerHTML = text
    if (num !== null) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active')
        }
        buttons[num].classList.add('active')
    }
   
}

let cours = `
     <div class="section2_about_right_info_box">
        <h2> Creator IT Academy</h2>
        <p>cours:  Creator IT Academy: WEB Developer</p>
        <p>Session: 2024 - ?</p>
    </div>
`
let education = `
    <div class="section2_about_right_info_box">
        <h2>graduation from 9th grade</h2>
        <p>school: school number 9</p>
        <p>Session: ? - 2023</p>
    </div>
    <div class="section2_about_right_info_box">
        <h2>high school graduation</h2>
        <p>school: Boryslav Vocational Lyceum</p>
        <p>Session: 2023 - ?</p>
    </div>
`

let details = `
    <div class="section2_about_right_info_box">
        <p><span class='colorBlue'>Birthday</span>: 1 february 2007</p>
        <p><span class='colorBlue'>E-mail</span>: tarasenko.marko2007@gmail.com</p>
        <p><span class='colorBlue'>Phone</span>: +380 5345 534 345</p>
    </div>
`

shortCourse.addEventListener('click', function(){
    activeInfo(cours, 1)
})
educationQualification.addEventListener('click', function(){
    activeInfo(education, 0)
})
detailsBtn.addEventListener('click', function(){
    activeInfo(details, 2)
})

select.addEventListener('change', () => {
    selectInfo(select.value, 'details', details)
    selectInfo(select.value, 'education', education)
    selectInfo(select.value, 'cours', cours)
})

function selectInfo(selects, text, variable) {
    if (selects == text) {
        activeInfo(variable)
    }
}










                    //     <div class="work_content">
                    //         <div class="work_content_left">
                    //             <img src="img/project.png" alt="">
                    //         </div>
                    //         <div class="work_content_right">
                    //             <h2>portfolio</h2>
                    //             <p class="work_content_right_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit officia aliquam aut sit commodi ipsam! Suscipit rem architecto in quia reiciendis? Consequuntur voluptatum, dicta repudiandae sint corporis tempore pariatur!</p>
                    //             <div class="work_content_right_technologist">
                    //                 <p>html</p>
                    //             </div>
                    //             <div class="work_content_right_size">
                    //                 <a href="">
                    //                     <img src="img/icons/link.svg" alt="">
                    //                 </a>
                    //                 <a href="">
                    //                     <img src="img/icons/github.svg" alt="">
                    //                 </a>
                    //             </div>
                    //         </div>
                    //    </div>
                    //    <div class="work_content">
                    //         <div class="work_content_left">
                    //             <img src="img/project.png" alt="">
                    //         </div>
                    //         <div class="work_content_right">
                    //             <h2>portfolio</h2>
                    //             <p class="work_content_right_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit officia aliquam aut sit commodi ipsam! Suscipit rem architecto in quia reiciendis? Consequuntur voluptatum, dicta repudiandae sint corporis tempore pariatur!</p>
                    //             <div class="work_content_right_technologist">
                    //                 <p>html</p>
                    //             </div>
                    //             <div class="work_content_right_size">
                    //                 <a href="">
                    //                     <img src="img/icons/link.svg" alt="">
                    //                 </a>
                    //                 <a href="">
                    //                     <img src="img/icons/github.svg" alt="">
                    //                 </a>
                    //             </div>
                    //         </div>
                    //    </div>
                    //    <div class="work_content">
                    //         <div class="work_content_left">
                    //             <img src="img/project.png" alt="">
                    //         </div>
                    //         <div class="work_content_right">
                    //             <h2>portfolio</h2>
                    //             <p class="work_content_right_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui impedit officia aliquam aut sit commodi ipsam! Suscipit rem architecto in quia reiciendis? Consequuntur voluptatum, dicta repudiandae sint corporis tempore pariatur!</p>
                    //             <div class="work_content_right_technologist">
                    //                 <p>html</p>
                    //             </div>
                    //             <div class="work_content_right_size">
                    //                 <a href="">
                    //                     <img src="img/icons/link.svg" alt="">
                    //                 </a>
                    //                 <a href="">
                    //                     <img src="img/icons/github.svg" alt="">
                    //                 </a>
                    //             </div>
                    //         </div>
                    //    </div>

