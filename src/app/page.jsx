'use client';

import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowUp,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Moon,
  Send,
  Sun,
  Twitter,
} from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang Saya' },
  { href: '#skills', label: 'Skills' },
  { href: '#portofolio', label: 'Portofolio' },
  // { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'mailto:ikbarsaif@gmail.com', label: 'Email', icon: Mail },
  { href: 'https://www.instagram.com/ikbarsf_fdlh/', label: 'Instagram', icon: Instagram },
  { href: 'https://github.com/Ikbarsf', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/ikbar-saif-fadilah-0a6215220/', label: 'LinkedIn', icon: Linkedin },
];

const skills = [
  { name: 'HTML', image: '/img/clients/html.png' },
  { name: 'CSS', image: '/img/clients/css.png' },
  { name: 'Bootstrap', image: '/img/clients/bootstrap.png' },
  { name: 'Python', image: '/img/clients/py.png' },
  { name: 'Figma', image: '/img/clients/figmafix.png' },
];

const education = [
  'Universitas Jember | 2021 - 2026',
  'SMAN 4 Jember | 2018 - 2021',
  'SMPN 1 Rambipuji | 2015 - 2018',
  'SDN 2 Bangsalsari | 2009 - 2015',
];

const workAndTrainingExperiences = [
  'Pelatihan Web Development | HTML, CSS, JavaScript, Tailwind CSS',
  'Pelatihan UI/UX Design | Figma dan dasar perancangan antarmuka',
  'Project Mandiri | Pembuatan website portofolio dan aplikasi sederhana',
];

const organizationExperiences = [
  'HMIF | Staf Pengembangan Sumber Daya Mahasiswa | 2024 ',
  'HMIF | Staf Pengembangan Sumber Daya Mahasiswa | 2022 - 2023',
  'Pengurus Ekstrakurikuler Karawitan SMAPA | Ketua Umum | 2018 - 2020',
  'Pengurus Ekstrakurikuler Pramuka SMAPA | Sekretaris | 2019 - 2020',
];

const portfolios = [
  {
    title: 'Website JamuPedia',
    image: '/img/portofolio/JamuPedia.jpeg',
    description: 'Website informatif tentang jamu tradisional dengan tampilan modern dan responsif.',
    tags: ['HTML', 'CSS', 'Tailwind'],
  },
  {
    title: 'Dashboard Template Bootstrap',
    image: '/img/portofolio/Bananies.png',
    description: 'Template dashboard berbasis Bootstrap untuk kebutuhan antarmuka admin.',
    tags: ['Bootstrap', 'UI Design'],
  },
  {
    title: 'Sistem Apotik Berbasis Website',
    image: '/img/portofolio/apotik.png',
    description: 'Sistem manajemen apotik berbasis web untuk pencatatan data dan transaksi.',
    tags: ['Web App', 'Database'],
  },
  {
    title: 'Papikos C#',
    image: '/img/portofolio/Form.png',
    description: 'Aplikasi desktop sederhana untuk pengelolaan kos berbasis C#.',
    tags: ['C#', 'Desktop App'],
  },
];

