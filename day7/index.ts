/******************************** Decode Params  ********************************/

import { String, Union } from "ts-toolbelt";

const query = `/home?a=hello&b=bye&c=key`;

type Query = typeof query;

type SecondaryQueryPart = String.Split<Query, "?">[1];
type QueryElements = String.Split<SecondaryQueryPart, "&">;

type QueryParams = {
    [QueryElement in QueryElements[number]]: {
        [key in String.Split<QueryElement, "=">[0]]: String.Split<
            QueryElement,
            "="
        >[1];
    };
}[QueryElements[number]];

/**
 * Autocomplete on object members
 */
const obj: Union.Merge<QueryParams> = {
    a: "hello",
    b: "bye",
    c: "key",
};
