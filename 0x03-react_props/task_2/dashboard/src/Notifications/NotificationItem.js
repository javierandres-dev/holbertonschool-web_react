import React from 'react';

const NotificationItem = ({ type, html, value }) => {
  let $li = document.createElement('li');
  if (value) {
    $li.setAttribute('data-notification-type', `{type}>{value}`);
  } else {
    $li.setAttribute('data-notification-type', `{type}`);
    $li.setAttribute('dangerouslySetInnerHTML', `{html}`);
  }
  return $li;
};

export default NotificationItem;
