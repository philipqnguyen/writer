class AddTimestampsToChapter < ActiveRecord::Migration
  def change
    add_timestamps(:chapters)
  end
end
