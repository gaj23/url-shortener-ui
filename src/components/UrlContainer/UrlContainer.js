import React from 'react';
import './UrlContainer.css';

const UrlContainer = ({ urls }) => {
  console.log(urls)
  const urlEls = urls.map(url => {
    return (
      <div className="url" id={url.id} key={url.id}>
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>Shorten it up!</p> }
    </section>
  )
}

export default UrlContainer;
