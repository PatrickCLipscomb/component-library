import React, { PropTypes } from 'react';
import './StoryCard.css';

const StoryCard = ({ cardId, collectionId, title, children }) => (
  <div className={'Card'}>
    <h2 className={'Title FilsonSoft'}>{title}</h2>
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
  cardId: PropTypes.string,
  collectionId: PropTypes.string,
  children: PropTypes.node,
};

export default StoryCard;
