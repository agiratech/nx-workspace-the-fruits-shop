module.exports = {
  name: 'the-fruits-shop',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/the-fruits-shop',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
