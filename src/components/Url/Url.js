import React from 'react'

<div className="url" id={url.id} key={url.id}>
  <h3>{url.title}</h3>
  <a href={url.short_url} target="blank">{url.short_url}</a>
  <p>{url.long_url}</p>
</div>
