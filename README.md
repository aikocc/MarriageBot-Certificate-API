# MarriageBot-Certificate-API

The MarriageBot Certificate API is meant for exclusive use by [MarriageBot](https://github.com/Voxel-Fox-Ltd/MarriageBot). This is, however, code that is public for anyone to use, clone, or PR. There is no public running version of this API - it's only used internally by MarriageBot.

## Endpoints

### GET /certs/marriage

Query params

| Parameter | Description | Required |
|-----------|-------------|----------|
| usera | A string for the name of the first user | Yes |
| userb | A string for the name of the second user | Yes |
| timestamp | A unix timestamp when the two users were married | No |

This parameter returns an image containing the edited marriage certificate
