import sys
appManager = AdminControl.queryNames(
  'type=ApplicationManager,process=' + sys.argv[0] + ',*')
AdminControl.invoke(appManager, 'startApplication', sys.argv[1])