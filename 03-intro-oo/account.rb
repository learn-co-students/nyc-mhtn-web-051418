require 'pry'

class BankAccount

  attr_accessor :username
  attr_reader :amount

  @@all = []

  def initialize(username)
    @username = username
    @amount = 0

    @@all << self
  end

  def deposit(deposit_amount)
    if (deposit_amount <= 1000)
      @amount += deposit_amount
    else
      puts "TOO MUCH MONEY, #{self.username}"
      false
    end
  end

  def withdraw(withdraw_amount)
    if (withdraw_amount < @amount)
      @amount -= withdraw_amount
    else
      puts "NOT ENOUGH MONEY"
      false
    end
  end


  def self.all
    @@all
  end



end

my_account = BankAccount.new("rishi")
my_account.deposit(400)
max_account = BankAccount.new("max")
max_account.deposit(450)
david_account = BankAccount.new("david")
david_account.deposit(500)
chris_account = BankAccount.new("chris")
chris_account.deposit(1)
avi_account = BankAccount.new("avi")
avi_account.deposit(10)


Pry.start
