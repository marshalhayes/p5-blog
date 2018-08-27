---
layout: page
title: About
permalink: /about/
---

<div class="row">
  <div class="col-md-8 order-md-1 order-2">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur volutpat mauris ut fringilla. Aenean quis ante vulputate justo rutrum consectetur ac in sem. Maecenas ullamcorper pellentesque elit, in aliquet felis consequat nec. Praesent quis fringilla magna, non cursus enim. Phasellus rutrum lacus dui, vitae tempus libero rhoncus sit amet. Sed semper suscipit lorem et ultricies. In orci lacus, congue posuere ex vulputate, tincidunt blandit nisi. Ut vitae odio egestas, finibus odio sed, mollis leo. <a href="#">Donec</a> vel laoreet sapien, at convallis lorem. Phasellus et iaculis sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vel risus nisl. Suspendisse potenti. Praesent nunc nisl, placerat sed arcu eu, ornare eleifend orci. Donec auctor ante nec feugiat consectetur. Suspendisse eu elementum lacus.</p>
    <p><a href="#">Quisque id lobortis urna</a>. Proin vestibulum gravida malesuada. Etiam augue eros, aliquam et blandit vitae, hendrerit ut mauris. Nulla sed urna a velit mattis consequat. Mauris sed vulputate est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut convallis sem nisi, nec varius nunc accumsan a. Cras suscipit turpis id sollicitudin maximus.</p>
  </div>
  <div class="col-md-4 order-md-2 order-1">
    <img class="img-fluid rounded pb-2" style="max-width: 250px;" src="{{ 'images/avatar.png' | relative_url }}">
  </div>
</div>

{% if site.data.experience %}<h2>Experience</h2>{% endif %}
{% for experience in site.data.experience %}
<h5>{{ experience.name }} <small class="text-muted">{{ experience.where }}</small></h5>
<h6>{{ experience.start }} - {{ experience.end }}</h6>
<p>{{ experience.description }}</p>
{% endfor %}

## Skills

<dl class="row">
  {% for skill in site.data.skills %}
  <dt class="col-sm-3">{{ skill.name }}</dt>
  <dd class="col-sm-9 no-text-select">
    {% for i in (1..10) %}
      {% if i > skill.value %}
        <i class="skill-dot-nofill fas fa-circle fa-lg"></i>
      {% else %}
      <i class="skill-dot-fill fas fa-circle fa-lg"></i>
      {% endif %}
    {% endfor %}
  </dd>
  {% endfor %}
</dl>

## Education

{% for education in site.data.education %}
<h5>{{ education.degree }} <small class="text-muted">{{ education.name }}, {{ education.when }}</small></h5>
{% endfor %}
