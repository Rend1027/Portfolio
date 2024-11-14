import React, { useEffect } from "react";
import flo from "../../assets/images/flo(1).png";
import styles from "./About.module.css";

const About = () => {
  const workExperience = [
    {
      id: 1,
      title: "React Developer",
      company: "FullStack Academy",
      description: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      date: "April 2023 - July 2023",
      logo: flo,
    },
    {
      id: 2,
      title: "React Developer",
      company: "FullStack Academy",
      description: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      date: "April 2023 - July 2023",
      logo: flo,
    },
    {
      id: 3,
      title: "React Developer",
      company: "FullStack Academy",
      description: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      date: "April 2023 - July 2023",
      logo: flo,
    },
    {
      id: 4,
      title: "React Developer",
      company: "FullStack Academy",
      description: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      date: "April 2023 - July 2023",
      logo: flo,
    },
    // Additional experiences can be added here
  ];

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll(
        `.${styles.timelineItem}`
      );
      timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const icon = item
          .closest(`.${styles.timelineBlock}`)
          .querySelector(`.${styles.timelineIcon}`);

        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          item.classList.add(styles.inView);
          if (icon) {
            icon.classList.add(styles.inView);
          }
        } else {
          item.classList.remove(styles.inView);
          if (icon) {
            icon.classList.remove(styles.inView);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger the scroll event on load to check the initial position
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.greeting}>
        Hello, I'm Florencio but you can call me Flo
      </h1>
      <p className={styles.intro}>
        I'm a Full Stack Software Engineer based in NYC with a core focus on
        JavaScript. While JavaScript is my primary language, I am always eager
        to explore new languages. I am open to new opportunites and to work with
        you in the near future.
        <br />
        <br />
        I proudly served nine years in the United States Army where I developed
        the discipline and work ethic that I now bring to every project. From my
        early days as a Private learning to follow orders to my role as a
        Sergeant leading a team of soldiers, I've honed principles of
        leadership, dedication, and teamwork. I’m eager to apply these same
        principles in the tech field and look forward to the opportunity to work
        and grow together.
        <br />
        <br />
        Currently I am an undergrade at BMCC pursuing my Computer Science
        degree. In my downtime, I enjoy watching anime and make it a priority to
        stay active, sitting is the new smoking after all.
      </p>
      <section className={styles.work}>
        <h3 className={styles.subHeadText}>Work Experience</h3>
        <p className={styles.text}>
          While I am currently building my professional experiance in the field,
          I have honed my skills through a variety of coding projects, which you
          can explore under the Projects tab. Like many great Software
          Engineers, I am eager to translate my coding experience into impactful
          contributions
          <em>
            . Every expert was once a beginner, and I'm excited to grow and
            learn.
          </em>
        </p>
        <div className={styles.timelineContainer}>
          {workExperience.map((experience, index) => (
            <div key={experience.id} className={`${styles.timelineBlock}`}>
              <div className={styles.timelineIcon}>
                <img src={experience.logo} alt="flo" />
              </div>
              <div
                className={`${styles.timelineItem} ${
                  index % 2 === 0 ? styles.left : styles.right
                }`}
              >
                <div className={styles.timelineContent}>
                  <h3 className={styles.cardHeader}>{experience.title}</h3>
                  <p className={styles.cardCompany}>{experience.company}</p>
                  <ul className={styles.listContainer}>
                    {experience.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <span className={styles.cardDate}>{experience.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
