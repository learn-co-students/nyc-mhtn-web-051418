# STEPS TO SET UP A MODEL IN ACTIVERECORD

1. Create the model file in ruby
```ruby
class Juice < ActiveRecord::Base
end
```

2. Create and run the Migration
`rake db:create_migration NAME=create_juices_table`

```ruby
def change
  create_table :juices do |t|
    t.string :name
    t.integer :price
  end
end
```

`rake db:migrate`

3. CONFIRM THE SCHEMA
`db/schema.rb`
