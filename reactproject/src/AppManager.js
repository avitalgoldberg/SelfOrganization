import React from 'react';
import './AppManager.css';
import BadgeVisibility from './comps/manager/comps/BadgeVisibility.tsx'

function AppManager() {
  return (
    <div className="parent20">
      <div id="news"><BadgeVisibility /></div>
      <div id="statistic"></div>
      <div id="other"></div>
    </div>
  );
}
export default AppManager;