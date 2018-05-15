require 'rest-client'
require 'json'
require 'pry'

resp = RestClient.get 'https://www.reddit.com/.json'

json = JSON.parse(resp.body)

posts = json["data"]["children"]

titles = posts.map do |post|
  post["data"]["title"]
end


def welcome
  puts "Hello! Welcome to my book app."
end

def get_search_term
  puts "What kind of books do you want to see?"
  gets.chomp
end

def make_request(search_term)
  resp = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{search_term}"
  JSON.parse(resp.body)
end

def parse_books(json)
  json["items"].map do |item|
    item["volumeInfo"]
  end
end

def print_book_info(book)
  puts "Title: #{book["title"]}"
  puts "Description: #{book["description"]}"
  puts "Authors: #{book["authors"].join(",")}"
  puts "\n"
end

def run
  welcome
  search_term = get_search_term
  json = make_request(search_term)
  books = parse_books(json)

  books.each do |book|
    print_book_info(book)
  end
end

run
