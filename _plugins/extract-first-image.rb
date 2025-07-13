Jekyll::Hooks.register :posts, :post_init do |post|
  next if post.data['image']
  match = post.content.match(/!\[[^\]]*\]\(([^)]+)\)/)
  if match
    post.data['image'] = match[1]
  end
end
