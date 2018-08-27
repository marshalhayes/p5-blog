---
title: Blog
permalink: /blog/
layout: page
---

<div>
  {% for post in site.posts %}
  <small class="text-muted">{{ post.date | date: "%-d %B %Y" }}</small>
  <h3 class="lead"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
  <p>{{ post.description }}</p>
  {% if post.thumbnail %}<a href="{{ post.url | relative_url }}"><img class="img-thumbnail" src="{{ post.thumbnail | relative_url }}" alt="" style="max-width: 250px; max-height: auto;" /></a>{% endif %}
  <hr />
  {% endfor %}
</div>
