import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section bg-white text-black" id="about">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/ik.jpeg"
                alt="Igmhar Sánchez"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold mb-6">
              I'm{" "}
              <span className="text-primary">
                Igmhar Augusto Sánchez Canales
              </span>
              , a Software Developer and Mechatronics Engineer.
            </h3>

            <div className="space-y-4 text-gray-700">
              <p>
                With a Minor in Cyber-Physical Systems, I bring strong
                experience in software engineering, robotics, and automation,
                developing solutions that combine full-stack development,
                artificial intelligence, and intelligent robotics applications.
                My work reflects both technical rigor and creativity, always
                driven by curiosity and the belief in building <i>a society we
                deserve.</i>
              </p>
              <p>
                Over several years of professional and personal projects, I’ve
                become proficient in designing, developing, and deploying
                robotics and automation systems, while thriving in
                collaborative, team-based environments. My passion lies in using
                technology to solve complex real-world problems and to craft
                meaningful, intelligent solutions.
              </p>
              <i>
                "Driven by curiosity, powered by technology building intelligent
                solutions."
              </i>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-3">Interests:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  Robotics
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  Artificial Intelligence
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  Computer Vision
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  FullStack Developing
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  Automation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
