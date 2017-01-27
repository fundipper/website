import React from 'react';

const styles = {
  main: {
    marginLeft: 'calc(10% - 10px)',
    marginRight: 'calc(10% - 10px)',
    marginTop: '20px',
    width: '80%',
  },
};

const MainContent = (props) => (
  <div>

    <div style={styles.main}>
      <img src="" alt="photo" />
      Hi I am Ian Aspin a software developer at DataOnline
    </div>
  </div>
);

MainContent.propTypes = {
};

export default MainContent;
