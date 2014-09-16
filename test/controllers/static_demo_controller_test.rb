require 'test_helper'

class StaticDemoControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get store" do
    get :store
    assert_response :success
  end

end
