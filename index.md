---
layout: default
title: Home
---

# 👋 Welcome, I'm HyeonJun.

---

## 📝 Recent Post

{% assign paginated_posts = paginator.posts | default: site.posts %}
<div class="mb-4" id="recent-posts">
  {% for post in paginated_posts %}
  {% assign src = nil %}
  {% if post.image %}
    {% assign src = post.image.path | default: post.image %}
    {% unless src contains '//' %}
      {% assign src = post.img_path | append: '/' | append: src | replace: '//', '/' %}
    {% endunless %}
  {% endif %}
  <a href="{{ post.url | relative_url }}" class="card-wrapper d-block mb-3">
    <div class="card post-preview"{% if src %} style="--bg-url: url('{{ src }}')"{% endif %}>
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

  {% if paginator and paginator.total_pages > 1 %}
    {% include post-paginator.html %}
  {% endif %}

  {% unless paginator %}
    <p class="text-muted">Pagination is unavailable. Please ensure Jekyll pagination is configured.</p>
  {% endunless %}
</div>
