require 'fileutils'
require 'mini_magick'
require 'json'

root_dir      = "#{__dir__}/.."
in_dir        = "#{root_dir}/pictures"
out_dir       = "#{root_dir}/assets/pictures"
data_yml_path = "#{root_dir}/_data/pictures.json"
thumb_width   = 200
pic_width     = 1000
out_arr       = []

if Dir.exists?(out_dir)
  FileUtils.rm_rf(out_dir)
end

Dir.glob "#{in_dir}/**" do |country_path|
  Dir.glob "#{country_path}/**" do |city_path|
    obj = {
      country:  country_path.split('/').last,
      city:     city_path.split('/').last,
      pictures: []
    }

    Dir.glob "#{city_path}/*" do |picture_path|
      filename     = picture_path.split('/').last
      thumbname    = "#{filename.split('.').first}_thumb.#{filename.split('.').last}"
      out_path     = "#{out_dir}/#{obj[:country]}/#{obj[:city]}"
      image        = MiniMagick::Image.open(picture_path)
      thumb_height = image.height * thumb_width / image.width + 1
      pic_height   = image.height * pic_width / image.width + 1

      FileUtils.mkdir_p out_path

      image.resize "#{pic_width}x#{pic_height}"
      image.write "#{out_path}/#{filename}"

      image.resize "#{thumb_width}x#{thumb_height}"
      image.quality 80
      image.write "#{out_path}/#{thumbname}"

      obj[:pictures] << filename
      puts "#{obj[:country]} - #{obj[:city]} - #{filename}"
    end

    out_arr << obj
  end
end

File.write(data_yml_path, out_arr.to_json)
puts 'Done.'
