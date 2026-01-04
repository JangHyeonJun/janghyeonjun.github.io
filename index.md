---
layout: default
title: Home
---

# 👋 Welcome, I'm HyeonJun.

---

<div class="row home-content" id="home-content">
  <div class="col-12 col-xxl-11">
    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
      <h2 class="mb-0">📝 Recent Posts</h2>
      {% assign posts_per_page = 6 %}
      {% assign total_posts = site.posts | size %}
      {% assign total_pages = total_posts | divided_by: posts_per_page %}
      {% if total_posts modulo posts_per_page != 0 %}
        {% assign total_pages = total_pages | plus: 1 %}
      {% endif %}
      <nav
        id="recent-pagination"
        class="recent-pagination"
        aria-label="Recent posts navigation"
        data-total-pages="{{ total_pages }}"
        data-posts-per-page="{{ posts_per_page }}"
      >
        <button type="button" class="page-arrow" data-pagination="prev" aria-label="Previous page" disabled>
          ‹
        </button>
        <div class="page-numbers" role="list">
          {% for page_index in (1..total_pages) %}
            <button
              type="button"
              class="page-number{% if forloop.first %} active{% endif %}"
              data-page="{{ page_index }}"
              role="listitem"
              aria-label="Go to page {{ page_index }}"
            >
              {{ page_index }}
            </button>
          {% endfor %}
        </div>
        <button type="button" class="page-arrow" data-pagination="next" aria-label="Next page" {% if total_pages == 1 %}disabled{% endif %}>
          ›
        </button>
      </nav>
    </div>

{% assign recent_posts = site.posts | slice: 0, 5 %}
<div class="mb-4" id="recent-posts">
  {% for post in recent_posts %}
  {% assign src = nil %}
  {% if post.image %}
    {% assign src = post.image.path | default: post.image %}
    {% unless src contains '//' %}
      {% assign src = post.img_path | append: '/' | append: src | replace: '//', '/' %}
      {% assign src = src | relative_url %}
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
      </a>
      {% endfor %}
    </div>
  </div>
</div>
