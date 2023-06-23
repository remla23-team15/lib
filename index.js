// General functions
/**
 * Get repository latest versioned tag from GitHub API.
 *
 * @param url The repository URL.
 * @returns {Promise<string>} The returned latest version.
 */
async function getGitHubRepoLatestVersion(url) {
    const res = await fetch(url);
    if (res.ok) {
        // Parse response to JSON
        const data = await res.json();
        if (data.length === 0) {
            return "version unknown";
        }

        // Filter versioned tags: vx.x.x
        const regex = new RegExp('v[0-9]+.[0-9]+.[0-9]+', 'g');
        const versionedTags = data.filter(tag => tag.name.match(regex));
        if (versionedTags.length === 0) {
            return "version unknown";
        }

        return `${versionedTags[0].name}`;
    } else {
        return "version unknown";
    }
}

// Request the model-service latest version
/**
 * Get the model-service repository latest version.
 *
 * @returns {Promise<string>} The returned latest version.
 */
async function getModelServiceVersion() {
    return await getGitHubRepoLatestVersion('https://api.github.com/repos/remla23-team15/model-service/tags');
}

// Request the app latest version
/**
 * Get the app repository latest version.
 *
 * @returns {Promise<string>} The returned latest version.
 */
async function getAppVersion() {
    return await getGitHubRepoLatestVersion('https://api.github.com/repos/remla23-team15/app/tags');
}

/**
 * VersionUtil class.
 * This class contains the latest versions of the:
 * - model-service
 * - lib
 * - app
 */
class VersionUtil {
    constructor(version) {
        // Initialize lib version
        this.libVersion = version;

        // Fetch model-service and app versions
        getModelServiceVersion().then(modelServiceVersion => {
            getAppVersion().then(appVersion => {
                this.modelServiceVersion = modelServiceVersion;
                this.appVersion = appVersion;
            });
        });
    }
}

// Init VersionUtil class
const packageJson = require('./package.json');
const packageVersion = new VersionUtil(packageJson.version);

// Export the function
exports.getVersion = () => {
    return `App components versions:\nmodel-service: ${packageVersion.modelServiceVersion}\nlib: v${packageVersion.libVersion}\napp: ${packageVersion.appVersion}`;
}
