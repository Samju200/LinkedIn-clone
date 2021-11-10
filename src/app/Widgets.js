import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import './widgets.css';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News </h2>
        <Info />
      </div>
      {newsArticle('Samju react', 'redux react for linkedin 200reader')}
      {newsArticle(
        'Covid 19: Nigeria update',
        ' TopNews-100 hundred people contacted covid- 800 readers'
      )}
      {newsArticle('Bitcion', 'TopNews -Bitcoin hit $60- 800 readers')}
      {newsArticle('God is Good', 'Top News- All the time- 2bn readers')}
      {newsArticle(
        'CAN condems ',
        'Top News- Hijab wearing in Missionary Schools-1000 readers'
      )}
      <div className="widgets_header">
        <h2>Today’s most viewed courses</h2>
        <Info />
      </div>
      {newsArticle(
        '1. The Six Morning Habits of High Performance',
        'Pete Mockaitis | How to Be Awesome at Your Job'
      )}
      {newsArticle('2. Daniel Pink on Motivation', ' Daniel Pink')}
      {newsArticle('3. Rock Your LinkedIn Profile', 'Lauren Jolda')}
    </div>
  );
}

export default Widgets;
