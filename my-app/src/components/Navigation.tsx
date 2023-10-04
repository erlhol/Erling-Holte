import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

interface Props {
  pageHandler: (page: string) => void;
}

const Navigation: React.FC<Props> = ({ pageHandler }) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage);
  };
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {['about', 'my_projects', 'education', 'work'].map((text, index) => (
          <li className="nav-item" key={index}>
            <button
              onClick={() => pageHandler(text)}
              className="nav-button"
            >
              {t(text)}
            </button>
          </li>
        ))}
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('no')}>NO</button>
      </ul>
    </nav>

  );
};

export default Navigation;