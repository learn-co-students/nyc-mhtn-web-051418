class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :index
  end

  get "/books" do
    @books = Book.all
    @number_of_books = @books.length
    erb :"books/index"
  end

  #new form
  get "/books/new" do

    locals_hash = { 
      book: Book.new, 
      errors: [], 
      foo: "bar" 
    }
    erb :"books/new", locals: locals_hash
  end

  #post back to make a new one
  post '/books' do
    @book = Book.new(params)
    if @book.save
      redirect "/books/#{ @book.id }"
    else
      erb :"books/new", locals: { book: @book, errors: @book.errors.full_messages }
    end
  end

  get "/books/:id" do
    @book = Book.find_by(id: params[:id])
    if @book
      erb :"books/show"
    else
      status 404
      erb :not_found
    end
  end

  get "/books/:id/edit" do
    @book = Book.find(params[:id])
    erb :"books/edit", locals: { book: @book }
  end

  put "/books/:id" do
    @book = Book.find(params[:id])
    @book.update({
      title: params["title"],
      author: params[:author],
      snippet: params[:snippet],
    })
    redirect "/books/#{ @book.id }"
  end

  delete '/books/:id' do
    Book.find(params[:id]).delete()
    redirect "/books"
  end

end
