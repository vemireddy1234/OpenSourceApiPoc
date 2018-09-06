function() {    
  var env = karate.env; // get system property 'karate.env'
  // karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
myVarName: 'someValue',
baseUrl: 'http://services.groupkt.com'
  }
  if (env == 'dev') {
      config.baseUrl = 'http://services.groupkt.com';
      
  }else if (env == 'qa') {
      config.baseUrl = 'http://services.groupkt.com';
      
  }
  return config;
}

