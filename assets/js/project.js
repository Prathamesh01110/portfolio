AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "AI Agent",
    cardImage: "assets/images/project-page/ui.png",
    description: "Built an AI agent with Next.js, DataStax Astra DB, and Langflow to turn social media data into real-time insights. Overcame integration challenges for seamless performance and workflow.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: " socially-snowy.vercel.app",
    Githublink: "https://github.com/Prathamesh01110/socially",
  },
  {
    title: "Fine-tuning BERT",
    cardImage: "assets/images/project-page/BERT.jpeg",
    description: "Fine-tuned a BERT model to detect hate comments on YouTube, achieving 91% accuracy after training on 10 epochs.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/Prathamesh01110/Bert-Finetuning",
    Githublink: "https://github.com/Prathamesh01110/Bert-Finetuning",
  },
  {
    title: "Neural Optimization",
    cardImage: "assets/images/project-page/nn.png",
    description: "Developed neural networks using advanced optimization techniques, with a focus on improving model performance and visualizing the results for better insights.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://github.com/Prathamesh01110/AIML_Dev",
    Githublink: "https://github.com/Prathamesh01110/AIML_Dev",
  },
  {
    title: "SIH Finalist Project",
    cardImage: "assets/images/project-page/sih2.png",
    description: "Developed a solution for a challenge from the Department of Posts during SIH 2024. Focused on innovative problem-solving and collaboration, leading to valuable insights despite not winning.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://github.com/Prathamesh01110/SIH-1754",
    Githublink: "https://github.com/Prathamesh01110/SIH-1754",
  },
  {
    title: "WhatsApp's Clone",
    cardImage: "assets/images/project-page/realtime.png",
    description: "Built a real-time chat application using React, replicating WhatsApp's core features for seamless communication and instant messaging.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "https://github.com/Prathamesh01110/Realtime-Chat-APP",
    Githublink: "https://github.com/Prathamesh01110/Realtime-Chat-APP",
  },
  {
    title: "Payment Clone",
    cardImage: "assets/images/project-page/paytm.png",
    description:
      "Developed a Paytm clone using the MERN stack, enabling credit and debit transactions between accounts with session-based authentication for secure demo functionality.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/Prathamesh01110/web_Dev",
    Githublink: "https://github.com/Prathamesh01110/web_Dev",
  },
  {
    title: "Quizzlet App",
    cardImage: "assets/images/project-page/quiz.png",
    description:
      "Transforms documents into interactive content with AI expert bots, quizzes, and summaries. Enhances learning through engaging and AI-driven experiences.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://github.com/Prathamesh01110/quizz",
    Githublink: "https://github.com/Prathamesh01110/quizz",
  },
  {
    title: "SpriteGen",
    cardImage: "assets/images/project-page/pip.png",
    description: "A Python script that combines multiple images into a single grid and generates corresponding CSS sprite classes, optimizing web development workflows.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://github.com/Prathamesh01110/combined-image-and-css-generator",
    Githublink: "https://github.com/Prathamesh01110/combined-image-and-css-generator",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, description, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat; ">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                <h1 class="description">${description}</h1> 
                </div>      
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
