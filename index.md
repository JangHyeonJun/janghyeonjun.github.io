---
layout: default
title: Home
---

# 👋 Welcome, I'm HyeonJun.

---

## 📝 Recent Post

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>
