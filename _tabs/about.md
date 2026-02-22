---
title: About
order: 4
---

<div class="about-links">
  <a href="https://github.com/JangHyeonJun" target="_blank" rel="noopener noreferrer" class="about-card github-card">
    <i class="fab fa-github about-card-icon"></i>
    <div class="about-card-info">
      <span class="about-card-platform">GitHub</span>
      <span class="about-card-username">@JangHyeonJun</span>
    </div>
    <i class="fas fa-arrow-right about-card-arrow"></i>
  </a>

  <a href="https://www.linkedin.com/in/janghyeonjun/" target="_blank" rel="noopener noreferrer" class="about-card linkedin-card">
    <i class="fab fa-linkedin about-card-icon"></i>
    <div class="about-card-info">
      <span class="about-card-platform">LinkedIn</span>
      <span class="about-card-username">janghyeonjun</span>
    </div>
    <i class="fas fa-arrow-right about-card-arrow"></i>
  </a>
</div>

<style>
.about-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 420px;
  margin: 3rem auto;
}

.about-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 1.5rem;
  border-radius: 14px;
  text-decoration: none !important;
  color: #fff !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.about-card:hover {
  transform: translateY(-3px);
  text-decoration: none !important;
}

.github-card {
  background: linear-gradient(135deg, #24292e, #3a3f47);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
}

.github-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}

.linkedin-card {
  background: linear-gradient(135deg, #0A66C2, #1e85e0);
  box-shadow: 0 4px 20px rgba(10, 102, 194, 0.35);
}

.linkedin-card:hover {
  box-shadow: 0 8px 30px rgba(10, 102, 194, 0.5);
}

.about-card-icon {
  font-size: 2.2rem;
  flex-shrink: 0;
}

.about-card-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.about-card-platform {
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 1.3;
}

.about-card-username {
  font-size: 0.875rem;
  opacity: 0.8;
}

.about-card-arrow {
  font-size: 0.9rem;
  opacity: 0.6;
  flex-shrink: 0;
}
</style>
