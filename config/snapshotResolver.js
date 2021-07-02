export default {
  testPathForConsistencyCheck: "some/example.test.tsx",
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath.replace(
      /\.test\.([tj]sx?)/,
      `.test.$1${snapshotExtension}`
    );
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath.replace(snapshotExtension, "");
  },
};
