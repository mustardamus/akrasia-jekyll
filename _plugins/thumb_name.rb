module Jekyll
  module ThumbName
    def thumb_name(i)
      "#{i.split('.').first}_thumb.#{i.split('.').last}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::ThumbName)
