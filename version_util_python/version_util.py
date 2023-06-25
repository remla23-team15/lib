import re

import requests


def get_git_hub_repo_latest_version(repository_url):
    """
    Retrieve the latest versioned tag from the repository url.
    """
    gh_tags_request = requests.get(repository_url)
    if gh_tags_request.status_code == 200:
        gh_tags = gh_tags_request.json()

        if len(gh_tags) == 0:
            return ""

        regex = re.compile("^v[0-9]+.[0-9]+.[0-9]+")
        gh_tags_versioned = [tag for tag in gh_tags if regex.match(tag["name"])]

        if len(gh_tags_versioned) == 0:
            return ""

        return gh_tags_versioned[0]["name"]
    else:
        return ""


class VersionUtil:
    """
    VersionUtil class to retrieve the latest versions of the model-training and model-service components.
    """
    def __init__(self):
        """
        Initialize the components versions.
        """
        self.model_training_version = get_git_hub_repo_latest_version(
            "https://api.github.com/repos/remla23-team15/model-training/tags"
        )
        self.model_service_version = get_git_hub_repo_latest_version(
            "https://api.github.com/repos/remla23-team15/model-service/tags"
        )


if __name__ == "__main__":
    version = VersionUtil()
    print(f"model-training: {version.model_training_version}")
    print(f"model-service: {version.model_service_version}")
