require 'test_helper'

class CasketsControllerTest < ActionController::TestCase
  setup do
    @casket = caskets(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:caskets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create casket" do
    assert_difference('Casket.count') do
      post :create, casket: { template: @casket.template, text1: @casket.text1 }
    end

    assert_redirected_to casket_path(assigns(:casket))
  end

  test "should show casket" do
    get :show, id: @casket
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @casket
    assert_response :success
  end

  test "should update casket" do
    patch :update, id: @casket, casket: { template: @casket.template, text1: @casket.text1 }
    assert_redirected_to casket_path(assigns(:casket))
  end

  test "should destroy casket" do
    assert_difference('Casket.count', -1) do
      delete :destroy, id: @casket
    end

    assert_redirected_to caskets_path
  end
end
