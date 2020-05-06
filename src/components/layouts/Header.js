import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import BrowserLanguage from '../../utils/BrowserLanguage';
import Select from 'react-select';
import { options, langs } from '../../configs/options';

const Header = ({lang, i18n, t}) => {
  const [state, setState] = useState({
    defaultLang: {
      label: i18n.language === 'en' ?  langs.en: langs.fr,
      value: i18n.language === 'en' ? langs.en : langs.fr,
    }
  });

  const changeLang = (lang) => {
    if (!lang) {
      const tempLang = BrowserLanguage.getDefaultLanguage();
      lang = tempLang === 'en' ? 'fr' : 'en';
    }
    setState({ defaultLang: lang });

    if (BrowserLanguage.setLanguage(lang.value)) {
      // Reload page if browser support localStorage
      window.location.reload(); // Relaod app after langue change
    } else {
      // Change language at runtime if localStorage not found
      i18n.changeLanguage(lang); // Need for change language at runtime
    }
  };

  return (
    <div className="header-container">
      <Select
        defaultValue={state.defaultLang}
        options={options}
        value={state.defaultLang}
        onChange={changeLang}
        className="App-Select"
        isSearchable={false}
      />
    </div>
  );
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    defaultNS: PropTypes.string,
    changeLanguage: PropTypes.func,
  }).isRequired,
};

export default withTranslation()(Header);
