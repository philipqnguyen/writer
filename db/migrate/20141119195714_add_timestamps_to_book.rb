class AddTimestampsToBook < ActiveRecord::Migration
  def change
    add_timestamps(:books)
  end
end
