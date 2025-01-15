/*Research Details Table*/

const researchTable = document.querySelector(".main");
const exposureToTable = document.querySelector(".exposure");

const research = [
  {
    "title": "Web Development:",
    "authors": 
      "• Expertise in building scalable, high-performance web applications using Next.js.",
    "authors1": 
      "• Proficient in crafting responsive, user-focused interfaces with HTML5, CSS3, Bootstrap, and Tailwind CSS.",
    "authors2": 
      "• Skilled in MERN stack development, including REST APIs and Role-Based Access Control (RBAC).",
    "authors3": 
      "• Experienced in API integration, backend logic, and performance optimization for web applications.",
    "conferences": "",
    researchYr:{link1: "https://img.icons8.com/fluency/48/html-5.png",
                link2 :  "https://img.icons8.com/color/48/css3.png",
                link3:"https://img.icons8.com/color/48/javascript--v1.png",
                link4: "https://img.icons8.com/color/48/mongodb.png",     
                link5: "https://img.icons8.com/office/40/express-js.png",
                link6: "https://img.icons8.com/officel/40/react.png", 
                link7: "https://img.icons8.com/fluency/48/node-js.png",
                link8: "https://img.icons8.com/fluency-systems-filled/50/nextjs.png"
  },

  citebox: "popup1",
    image: "assets/images/research-page/MERNforapp.jpg",
    citation: {
      properlink: "https://github.com/pratahmesh/web_Dev",
      vancouver:
        "GITHUB REPO",
    },
    
    abstract:
      "I aim to craft digital landscapes that seamlessly integrate AI/ML technologies, fostering meaningful interactions and experiences through the art of web development serves as a bridge",
    absbox: "absPopup1",
  },
  
  {
    title: "APP Development:",
    authors:
      "• I've gained valuable experience building mobile apps using React Native and Flutter for hackathons and personal projects.",
    authors1:
      "• Developing cross-platform mobile applications using frameworks like React Native and Flutter.",
    authors2:
      "",
    authors3:
      "",
    conferences:
      "",
    researchYr:{link1 :  "https://img.icons8.com/officel/40/react.png",
                link2:"https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-flutter-is-an-open-source-mobile-application-development-framework-created-by-google-logo-color-tal-revivo.png",
                link3: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-shadow-tal-revivo.png",
              },

  citebox: "popup2",
    image: "assets/images/research-page/appdev.png",
    citation: {
      properlink: "https://github.com/pratahmesh/App_Dev",
      vancouver:
        "GITHUB REPO",
    },
    
    abstract:
      "Enthusiastically exploring emerging trends and best practices in mobile application development.",
    absbox: "absPopup2",
  },
  {
    "title": "Artificial Intelligence and Machine Learning:",
    "authors": 
      "• Solid understanding of AI and ML fundamentals with hands-on experience in practical applications.",
    "authors1": 
      "• Developed an AI agent and fine-tuned a BERT model for advanced NLP tasks.",
    "authors2": 
      "• Built a custom neural network for classification, showcasing expertise in deep learning.",
    "authors3": 
      "• Continuously learning through online courses, tutorials, and personal projects to enhance AI and ML skills.",
    "conferences": "",  
    researchYr:{link1: "https://docs.langflow.org/img/langflow-icon-black-transparent.svg",
                link2: "https://media.licdn.com/dms/image/v2/D560BAQEOc-Rr7UaiOA/company-logo_200_200/company-logo_200_200/0/1726862282281/datastax_logo?e=2147483647&v=beta&t=yzjN1NZSpWbgVDT4nqsFSdDRF3IxkdQcNYM8DUgjl-Q",
                link3: "https://img.icons8.com/3d-fluency/94/python.png",
                link4: "https://img.icons8.com/fluency/48/pytorch.png",     
                link5: "https://img.icons8.com/color/48/numpy.png",
                link6: "https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-3d-array-programming-solid-solidglyph-m-oki-orlando.png",
  },

  citebox: "popup3",
    image: "assets/images/research-page/aiml.jpg",
    citation: {
      properlink: "https://github.com/pratahmesh/AIML_Dev",
      vancouver:
        "GITHUB REPO",
    },
    
    abstract:
      "Committed to staying abreast of the latest advancements, I am dedicated to honing my skills in AIML, driven by a passion for innovation and the potential to make meaningful contributions to the field.",
    absbox: "absPopup3",
  },
];



