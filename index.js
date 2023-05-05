/**
 * VersionUtil class.
 */
class VersionUtil {
    constructor(version) {
        this.version = version;
    }
}

// Get version from package file
const packageJson = require('./package.json');
const packageVersion = new VersionUtil(packageJson.version);

// Export the function
exports.getVersion = () => {
    return packageVersion.version;
}
