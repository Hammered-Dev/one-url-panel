# One Url
The repository you're currently looking at is the frontend ui for OneUrl. You'll need a backend api which can be found at [OneUrlBe](https://github.com/Hammered-Dev/OneUrlBe)

OneUrl is a light-weight platform to put all your links in one place based on FastAPI and Next.js.

⚠️Warning: Currently, the security functionality has not been implemented yet. Please don't use it in a production environment; using it personally also carries your own risk.
## Environment variables
### Panel
| Key | Description |
| --- | --- |
| API_URL | The Url to your backend API, with http:// or https:// prefix |
> Notice: the api url should be the one that can be access from external browsers.
### API
https://github.com/Hammered-Dev/OneUrlBe?tab=readme-ov-file#required-environment-variables
## Installation
### Docker (Recommanded)
#### Used Images
- redis
- postgres
- hamsheep/oneurlbe
- hamsheep/oneurlpanel
#### Docker compose
View [example](https://github.com/Hammered-Dev/one-url-panel/blob/master/compose.yaml)
## Development
This project uses npm as project manager
### Requirements
1. [Node.js](https://nodejs.org)
2. VSCode or other IDE you like
### Set up
```bash
# Install dependencies
npm i
# Run dev server
npm run dev
```
