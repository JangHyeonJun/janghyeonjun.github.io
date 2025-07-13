---
layout: default
title: Home
---

# 👋 Welcome, I'm HyeonJun.

---

## 📝 Recent Post

{% assign recent_posts = site.posts | slice: 0, 5 %}
<div class="mb-4" id="recent-posts">
  {% for post in recent_posts %}
  <a href="{{ post.url | relative_url }}" class="card-wrapper d-block mb-3">
    <div class="card post-preview flex-md-row-reverse">
      {% if post.image %}
        {% assign src = post.image %}
        {% unless src contains '//' %}
          {% assign src = post.img_path | append: '/' | append: src | replace: '//', '/' %}
        {% endunless %}
        <img src="{{ src }}" w="17" h="10" alt="{{ post.title | xml_escape }}">
      {% endif %}
      <div class="card-body d-flex flex-column">
        <h1 class="card-title my-2 mt-md-0">{{ post.title }}</h1>
        <div class="card-text post-content mt-0 mb-2">
          <p>
            {% include no-linenos.html content=post.content %}
            {{ content | markdownify | strip_html | truncate: 200 | escape }}
          </p>
        </div>
      </div>
    </div>
  </a>
  {% endfor %}
</div>
