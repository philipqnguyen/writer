class ChangeProviderInUsers < ActiveRecord::Migration
  def change
    change_column(:users, :provider, :string, default: '', null: false)
  end
end
