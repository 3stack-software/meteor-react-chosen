Package.describe({
  name: '3stack:react-chosen',
  version: '1.4.2',
  summary: 'A simple react helper for <ReactChosen />',
  git: 'https://github.com/3stack-software/meteor-react-chosen',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.versionsFrom('METEOR@1.2');
  api.use([
    'meteor-base',
    'react@0.1.13',
    'eskan:chosen@1.4.2'
  ]);
  api.export('ReactChosen');
  api.addFiles([
    'react-chosen.jsx'
  ], 'client');
});
