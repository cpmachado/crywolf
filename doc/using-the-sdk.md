# Using the sdk

There was the possibility of using the API directly via some http client like axios, however, after
skimming the documentation, I found:

- the sdk: <https://github.com/uphold/uphold-sdk-javascript>
- The rate limit: <https://uphold.com/en/developer/api/documentation/#rate-limits>

After experimenting, I noticed I didn't need an authenticated sdk to use the required endpoint.
