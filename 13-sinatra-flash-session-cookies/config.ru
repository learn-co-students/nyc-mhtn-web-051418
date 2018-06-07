require_relative './config/environment'

require "sinatra/base"


use AuthorsController
use BooksController
run ApplicationController
