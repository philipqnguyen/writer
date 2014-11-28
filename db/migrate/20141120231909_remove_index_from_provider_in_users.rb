class RemoveIndexFromProviderInUsers < ActiveRecord::Migration
  def change
    remove_index :users, [:uid, :provider]
    add_index :users, :uid, unique: true
    add_index :users, :provider
  end
end
