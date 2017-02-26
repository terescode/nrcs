import sys
appManager = AdminControl.queryNames(
  'type=ApplicationManager,process=' + sys.argv[0] + ',*')
AdminControl.invoke(appManager, 'stopApplication', sys.argv[1])