import React from 'react';

interface Props {
  pageHandler: (page: string) => void;
}

const Navigation: React.FC<Props> = ({ pageHandler }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {["About me", "My projects", "Education", "Work"].map((text, index) => (
          <li className="nav-item" key={index}>
            <button
              onClick={() => pageHandler(text)}
              className="nav-button"
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>

  );
};

export default Navigation;