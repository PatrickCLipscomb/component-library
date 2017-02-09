import React, { PropTypes } from 'react';
import './StoryCard.css';

const styles = {
  base: {
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
};

const StoryCard = ({ title, description, children }) => (
  <div style={styles.base}>
    <h2 className={'Title FilsonSoft'}>{title}</h2>
    <p className={'Description'}>{description}</p>
    <div style={{ width: '100%' }}>
      {children}
    </div>
    <div className={'Actions'}>
      <a className={'Context'} href="#"><i className={'fa fa-eye'} /> View Card</a>
      <a className={'Share'} href="#"><i className={'fa fa-link'} /> Share Link</a>
    </div>
  </div>
  );

StoryCard.displayName = 'StoryCard';

StoryCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default StoryCard;
