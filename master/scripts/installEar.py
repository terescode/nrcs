import sys
AdminApp.install(
  sys.argv[0],
  [
    '-usedefaultbindings', '-nodeployejb'
  ]  
)
AdminConfig.save()