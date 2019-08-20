module.exports = {
  name: 'shared-modules',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/shared-modules',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
