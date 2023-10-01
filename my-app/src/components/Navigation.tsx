import React from 'react';

interface Props {
  pageHandler: (page: string) => void;
}

const Navigation: React.FC<Props> = ({ pageHandler }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <button
            onClick={() => pageHandler("About me")}
            className="nav-button"
          >
            About me
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => pageHandler("My projects")}
            className="nav-button"
          >
            Projects
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => pageHandler("Education")}
            className="nav-button"
          >
            Education
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;