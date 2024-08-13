import React, { useEffect } from "react";
import flo from "../../assets/images/flo.png";
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
        I'm a Fullstack Software Engineer based in NYC. I enjoy watching anime
        on my down time and learning new technology when ever in not working. My
        core skill is based on JavaScript and I love to do most of the things
        using JavaScript. I am available for any kind of job opportunity that
        suits my skills and interests.
        <br />
        <br />
        I served nine years in the Army of The United States of America which
        has instilled in me discipline and work ethic that is second to none. I
        look forward to applying my skills and work ethic in every single
        project and job offer.
        <br />
        <br />
        Currently I am an undergrade at BMCC pursuing my Computer Science
        degree.
      </p>
      <section className={styles.work}>
        <h3 className={styles.subHeadText}>Work Experience</h3>
        <p>
          Despite not having any work experiance in this field at the moment, I
          do have coding experiance and I encourage you to check them out under
          the projects tab.
          <em>
            All great Software Engineers started with zero working experiance.
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
