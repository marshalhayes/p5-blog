---
layout: landing
title: Welcome
---

<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a site all about me, what I do, and what I'm most passionate about. Feel free to explore!</p>
  </div>
</div>

## Recent Posts

<div>
  {% for post in site.posts limit:3 %}
  <small class="text-muted">{{ post.date | date: "%-d %B %Y" }}</small>
  <h3 class="lead"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p>{{ post.description }}</p>
  {% if post.thumbnail %}<a href="{{ post.url | relative_url }}"><img class="img-thumbnail" src="{{ post.thumbnail | relative_url }}" alt="" style="max-width: 250px; max-height: auto;" /></a>{% endif %}
  <hr />
  {% endfor %}
</div>
