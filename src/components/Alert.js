import React from 'react';

export default function Alert({ isEmpty }) {
  return isEmpty ? (
    <div className="uk-alert uk-alert-danger">
      <p>Cannot add new task. Please check again.</p>
    </div>
  ) : null;
}
