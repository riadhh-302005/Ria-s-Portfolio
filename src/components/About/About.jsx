import React from "react";
import ReactTypingEffect from "react-typing-effect";
import profileImage from "../../assets/work_logo/profile1.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans pt-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 w-full">
        
        {/* Left Side */}
        <div className="md:w-1/2 max-w-xl text-center md:text-left">
          
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ria
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["Full-Stack Developer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold"
              cursorRenderer={(cursor) => (
                <span className="text-purple-400">{cursor}</span>
              )}
            />
          </h3>

          {/* About Text */}
          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            I am a passionate full-stack web developer with hands-on experience
            in building modern and scalable web applications.I specialize in
            the MERN stack and enjoy creating responsive with efficient
            backend systems. I have worked on real-world projects involving
            authentication, APIs, and database management. My goal is to 
            develop impactful digital solutions that provide seamless user experiences.
          </p>

          {/* Download CV Button */}
          <a
            href="https://docs.google.com/document/d/1_YDKcO3SFjyhu7rG7W0Pn82av6pA5gMOR7eXofpCk4I/export?format=pdf"
            download="Ria_Dhawan_CV.pdf"
            className="inline-block text-white py-3 px-8 rounded-full mt-4 text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_#8245ec]"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 10px #8245ec, 0 0 20px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full md:w-[500px] lg:w-[600px]">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20"></div>

            {/* Image */}
            <img
              src={profileImage}
              alt="Developer Illustration"
              className="relative w-full h-auto object-contain animate-float"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;