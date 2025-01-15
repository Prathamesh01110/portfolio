AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/ef.png",
    place: "Elite Forums",
    time: "(Apr - Jun, 2024)",
    

    desp: "<li>Developed a super admin panel, optimized website performance (5x faster load speeds), and collaborated on features for seamless UX using React, Node.js, TypeScript, and Firebase.</li> <li>Delivered engaging web development courses, updated comprehensive materials, and mentored students to build strong technical foundations.</li>",
  },
  {
    title: "co-founder & CTO",
    cardImage: "assets/images/experience-page/erpx.jpeg",
    place: "ERPX",
    time: "(Aug - Dec, 2024)",
    desp: "<li> Founded ERPXStudio, a startup focused on building ERP systems that users can create effortlessly through simple prompts.</li><li>Developed innovative, ground-relevant features to streamline processes and redefine business management.</li>",
  },
  {
    title: "Team Lead",
    cardImage: "assets/images/experience-page/iitb.jpeg",
    place: "Ecell, IIT Bombay",
    time: "(Sep - Oct, 2024)",
    desp: "<li>Led a team to pitch and refine a unique business idea, advancing through Zonal Rounds to Eureka 2024 Semifinals.</li><li>Outperformed 25,000+ participants, showcasing entrepreneurial skills and strategic problem-solving.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Team Leader",
    subtitle: "SIH'24 , Finalist",
    image: "assets/images/experience-page/sih.jpeg",
    desp: "<li>Led the Data Minds team representing SJCEM to the SIH 2024 Finals, competing on a national stage among India’s brightest minds.</li><li>Worked tirelessly on a problem statement for the Department of Posts, Ministry of Communication, showcasing innovative solutions at KCG College.</li><li>Gained valuable experience, setting the stage for future success.</li>",
  },
  {
    title: "Hackathon Winner",
    subtitle: "WebCade 2024 at SJCEM, 12-hour",
    image: "assets/images/experience-page/winning1.png",
    desp: "<li>Led a team with Aditya Murali Mohan and Aniket Giri to win the Webcade Hackathon, outshining 45 teams in a 12-hour coding challenge.</li><li>Leveraged insights gained from MegaHack 4.0 to drive success through strong teamwork, strategic problem-solving, and determination.</li>",
  },
  {
    title : "Hackathon Participant",
    subtitle: "MegaHack 4.0",
    image: "assets/images/experience-page/hackathon.jpeg",
    desp: "<li>Gained valuable insights and personal growth during my first hackathon, discovering untapped potential in a 24-hour coding challenge.</li><li>Embraced the journey with a commitment to return stronger, armed with newfound knowledge and ready for future challenges.</li>"
  }
];




const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${image}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${subtitle}</span><br>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
