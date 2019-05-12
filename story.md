
Get image name as argument
`docker-readme ubuntu`

Check that docker-library exists.
    yes? update
    No? git clone

Loop through folders and check that the folder exists
    Exists? Run `less` command
    No? Exit with error


---------------------------

- list only directories
ls -F | grep / | tr -d /
ls ~/.config/docker-readme/library/dockerhub-docs -F | grep / | tr -d /
ls ~/.config/docker-readme/library/dockerhub-docs -Fa | grep / | tr -d /

- App should use ~/.config for storing stuff

- Updating/Cloning should happen separately
`docker-readme init` should download the docs and setup stuff
`docker-readme update` should update the docs
`docker-readme show {image_name}`
`docker-readme list` VIew all available image docs

-----------------------------

- Future commands
`docker-readme fetch {image_name: dockerhub identifier}`
`docker-readme random`


.command('search [keywords]', 'Search pages using keywords')
