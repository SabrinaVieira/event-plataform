import { ApolloClient, InMemoryCache, DefaultOptions} from "@apollo/client";

// const defaultOptions: DefaultOptions = {
//     watchQuery: {
//       fetchPolicy: "no-cache",
//       errorPolicy: "ignore",
//     },
//     query: {
//       fetchPolicy: "no-cache",
//       errorPolicy: "all",
//     },
//   };

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nl559i0a4401xo5le0hvam/master',
    cache: new InMemoryCache(),
    // defaultOptions: defaultOptions,
})