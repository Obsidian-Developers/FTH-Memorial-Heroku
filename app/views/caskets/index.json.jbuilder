json.array!(@caskets) do |casket|
  json.extract! casket, :id, :template, :text1
  json.url casket_url(casket, format: :json)
end
