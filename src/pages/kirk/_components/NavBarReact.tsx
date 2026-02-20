const NavBarReact = ({ currentPath }: { currentPath: string }) => {
  const NAV_LINKS = [
    { name: 'Home', href: '/kirk' },
    { name: 'Products', href: '/kirk/products' },
    { name: 'Contact', href: '/kirk/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-center p-8">
      <div className="w-full flex items-center justify-between px-6 py-2 rounded-3xl shadow-lg border border-white/10 bg-white/5 backdrop-blur-md">
        <a href="/kirk">
          <img
            src="/kirk/nav-logo.png"
            className="hover:scale-105 transition-transform duration-200"
            width={100}
            alt="Logo"
          />
        </a>

        <ul className="h-fit flex items-center justify-center gap-6 py-4">
          {NAV_LINKS.map((link, index) => {
            const isActive = currentPath === link.href;

            return (
              <li key={`${link.href}-${index}`} className="relative">
                <a
                  href={link.href}
                  className={`
                    text-lg inline-block transition-all duration-300 ease-in-out font-gill
                    ${
                      isActive
                        ? 'opacity-100 font-bold scale-105'
                        : 'opacity-40 font-normal hover:opacity-75 hover:font-medium'
                    }
                    text-white
                  `}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBarReact;
