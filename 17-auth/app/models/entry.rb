class Entry < ApplicationRecord

  belongs_to :author, class_name: :User

  def initialize(args={})

    if args[:body].blank?
      args[:body] = Faker::Hipster.paragraphs(4).join("\r\n\r\n")
    end

    if args[:name].blank?
      args[:name] = Faker::Hipster.sentence
    end

    super(args)
  end

end
