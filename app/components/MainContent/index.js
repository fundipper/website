import React from 'react';

const styles = {
  main: {
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '10px',
  },
};

const MainContent = (props) => (
  <div style={styles.main}>
    Hi I am Ian Aspin a software developer at DataOnline
  </div>
);

MainContent.propTypes = {
};

export default MainContent;
