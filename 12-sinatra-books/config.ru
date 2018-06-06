require_relative './config/environment'

use Rack::MethodOverride

run ApplicationController
