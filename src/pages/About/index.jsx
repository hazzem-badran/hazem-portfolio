import React from "react";
import MenuButton from "../../components/MenuButton";
import HeadingSection from "../../components/HeadingSection";
import "./style.css";
import Skills from "../../components/Skills";
import { useState } from "react";
import { Link } from "react-router-dom";
import MyImage from "../../assets/images/hazem.png";
import { useMenuStore } from "../../store/useMenuStore";

const About = () => {
  const [education, setEducation] = useState(true);
  const [internShip, setInternShip] = useState(false);
  const [projects, setProjects] = useState(false);

  const { isMenuOpen } = useMenuStore();
  return (
    <section className="style__section" id="about">
      <MenuButton />

      {!isMenuOpen && (
        <div className="about">
          <HeadingSection title="About Me" />

          <div className="about__content">
            <div className="about__img">
              <div className="">
                <img src={MyImage} alt="MyImage" />
              </div>
            </div>

            <div className="about__info">
              <p>
                <strong>I am Hazem Badran</strong>, a dedicated JavaScript and
                TypeScript developer with a fervent enthusiasm for frontend
                development. Over the past two years, I've honed my skills in
                React.js and React Native, crafting robust and scalable
                solutions. I'm deeply passionate about leveraging the power of
                these technologies to create innovative and efficient software
                solutions.
              </p>

              <Skills />

              <>
                <div className="about__tabs">
                  <button
                    className={`tab__item ${education ? "active" : " "}`}
                    onClick={() => {
                      setEducation(true);
                      setInternShip(false);
                      setProjects(false);
                    }}
                  >
                    education
                  </button>
                  <button
                    className={`tab__item ${internShip ? "active" : ""}`}
                    onClick={() => {
                      setInternShip(true);
                      setEducation(false);
                      setProjects(false);
                    }}
                  >
                    Internship
                  </button>
                  <button
                    className={`tab__item ${projects ? "active" : ""}`}
                    onClick={() => {
                      setProjects(true);
                      setInternShip(false);
                      setEducation(false);
                    }}
                  >
                    Projects
                  </button>
                </div>

                <div className="content__container">
                  {education ? (
                    <div className="content">
                      <div className="tab-content active" id="education">
                        <div className="timeline">
                          <div className="timeline-item">
                            <span className="date">2017 – 2023</span>
                            <h4>
                              BSc in Information Systems & Computer Applications
                              <span> – Al-Quds Open University</span>
                            </h4>
                            <p>
                              Focused on software development, databases, system
                              analysis, AI, and web technologies. Built strong
                              foundations in programming, problem-solving, and
                              IT project management.
                            </p>
                            <a
                              href="https://www.qou.edu/"
                              target="_blank"
                              className="text-blue-600 underline"
                            >
                              University Website
                            </a>
                          </div>

                          <div className="timeline-item">
                            <span className="date">2019-2022</span>
                            <h4>
                              <span>Ras Al-Naqoura School</span>
                            </h4>
                            <p>
                              During my studies at Ras Al-Naqoura School within
                              the CAN program, I focused not only on the
                              academic side but also significantly developed my
                              personal skills. I learned the importance of
                              effective communication, teamwork, and critical
                              thinking, and participated in activities that
                              enhanced my presentation and public speaking
                              skills. This program helped me build a strong
                              foundation in Information Technology, along with
                              the development of soft skills, which I consider
                              to be an essential part of my academic and
                              professional success.
                            </p>
                            <a href="https://www.facebook.com/naqurasecondaryschool">
                              School page
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : internShip ? (
                    <div className="tab-content active" id="education">
                      <div className="timeline">
                        <div className="timeline-item">
                          <span className="date">05/2024 – 06/2024</span>
                          <h4>
                            Full stack node js -<span>Areisto Software</span>
                          </h4>
                          <p>
                            Successfully completed an intensive program in
                            React.js, Next.js, Node.js, and MongoDB using
                            Agile/Scrum methodologies. Despite severe wartime
                            conditions including constant power outages and
                            internet disruptions, I emerged as one of the
                            top-performing trainees in the program.
                            <br />
                            <a href="https://www.linkedin.com/company/areisto">
                              Company LinkedIn
                            </a>
                          </p>
                        </div>
                        <div className="timeline-item">
                          <span className="date">05/2023 – 08/2023</span>
                          <h4>
                            Advanced Reactjs and Javascript Intern -{" "}
                            <span>Gaza Sky Geeks</span>
                          </h4>
                          <p>
                            During my internship, I immersed myself in ReactJS,
                            Next.js, and advanced JavaScript, refining my
                            ability to develop dynamic and responsive user
                            interfaces. Through practical projects and
                            mentorship, I gained invaluable experience using
                            React.js and Next.js to create efficient and
                            scalable web applications. Additionally, I delved
                            into advanced JavaScript concepts, broadening my
                            technical expertise. I also learned to use Git and
                            GitHub, further enhancing my skills in version
                            control and collaborative development.
                            <br />
                            <a href="https://www.linkedin.com/company/gaza-sky-geeks/">
                              Company LinkedIn
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : projects ? (
                    <div className="tab-content active" id="education">
                      <div className="timeline">
                        <div className="timeline-item">
                          <h4 className="date">
                            Areisto – Company Portfolio Website
                            <span> </span>
                          </h4>
                          <p>
                            I worked on designing and developing the official
                            website for Areisto during my internship with the
                            company. The goal of the website was to showcase the
                            company’s services and projects.
                            <br />
                            Used: React.js, Next js, TypeScript, Tailwind CSS, Framer Motion, Redux
                            
                          </p>

                          <a href="https://areisto-portfolio.vercel.app"className="btn" >
                            Link
                          </a>
                        </div>
                      </div>

                      <div className="timeline">
                        <div className="timeline-item">
                          <h4 className="date">
                            E-commerce API : <span>Nodejs and Expressjs</span>{" "}
                          </h4>
                          <p>
                            In our E-commerce API project, I spearheaded the
                            implementation of advanced features using Express.js
                            to create a robust solution for online payments.
                            Integrating various payment gateways securely, I
                            optimized API endpoints for speed and scalability,
                            ensuring seamless transactions.
                          </p>
                          <a href="https://github.com/z4dev/e-commerce-api">
                            review code
                          </a>
                        </div>
                      </div>

                      <div className="timeline">
                        <div className="timeline-item">
                          <h4 className="date">
                            CRUD Task Manager : <span>Laravel APIs</span>
                          </h4>
                          <p>
                            Laravel CRUD Task Management simplifies task
                            organization with essential CRUD operations.
                            Developed during my internship at Eagle Owl Tech,
                            users can create, read, update, and delete tasks
                            effortlessly. It features user authentication, task
                            categorization, and search/filter functionality.
                            Built on Laravel, it offers a responsive interface
                            and follows MVC architecture for scalability and
                            maintainability, enhancing productivity.
                            <a href="https://github.com/z4dev/intern01-laravel">
                              review code
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="timeline">
                        <div className="timeline-item">
                          <h4 className="date">
                            CRUD Task Manager : <span>Laravel APIs</span>
                          </h4>
                          <p>
                            Laravel CRUD Task Management simplifies task
                            organization with essential CRUD operations.
                            Developed during my internship at Eagle Owl Tech,
                            users can create, read, update, and delete tasks
                            effortlessly. It features user authentication, task
                            categorization, and search/filter functionality.
                            Built on Laravel, it offers a responsive interface
                            and follows MVC architecture for scalability and
                            maintainability, enhancing productivity.
                            <a href="https://github.com/z4dev/intern01-laravel">
                              review code
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="btns">
                  <a
                    href="https://drive.google.com/file/d/1pqJjCnwkSoZQ4yvW9vdNOB0Bzrf7Nu7I/view"
                    className="btn"
                  >
                    see my cv
                  </a>
                  <Link to="/contact" className="btn link-item">
                    Contact me
                  </Link>
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;

// أنا حازم بدران، مطوّر JavaScript وTypeScript متخصّص في React.js وReact Native، شغوف ببناء واجهات مستخدم مميزة وتجارب رقمية استثنائية.
// خلال العامين الماضيين، عملت على تطوير تطبيقات متكاملة تجمع بين الأداء العالي والتصميم العصري، مع التركيز على كتابة كود نظيف وقابل للتوسّع.
// أؤمن أن البرمجة ليست مجرد أكواد، بل وسيلة لحل المشكلات وصناعة تأثير حقيقي. ولهذا أسعى باستمرار لتطوير مهاراتي، ومواكبة أحدث التقنيات في عالم الويب والموبايل.

// أسعى لأن أكون جزءًا من مشاريع تترك بصمة وتلهم الآخرين.