const exposureTo =[
    {
      title: "Blockchain & Web3 :",
      authors:
        "• I understand the core concepts of blockchain technology and Web3",
      authors1:
        "• Peer-to-Peer Networks: Aware of P2P concepts enabling decentralized communication.",
      authors2:
        "• Cryptocurrency Basics: Understands digital currencies and basic transactions.",
      authors3:
        "",
      conferences:
        "",
      researchYr:{link1: "https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-blockchain-cryptocurrency-vitaliy-gorbachev-blue-vitaly-gorbachev-1.png",
                  link2:"https://img.icons8.com/stickers/100/transaction.png",
                  link3 :  "https://img.icons8.com/color/48/ethereum.png",
                  link4: "https://img.icons8.com/color/48/bitcoin.png",
                  link5 :  "https://img.icons8.com/color/48/coinbase.png",
                 
                 
    },
  
    citebox: "popup1",
      image: "assets/images/research-page/eth.png",
      citation: {
        properlink: "https://youtu.be/hfi0eSeqpes",
        vancouver:
          "YouTube Video Link: Blockchain Explained by me ",
      },
      
      abstract:
        "my exploration of blockchain and web3 technologies are Grounded by fundamental knowledge, it reflects my curiosity about these field's essence. Focusing on basic concepts like decentralisation and p2p networks, I aim to understand the broader context without diving into complexities",
      absbox: "absPopup1",
  },
    {
      title: "Competitive Coding with C++ :",
      authors:
        "•  Engage in coding challenges using C++ to sharpen problem-solving skills and enhance algorithmic proficiency.",
      authors1:
        "• Algorithm Efficiency: Prioritize optimizing algorithms for speed and performance to tackle complex problems efficiently.",
      authors2:
        "• Logical Reasoning: Cultivate logical thinking and analytical skills to develop effective solutions to coding challenges.",
      authors3:
        "• Continuous Learning: Embrace a growth mindset and actively seek opportunities to expand knowledge and skills through practice and exploration.",
      conferences:
        "",
      researchYr:{link1: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-codeforces-programming-competitions-and-contests-programming-community-logo-shadow-tal-revivo.png",
                  link2:"https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png",
                  link3 :  "https://img.icons8.com/fluency/48/codechef.png",
                  link4: "https://img.icons8.com/fluency/48/laptop-coding.png",                
    },
  
    citebox: "popup1",
      image: "assets/images/research-page/ccc.png",
      citation: {
        properlink: "https://codeforces.com/profile/prathamesh_01110",
        vancouver:
          "Codeforces Profile: prathamesh_01110",
      },
      
      abstract:
        "I embark on a journey marked by continuous learning and skill refinement. This endeavor involves active participation in coding challenges to sharpen problem-solving abilities.",
      absbox: "absPopup1",
  },
];




AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      authors1,
      authors2,
      authors3,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) => {
      let imgOutput = "";
      Object.keys(researchYr).forEach(function(link) {
        if (researchYr[link] !== "") {
          imgOutput += `<img width="48" height="48" src="${researchYr[link]}" alt="${link}" />`;
        }
      });

      output += `
        <tr data-aos="zoom-in-left"> 
          <td class="imgCol"><img src="${image}" class="rImg"></td>
          <td class="researchTitleName">
            <div class="img-div">
              <span class="imgResponsive">
                <img src="${image}" class="imgRes">
              </span>
            </div>
            <a href="#0" class="paperTitle" style="font-size:28px">${title}</a> 
            <div class="authors">${authors}<br><br>${authors1} <br><br> ${authors2} <br><br> ${authors3}</div>
            <div>${imgOutput}</div>
            <!--CITE BUTTON-->
            
          </td>
        </tr>`;
    }
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);



const fillExposureToData = () => {
  let output = "";
  exposureTo.forEach(
    ({
      image,
      title,
      authors,
      authors1,
      authors2,
      authors3,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) => {
      let imgOutput = "";
      Object.keys(researchYr).forEach(function(link) {
        if (researchYr[link] !== "") {
          imgOutput += `<img width="48" height="48" src="${researchYr[link]}" alt="${link}" />`;
        }
      });

      output += `
        <tr data-aos="zoom-in-left"> 
          <td class="imgCol"><img src="${image}" class="rImg"></td>
          <td class="researchTitleName">
            <div class="img-div">
              <span class="imgResponsive">
                <img src="${image}" class="imgRes">
              </span>
            </div>
            <a href="#0" class="paperTitle" style="font-size:28px">${title}</a> 
            <div class="authors">${authors}<br>${authors1} <br><${authors2} <br> ${authors3}</div>
            <div>${imgOutput}</div>
            <!--CITE BUTTON-->
            
          </td>
        </tr>`;
    }
  );
  exposureToTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillExposureToData);

