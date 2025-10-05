import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Cpu,
  Code,
  Wrench,
  Github,
  Linkedin,
  ChevronRight,
  Zap,
  CircuitBoard,
  Target,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import profilePicture from "@/assets/profile-picture.png";
import project8BitComputer from "@/assets/project-8bit-computer.jpg";
import projectNeoLink from "@/assets/project-neolink-stm32.jpg";
import projectHomeAutomation from "@/assets/project-home-automation.jpg";
import projectBreadboardPSU from "@/assets/project-breadboard-psu.jpg";
import projectSmartIrrigation from "@/assets/project-smart-irrigation.jpg";
import projectGeminiClone from "@/assets/project-gemini-clone.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Balaji_Ragul_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Resume downloaded successfully!");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm(
        'service_yknj9xk',
        'template_hd90ok1',
        formRef.current,
        'rztfU6ELMUi78yYQ0'
      )
        .then(() => {
          toast.success("Message sent successfully! I'll get back to you soon.");
          formRef.current?.reset();
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          toast.error("Failed to send message. Please try again.");
        });
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const skills = {
    core: [
      "PCB Design",
      "Digital Electronics",
      "Verilog HDL",
      "Embedded Systems",
    ],
    programming: ["C", "Java", "HTML", "CSS", "JavaScript","MySQL"],
    eda: ["Altium Designer", "KiCad", "DipTrace"],
    software: ["VS Code", "Arduino IDE", "Canva", "Photoshop", "Notion","Figma"],
  };

  const projects = [
    {
      title: "8-bit Computer",
      role: "PCB Designer",
      description:
        "Designed and implemented a custom 4-layer PCB for an 8-bit computer with CPU, ALU, memory, and I/O modules. Successfully tested and executed basic computing operations.",
      tags: ["PCB", "Hardware"],
      image: project8BitComputer,
      link: "",
    },
    {
      title: "NeoLink STM32",
      role: "PCB Designer",
      description:
        "Created a 2-layer PCB using STM32F103C8T6 with stable connections to ESP, Bluetooth, and 2.4G modules. Integrated EEPROM, crystal, and decoupling circuits for reliable performance.",
      tags: ["PCB", "Embedded"],
      image: projectNeoLink,
      link: "https://github.com/balajiragul/NeoLink-STM32",
    },
    {
      title: "Home Automation",
      role: "Embedded & Hardware Integration",
      description:
        "Developed a smart autonomous lighting system using environmental sensors and user preferences. Achieved responsive performance while reducing energy consumption.",
      tags: ["Embedded", "IoT"],
      image: projectHomeAutomation,
      link: "",
    },
    {
      title: "Breadboard Power Supply",
      role: "PCB Designer",
      description:
        "Built a USB-C powered breadboard supply with PD fast charging support, DIP switch controls, and LED voltage indicators for flexible prototyping.",
      tags: ["PCB", "Hardware"],
      image: projectBreadboardPSU,
      link: "",
    },
    {
      title: "Smart Irrigation System",
      role: "Embedded & PCB",
      description:
        "Designed and implemented an IoT-based irrigation system using ESP8266, soil moisture and weather sensors. Automated watering via relay to ensure efficiency and sustainability.",
      tags: ["Embedded", "IoT", "PCB"],
      image: projectSmartIrrigation,
      link: "",
    },
    {
      title: "Gemini Clone",
      role: "Frontend Developer",
      description:
        "Built a responsive front-end clone of Gemini with HTML, CSS, and JavaScript, replicating its core features and user interface for a seamless experience.",
      tags: ["Web", "Frontend"],
      image: projectGeminiClone,
      link: "https://gemini-clone-html.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <nav className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="text-3xl font-bold bg-gradient-to-r from-primary to-violet bg-clip-text text-transparent hover:scale-105 transition-transform"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              BR
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`text-base font-medium transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    activeSection === link.id
                      ? "text-primary after:scale-x-100"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Animated Gradient Wave Background */}
        <div className="absolute inset-0 gradient-wave opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-transparent"></div>

        {/* Floating Tech Icons - Strategically placed */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <CircuitBoard className="absolute top-1/4 left-16 w-12 h-12 text-primary/30 animate-float" style={{ animation: 'float 8s ease-in-out infinite' }} />
          <Cpu className="absolute bottom-1/4 left-20 w-14 h-14 text-violet/30 animate-float" style={{ animation: 'float 8s ease-in-out 2s infinite' }} />
          <Code className="absolute top-1/3 right-20 w-14 h-14 text-primary/30 animate-float" style={{ animation: 'float 8s ease-in-out 1s infinite' }} />
          <Zap className="absolute bottom-1/3 right-16 w-12 h-12 text-violet/30 animate-float" style={{ animation: 'float 8s ease-in-out 1.5s infinite' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side - Profile Picture */}
            <div className="flex justify-center md:justify-end order-1 md:order-1 animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-violet rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <img
                  src={profilePicture}
                  alt="Balaji Ragul - Electronics & Communication Engineer"
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-2 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="order-2 md:order-2 text-center md:text-left animate-slide-up flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-primary to-violet bg-clip-text text-transparent animate-fade-in">Balaji Ragul</span>
              </h1>

              <div className="mb-6 space-y-2">
                <p className="text-xl md:text-2xl text-foreground font-semibold">
                  Electronics & Communication Engineer
                </p>
                <p className="text-lg md:text-xl text-muted-foreground font-medium">
                  PCB Designer | Embedded & Web Developer
                </p>
              </div>

              <p className="text-base md:text-lg text-muted-foreground/80 italic mb-8 font-light max-w-xl">
                "Tuning circuits into real products, and ideas into smart solutions."
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 bg-gradient-to-r from-primary to-violet hover:from-primary/90 hover:to-violet/90 shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient animate-fade-in">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient border-border mb-12 animate-slide-up">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a passionate and detail-oriented engineer specializing in PCB design,
                  embedded systems, and web development. My work bridges the gap between hardware
                  and software, creating innovative solutions like custom circuits, smart devices,
                  and interactive applications. I thrive on problem-solving, continuous learning,
                  and adapting to emerging technologies, with a vision to contribute impactful
                  solutions in real-world projects.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-gradient border-border animate-scale-in md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl">Education</h3>
                  </div>
                  <div className="space-y-6 ml-16">
                    {/* B.E. */}
                    <div className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                      <h4 className="font-semibold text-base mb-1">B.E. Electronics & Communication Engineering</h4>
                      <p className="text-sm text-muted-foreground mb-1">Bannari Amman Institute of Technology</p>
                      <p className="text-xs text-muted-foreground/70">2022 – 2026</p>
                    </div>

                    {/* 12th */}
                    <div className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary/70 rounded-full border-2 border-background"></div>
                      <h4 className="font-semibold text-base mb-1">Higher Secondary (12th)</h4>
                      <p className="text-sm text-muted-foreground mb-1">St. Joseph's Matriculation Hr. Sec. School</p>
                      <p className="text-xs text-muted-foreground/70">2021 – 2022</p>
                    </div>

                    {/* 10th */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary/50 rounded-full border-2 border-background"></div>
                      <h4 className="font-semibold text-base mb-1">Secondary School (10th)</h4>
                      <p className="text-sm text-muted-foreground mb-1">St. Joseph's Matriculation Hr. Sec. School</p>
                      <p className="text-xs text-muted-foreground/70">2019 – 2020</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border animate-scale-in animation-delay-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        balajiragul28@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border animate-scale-in animation-delay-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-sm text-muted-foreground">+91 81488 76628</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border animate-scale-in animation-delay-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Location</h3>
                      <p className="text-sm text-muted-foreground">Hosur, Tamil Nadu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border animate-scale-in animation-delay-400">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-violet/10 rounded-lg">
                      <Target className="h-6 w-6 text-violet" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-3">Areas of Interest</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs px-3 py-1">
                          <CircuitBoard className="h-3 w-3 mr-1" />
                          PCB Design
                        </Badge>
                        <Badge variant="secondary" className="text-xs px-3 py-1">
                          <Code className="h-3 w-3 mr-1" />
                          Web Development
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient animate-fade-in">
            Skills & Tools
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Skills */}
            <Card className="card-gradient border-border animate-slide-up">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Core Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.core.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-primary/20 text-primary border-primary/50 hover:bg-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Programming */}
            <Card className="card-gradient border-border animate-slide-up animation-delay-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Code className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Programming</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-secondary/20 text-secondary border-secondary/50 hover:bg-secondary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* EDA Tools */}
            <Card className="card-gradient border-border animate-slide-up animation-delay-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <CircuitBoard className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">EDA Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.eda.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-accent/20 text-accent border-accent/50 hover:bg-accent/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Software Tools */}
            <Card className="card-gradient border-border animate-slide-up animation-delay-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Software Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.software.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-primary/20 text-primary border-primary/50 hover:bg-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient animate-fade-in">
            Projects
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-accent mb-3">{project.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-primary/50 text-primary"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient animate-fade-in">
            Get In Touch
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="card-gradient border-border animate-slide-up">
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="user_name"
                      placeholder="Your Name"
                      required
                      className="bg-background/50 border-border"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      required
                      className="bg-background/50 border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      rows={5}
                      className="bg-background/50 border-border resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up animation-delay-100">
              <Card className="card-gradient border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href="mailto:balajiragul28@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        balajiragul28@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a
                        href="tel:+918148876628"
                        className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                      >
                        +91 81488 76628
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Linkedin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/balajiragul"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        linkedin.com/in/balajiragul
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">GitHub</p>
                      <a
                        href="https://github.com/balajiragul"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/balajiragul
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "I'm always open to collaborations, projects, or just a quick chat about
                  technology. Let's connect and create something innovative together!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Balaji Ragul. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/balajiragul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/balajiragul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