// const blogs = [
//   {
//     title: 'Web Programming UNPAS',
//     description: 'Channel belajar web development yang membahas dasar hingga konsep lanjutan.',
//     href: 'https://www.youtube.com/@sandhikagalihWPU',
//   },
//   {
//     title: 'Tailwind CSS',
//     description: 'Utility-first CSS framework yang digunakan untuk membangun portfolio ini.',
//     href: 'https://tailwindcss.com',
//   },
//   {
//     title: 'Figma',
//     description: 'Tools desain UI/UX untuk menyusun layout, komponen, dan prototype website.',
//     href: 'https://www.figma.com',
//   },
// ];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(savedTheme === 'dark' || (!savedTheme && prefersDark));

    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDarkMode = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    localStorage.theme = nextTheme ? 'dark' : 'light';
  };

  return (
    <header className={`fixed left-0 top-0 z-50 flex w-full items-center transition-all duration-300 ${isScrolled ? 'navbar-fixed py-1 shadow-lg shadow-sky-500/5' : 'bg-transparent py-3'}`}>
      <div className="container">
        <div className="relative flex items-center justify-between">
          <a href="#home" className="px-4 py-4 text-2xl font-extrabold tracking-tight text-primary">
            Ikbar<span className="text-slate-900 dark:text-white">Saif</span>
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            className={`absolute right-4 block lg:hidden ${isOpen ? 'hamburger-active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
          </button>

          <nav className={`${isOpen ? 'block' : 'hidden'} absolute right-4 top-full w-full max-w-[280px] rounded-2xl border border-white/40 bg-white/90 px-5 py-5 shadow-xl backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/90 lg:static lg:block lg:max-w-full lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0 lg:dark:bg-transparent`}>
            <ul className="items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-sky-500/10 hover:text-primary dark:text-slate-200 dark:hover:bg-sky-400/10"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-3 pl-4 lg:mt-0 lg:pl-2">
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
                >
                  {isDark ? <Moon size={16} /> : <Sun size={16} />}
                  {isDark ? 'Dark' : 'Light'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300/80 bg-white/60 text-slate-500 shadow-sm transition hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-sky-500/30 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
        >
          <Icon size={19} />
        </a>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, center = true }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} mb-12 max-w-3xl px-4`}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-secondary dark:text-slate-300 lg:text-lg">{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50 to-white pb-20 pt-32 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:pb-28 lg:pt-40">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="px-4">
            <div className="mb-6 inline-flex rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur dark:border-sky-500/30 dark:bg-slate-900/70">
              Informatics Student • Web Enthusiast
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Hallo, saya{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent drop-shadow-sm">
                Ikbar Saif
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300 lg:text-xl">
              Mahasiswa Informatika Universitas Jember yang memiliki minat besar dalam desain web, pengembangan web, dan pembuatan antarmuka yang modern.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="rounded-full bg-gradient-to-r from-primary to-violet-500 px-6 py-3 font-bold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-1 hover:shadow-violet-500/30">
                Hubungi Saya
              </a>
              <a href="#portofolio" className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 font-bold text-slate-700 backdrop-blur transition hover:-translate-y-1 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                Lihat Portfolio
              </a>
            </div>
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          <div className="relative px-4">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-sky-400/30 to-violet-500/30 blur-3xl"></div>
            <div className="glow-card relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] p-6">
              <div className="rounded-[2rem] bg-gradient-to-br from-sky-100 via-white to-violet-100 p-4 dark:from-slate-800 dark:via-slate-900 dark:to-sky-950">
                <img src="/img/ikbar.jpg" alt="Ikbar Saif" className="mx-auto w-full max-w-sm object-contain drop-shadow-2xl" />
              </div>
              <div className="mt-5 rounded-2xl bg-white/60 p-4 text-center backdrop-blur dark:bg-slate-950/40">
                <p className="font-bold text-slate-900 dark:text-white">Web Development • UI Design</p>
                <p className="text-sm text-secondary dark:text-slate-400">Focused on clean, responsive, glowing interfaces.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-6">
          <div className="glow-card rounded-3xl p-8">
            <SectionHeading eyebrow="Tentang Saya" title="Hai, nama saya Ikbar Saif Fadilah" center={false} />
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Saya seorang mahasiswa perguruan tinggi di Universitas Jember sejak 2021. Saya memiliki minat dalam desain web dan pengembangan web. Saya lahir pada tanggal 03 Juli 2003 di Jember, Jawa Timur. Saya dapat bekerja dalam tim, disiplin, bertanggung jawab, adaptif, sopan, dan ramah.
            </p>
          </div>
            <div className="glow-card rounded-3xl p-8">
              <h3 className="mb-5 text-2xl font-extrabold text-slate-950 dark:text-white">Pengalaman Kerja & Pelatihan</h3>
              <div className="space-y-3">
                {workAndTrainingExperiences.map((item) => (
                  <p key={item} className="rounded-2xl bg-white/50 px-4 py-3 font-semibold text-secondary dark:bg-slate-900/50 dark:text-slate-300">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="glow-card rounded-3xl p-8">
              <h3 className="mb-5 text-2xl font-extrabold text-slate-950 dark:text-white">Latar Belakang Pendidikan</h3>
              <div className="space-y-3">
                {education.map((item) => (
                  <p key={item} className="rounded-2xl bg-white/50 px-4 py-3 font-semibold text-secondary dark:bg-slate-900/50 dark:text-slate-300">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="glow-card rounded-3xl p-8">
              <h3 className="mb-5 text-2xl font-extrabold text-slate-950 dark:text-white">Pengalaman Organisasi</h3>
              <div className="space-y-3">
                {organizationExperiences.map((item) => (
                  <p key={item} className="rounded-2xl bg-white/50 px-4 py-3 font-semibold text-secondary dark:bg-slate-900/50 dark:text-slate-300">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950/95 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_45%)]"></div>
      <div className="container relative">
        <SectionHeading eyebrow="Skills" title="Yang Saya Pelajari" description="Beberapa teknologi dan tools yang digunakan untuk membangun tampilan web responsif dan menarik." />
        <div className="flex flex-wrap items-center justify-center gap-6 px-4">
          {skills.map((skill) => (
            <div key={skill.name} className="glow-card group flex h-32 w-32 items-center justify-center rounded-3xl p-6 grayscale transition duration-500 hover:grayscale-0">
              <img src={skill.image} alt={skill.name} className="max-h-20 max-w-full object-contain transition group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portofolio" className="py-24">
      <div className="container">
        <SectionHeading eyebrow="Portofolio" title="Projek Terbaru" description="Berikut beberapa projek yang pernah saya buat dengan berbagai tools dan bahasa pemrograman." />
        <div className="grid gap-6 px-4 md:grid-cols-2 xl:grid-cols-4">
          {portfolios.map((project) => (
            <article key={project.title} className="glow-card overflow-hidden rounded-3xl">
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary dark:text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-bold text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// function Blog() {
//   return (
//     <section id="blog" className="bg-white/40 py-24 dark:bg-slate-950/40">
//       <div className="container">
//         <SectionHeading eyebrow="Blog" title="Terkait Saya!" description="Beberapa channel, tools, dan referensi yang menginspirasi proses belajar saya." />
//         <div className="grid gap-6 px-4 md:grid-cols-3">
//           {blogs.map((blog) => (
//             <a key={blog.title} href={blog.href} target="_blank" rel="noreferrer" className="glow-card group rounded-3xl p-8">
//               <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet-500 text-white shadow-lg shadow-sky-500/25">
//                 <ExternalLink size={22} />
//               </div>
//               <h3 className="text-xl font-extrabold text-slate-950 transition group-hover:text-primary dark:text-white">{blog.title}</h3>
//               <p className="mt-3 leading-relaxed text-secondary dark:text-slate-300">{blog.description}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Contact() {
  const [form, setForm] = useState({ from_name: '', email_id: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Mengirim pesan...');

    try {
      await emailjs.send(
        'service_8u2y9rz',
        'template_cdwxfc4',
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'Dsf7zjEC-Z_GiRl_k',
      );
      setStatus('Pesan berhasil terkirim. Terima kasih!');
      setForm({ from_name: '', email_id: '', message: '' });
    } catch (error) {
      setStatus('Pesan belum berhasil terkirim. Coba lagi nanti.');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Hubungi Saya" description="Punya ide, peluang kolaborasi, atau ingin berdiskusi tentang web development? Silakan kirim pesan." />
        <form onSubmit={handleSubmit} className="glow-card mx-auto max-w-3xl rounded-3xl p-8">
          <div className="grid gap-5">
            <label className="block">
              <span className="mb-2 block font-bold text-slate-800 dark:text-slate-100">Nama Lengkap</span>
              <input
                type="text"
                required
                value={form.from_name}
                onChange={(event) => setForm({ ...form, from_name: event.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-white/70 p-4 text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-bold text-slate-800 dark:text-slate-100">Email</span>
              <input
                type="email"
                required
                value={form.email_id}
                onChange={(event) => setForm({ ...form, email_id: event.target.value })}
                className="w-full rounded-2xl border border-slate-200 bg-white/70 p-4 text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-bold text-slate-800 dark:text-slate-100">Pesan</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white/70 p-4 text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-sky-500/10 dark:border-slate-700 dark:bg-slate-950/60 dark:text-white"
              ></textarea>
            </label>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-violet-500 px-8 py-4 font-extrabold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-1 hover:shadow-violet-500/30">
              <Send size={18} />
              Kirim Pesan
            </button>
            {status && <p className="text-center font-semibold text-primary">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-14 text-slate-300">
      <div className="container">
        <div className="grid gap-10 px-4 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-extrabold text-white">Ikbar<span className="text-primary">Saif</span></h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate-400">
              Portfolio Next.js dengan Tailwind CSS, dark mode, dan visual gradient glow modern.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>
          {/* <div>
            <h3 className="mb-4 font-extrabold text-white">Kategori Tulisan</h3>
            <div className="space-y-3">
              {['Programmer', 'Informatika', 'Teknologi'].map((item) => (
                <a key={item} href="#blog" className="block transition hover:text-primary">{item}</a>
              ))}
            </div>
          </div> */}
          <div>
            <h3 className="mb-4 font-extrabold text-white">Tautan</h3>
            <div className="space-y-3">
              {navItems.slice(0, 5).map((item) => (
                <a key={item.href} href={item.href} className="block transition hover:text-primary">{item.label}</a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-12 px-4 text-center text-sm text-slate-500">
          Dibuat dengan <span className="text-pink-500">♥</span> oleh <a href="https://www.instagram.com/ikbarsf_fdlh/" target="_blank" rel="noreferrer" className="font-bold text-primary">Ikbar Saif</a>, menggunakan Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-violet-500 text-white shadow-lg shadow-sky-500/30 transition ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}
    >
      <ArrowUp size={20} />
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
