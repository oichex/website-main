const AnimatedNavLink = ({ href, children }) => {
  const defaultTextColor = 'text-gray-300';
  const hoverTextColor = 'text-white';
  const textSizeClass = 'text-sm';

  return React.createElement('a', {
    href: href,
    className: `group relative inline-block overflow-hidden h-8 flex items-center ${textSizeClass} whitespace-nowrap leading-none`
  },
    React.createElement('span', {
      className: `${defaultTextColor} block transition-all duration-300 group-hover:-translate-y-8`
    }, children),
    React.createElement('span', {
      className: `${hoverTextColor} block absolute left-0 top-8 transition-all duration-300 group-hover:top-0`
    }, children)
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [headerShapeClass, setHeaderShapeClass] = React.useState('rounded-full');
  const shapeTimeoutRef = React.useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = React.createElement('div', {
    className: 'relative w-5 h-5 flex items-center justify-center'
  },
    React.createElement('span', {
      className: 'absolute w-1.5 h-1.5 rounded-full bg-gray-200 top-0 left-1/2 transform -translate-x-1/2 opacity-80'
    }),
    React.createElement('span', {
      className: 'absolute w-1.5 h-1.5 rounded-full bg-gray-200 left-0 top-1/2 transform -translate-y-1/2 opacity-80'
    }),
    React.createElement('span', {
      className: 'absolute w-1.5 h-1.5 rounded-full bg-gray-200 right-0 top-1/2 transform -translate-y-1/2 opacity-80'
    }),
    React.createElement('span', {
      className: 'absolute w-1.5 h-1.5 rounded-full bg-gray-200 bottom-0 left-1/2 transform -translate-x-1/2 opacity-80'
    })
  );

  const navLinksData = [
    { label: 'Anasayfa', href: 'index.html' },
    { label: 'Repositories', href: 'repositories.html' },
    { label: 'Technologies', href: 'technologies.html' },
    { label: 'Bağlantılar', href: '#baglantilar' },
  ];

  return React.createElement('header', {
    className: `fixed top-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center pl-6 pr-6 py-3 backdrop-blur-sm ${headerShapeClass} border border-[#333] bg-[#1f1f1f57] w-[calc(100%-2rem)] sm:w-auto transition-[border-radius] duration-0 ease-in-out`
  },
    React.createElement('div', {
      className: 'flex items-center justify-between w-full gap-x-6 sm:gap-x-8'
    },
      React.createElement('div', { className: 'flex items-center' }, logoElement),
      React.createElement('nav', {
        className: 'flex items-center space-x-6 sm:space-x-10 text-sm'
      },
        navLinksData.map((link) => React.createElement(AnimatedNavLink, {
          key: link.href,
          href: link.href
        }, link.label))
      ),
      React.createElement('button', {
        className: 'sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none',
        onClick: toggleMenu,
        'aria-label': isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'
      },
        isOpen ? React.createElement('svg', {
          className: 'w-6 h-6',
          fill: 'none',
          stroke: 'currentColor',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg'
        },
          React.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '2',
            d: 'M6 18L18 6M6 6l12 12'
          })
        ) : React.createElement('svg', {
          className: 'w-6 h-6',
          fill: 'none',
          stroke: 'currentColor',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg'
        },
          React.createElement('path', {
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '2',
            d: 'M4 6h16M4 12h16M4 18h16'
          })
        )
      )
    ),
    React.createElement('div', {
      className: `sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100 pt-4' : 'max-h-0 opacity-0 pt-0 pointer-events-none'}`
    },
      React.createElement('nav', {
        className: 'flex flex-col items-center space-y-4 text-base w-full'
      },
        navLinksData.map((link) => React.createElement(AnimatedNavLink, {
          key: link.href,
          href: link.href
        }, link.label))
      )
    )
  );
}

window.Navbar = Navbar; 