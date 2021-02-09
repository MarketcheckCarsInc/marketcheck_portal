require "URI"
require "JSON"

if ARGV.size < 2
  puts "Usage: ruby top_1000_cities.rb <condition : new / used> <out file path>"
  exit 0
end

c = JSON.parse(File.read("top_1000_US_cities.json"))

url = "https://marketcheck.com/srp?car_type=#{ARGV[0]}&radius=25&price_range=0-10000000&miles_range=0-10000000&latitude=##LATITUDE##&longitude=##LONGITUDE##&last_seen_at=0&stats=miles%2Cprice&start=0&rows=##ROWS##&sort_by=last_seen&sort_order=desc&address=##CITY##%20United%20States"

open(ARGV[1], 'w') do |fp|
 c.each{|x| fp.puts url.gsub("##CITY##", URI.encode("#{x["city"]}, #{x["state"]}, ")).gsub("##LATITUDE##", x["latitude"].to_s).gsub("##LONGITUDE##", x["longitude"].to_s).gsub("##ROWS##", "25")}
end
