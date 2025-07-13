Jekyll::Hooks.register :posts, :pre_render do |post|
  next if post.data['image']
  content = post.content.to_s
  match = content.match(/!\[[^\]]*\]\(([^)]+)\)/)
  post.data['image'] = match[1] if match
end
