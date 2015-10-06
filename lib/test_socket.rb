require 'socket'
require 'json'
@host = '127.0.0.1'
@port = 9921

@s = TCPSocket.open(@host, @port)
@s.gets

def send_josn_request_to_socket(json_request)
  @s.puts(json_request)
  @s.flush
  json_response = @s.gets.chomp
  #JSON.parse(json_response)
end

json_request = ARGV[0];
puts send_josn_request_to_socket(json_request)
#json_request_for_get_screen = {"command" => "get_screen"}.to_json
#p send_josn_request_to_socket(json_request_for_get_screen)

@s.close