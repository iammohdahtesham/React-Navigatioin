import React from 'react';
import StackNav from './src/navigation/StackNav.js';
import TabNav from './src/navigation/Tab.js';
import DrawerNav from './src/navigation/Drawer.js';
import NestedNav from './src/navigation/Nestednav.js';

const App = () => {
  return (
    // Uncomment the line to check the working of other navigation
    <>
      <StackNav />
      {/* <TabNav /> */}
      {/* <DrawerNav /> */}
      {/* <NestedNav /> */}
    </>
  );
};

export default App;
