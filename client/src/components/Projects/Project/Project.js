import React, { Component } from 'react';

const DEFAULT_PICTURE_URL =
  'http://www.artconnect.com/assets/default/default_project_list-7c7cb913cb130a76c51f21509f73bbb6.png';

const Project = props => {
  const picture = (props.project.picture || { url: DEFAULT_PICTURE_URL }).url;
  const preview = props.project.website || props.project.github;
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={picture} alt="" />
          <span className="card-title"> {props.project.name} </span>
          <a
            href={preview}
            className="btn-floating btn-large halfway-fab waves-effect waves-light red"
            target="_blank"
          >
            <i
              className="material-icons fa fa-search-plus"
              aria-hidden="true"
            />
          </a>
        </div>
        <div className="card-content truncate-text">
          <p> {props.project.description} </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
