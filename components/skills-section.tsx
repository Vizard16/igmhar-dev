export default function SkillsSection() {
  return (
    <section className="section bg-white text-black" id="skills">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical Skills</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h3 className="section-subheading">Programming Languages</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
              {programmingLanguages.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-2">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-xs text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="section-subheading">Technologies</h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-2">
                    <img
                      src={tech.icon || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-12 h-12"
                    />
                  </div>
                  <span className="text-xs text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const programmingLanguages = [
  { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
  { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
  { name: "Bash", icon: "https://skillicons.dev/icons?i=bash" },
  { name: "C#", icon: "https://skillicons.dev/icons?i=cs" },
  { name: "C", icon: "https://skillicons.dev/icons?i=c" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
  { name: "Rust", icon: "https://skillicons.dev/icons?i=rust" },
  { name: "Go", icon: "https://skillicons.dev/icons?i=go" },
];

const technologies = [
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Svelte", icon: "https://skillicons.dev/icons?i=svelte" },
  { name: "WASM", icon: "https://skillicons.dev/icons?i=wasm" },
  { name: "Arduino", icon: "https://skillicons.dev/icons?i=arduino" },
  { name: "ROS", icon: "https://skillicons.dev/icons?i=ros" },
  { name: "Raspberry Pi", icon: "https://skillicons.dev/icons?i=raspberrypi" },
  { name: "CMake", icon: "https://skillicons.dev/icons?i=cmake" },
  { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
  { name: "PyTorch", icon: "https://skillicons.dev/icons?i=pytorch" },
  { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
  { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
  { name: "OpenCV", icon: "https://skillicons.dev/icons?i=opencv" },
  { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
  { name: "express", icon: "https://skillicons.dev/icons?i=express" },
  { name: "Flask", icon: "https://skillicons.dev/icons?i=flask" },
  { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
  { name: "Kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes" },
  { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
  { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
  { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
  { name: "Unity", icon: "https://skillicons.dev/icons?i=unity" },
  { name: "Unreal Engine", icon: "https://skillicons.dev/icons?i=unreal" },

  { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "SQLite", icon: "https://skillicons.dev/icons?i=sqlite" },
  { name: "Blender", icon: "https://skillicons.dev/icons?i=blender" },

  { name: "Git", icon: "https://skillicons.dev/icons?i=git" },

  { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
  { name: "Gitlab", icon: "https://skillicons.dev/icons?i=gitlab" },
];
