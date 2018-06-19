class User < ApplicationRecord


  # attr_reader :password

  has_many :entries, dependent: :destroy, foreign_key: :author_id

  validates :name, :username, :email, :password, presence: true
  validates :username, :email, uniqueness: true

  # def password=(value)
  #   @password = value
  #   # self.foo = "bar"
  #   self.password_digest = BCrypt::Password.create(value)
  # end


  # def authenticate(password)
  #   # self.errors.add(:password, "whatever")
  #   BCrypt::Password.new(password_digest) == password
  # end

  has_secure_password


  
end
