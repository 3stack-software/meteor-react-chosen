Package.describe({
  name: '3stack:react-chosen',
  version: '1.4.2_2',
  summary: 'A simple react helper for <ReactChosen />',
  git: 'https://github.com/3stack-software/meteor-react-chosen',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('METEOR@1.4');
  api.use([
    'meteor-base',
    'react@15.0.1',
    'eskan:chosen@1.4.2'
  ]);
  api.export('ReactChosen');
  api.addFiles([
    'react-chosen.jsx'
  ], 'client');
});
