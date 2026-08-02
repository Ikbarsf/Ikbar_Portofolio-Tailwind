import './globals.css';

export const metadata = {
  title: 'My Portfolio | Ikbar Saif',
  description: 'Portofolio Pribadi Ikbar Saif - Web Developer & Informatika Universitas Jember',
  icons: {
    icon: '/img/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
      </head>
      <body className="relative min-h-screen text-slate-800 dark:text-slate-100 selection:bg-primary selection:text-white">
        {/* Ambient Gradient Glow Background */}
        <div className="glow-bg">
          <div className="glow-orb-1"></div>
          <div className="glow-orb-2"></div>
          <div className="glow-orb-3"></div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
