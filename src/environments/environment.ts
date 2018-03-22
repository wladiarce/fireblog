// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBbxSbGbmD3r293d-jcTLiLdjRPd1ffdNQ',
    authDomain: 'fireblog-core.firebaseapp.com',
    databaseURL: 'https://fireblog-core.firebaseio.com',
    projectId: 'fireblog-core',
    storageBucket: 'fireblog-core.appspot.com',
    messagingSenderId: '204656168212'
  },
  blog_data: {
    title: 'w.log()',
    subtitle: 'Where engineering meets creativity',
    author: 'Wladi Arce'
  }
};
