# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Albums::Application.initialize!

require "net/http"
require "uri"