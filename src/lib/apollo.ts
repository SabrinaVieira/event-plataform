import { ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nl559i0a4401xo5le0hvam/master',
    cache: new InMemoryCache()
})