function doCode() {
  Promise.all([
    import(/* webpackChunkName: 'split-a' */ './screen-A'),
    import(/* webpackChunkName: 'split-b' */ './screen-B')
  ]).then(function(l) { console.log('done', l)});
}

doCode();