import React from 'react';

import PropTypes from 'prop-types';

import { SidebarWrapper } from './styles';

function Sidebar({ name }) {
  return (
    <SidebarWrapper>
      {name}
    </SidebarWrapper>
  );
}

Sidebar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Sidebar;
