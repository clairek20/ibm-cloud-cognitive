import React, { useContext } from 'react';
import { Dropdown } from 'carbon-components-react';
import { ThemeContext, themeData } from './ThemeContext';

export const ThemeDropdown = () => {
  const theme = useContext(ThemeContext);

  const setTheme = (selectedItem) => {
    const bodyElement = document.body;
    bodyElement.className = selectedItem.value;
    theme.dispatch({ type: selectedItem });
  };

  return (
    <div className="ccs-theme-dropdown">
      <Dropdown
        direction="top"
        ariaLabel="Theme dropdown"
        id="theme-dropdown"
        items={themeData}
        itemToString={(item) => (item ? item.text : '')}
        onChange={(event) => setTheme(event.selectedItem)}
        selectedItem={theme.state.currentTheme}
        label="Select a Carbon theme"
        titleText="Select a Carbon theme"
      />
    </div>
  );
};
