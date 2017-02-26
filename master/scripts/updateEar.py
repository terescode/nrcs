import sys
AdminApp.update(
  sys.argv[0], 
  'app', 
  [
    '-operation', 'update', 
    '-contents', sys.argv[1], 
    '-usedefaultbindings', '-nodeployejb'
  ]
)
AdminConfig.save()