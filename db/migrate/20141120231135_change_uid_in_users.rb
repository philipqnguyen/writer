class ChangeUidInUsers < ActiveRecord::Migration
  def change
    change_column(:users, :uid, :string, default: '', null: false)
  end
end
